import './styles/App.css';
import React from "react";
import {Route} from "react-router-dom";
import HomePage from "./components/pages/view/HomePage";
import AboutPage from "./components/pages/view/AboutPage";
import Cabinet from "./components/pages/cabinet/Cabinet";
import AllAppointmentsPatientPage from "./components/pages/cabinet/patient/appointment/AllAppointmentsPatientPage";
import DiseaseHistoryPage from "./components/pages/cabinet/patient/medical-card/DiseaseHistoryPage";
import ChiefDoctorPage from "./components/pages/cabinet/chief-doctor/ChiefDoctorPage";
import AllReportsPage from "./components/pages/cabinet/chief-doctor/AllReportsPage";
import AllEmployeesPage from "./components/pages/cabinet/chief-doctor/employee/AllEmployeesPage";
import AllVaccinesPage from "./components/pages/cabinet/chief-doctor/vaccine/AllVaccinesPage";
import DoctorPage from "./components/pages/cabinet/doctor/DoctorPage";
import AllMedicalCardsPage from "./components/pages/cabinet/doctor/medical-cards/AllMedicalCardsPage";
import EditProfileCabinetPage from "./components/pages/cabinet/EditProfileCabinetPage";
import AllAppointmentsDoctorPage from "./components/pages/cabinet/doctor/appointment/AllAppointmentsDoctorPage";
import PatientVaccines from "./components/pages/cabinet/doctor/vaccine/PatientVaccines";
import ProtectRoute from "./components/common/ProtectRoute";

function App() {
    return (
        <div className="App">
            {/* Common pages */}
            <Route exact path="/" component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
            <ProtectRoute exact path="/cabinet" component={Cabinet}/>
            <ProtectRoute path="/cabinet/edit" component={EditProfileCabinetPage}/>
            <ProtectRoute path="/cabinet/appointment-doctor" component={AllAppointmentsPatientPage}/>
            <ProtectRoute path="/cabinet/history" component={DiseaseHistoryPage}/>

            {/* Doctor's pages */}
            <ProtectRoute exact path="/cabinet/doctor" component={DoctorPage}/>
            <ProtectRoute path="/cabinet/doctor/medical-cards" component={AllMedicalCardsPage}/>
            <ProtectRoute path="/cabinet/doctor/appointments" component={AllAppointmentsDoctorPage}/>
            <ProtectRoute path="/cabinet/doctor/patient-vaccines" component={PatientVaccines}/>

            {/* Chief-doctor's pages */}
            <ProtectRoute exact path="/cabinet/chief-doctor" component={ChiefDoctorPage}/>
            <ProtectRoute path="/cabinet/chief-doctor/all-employees" component={AllEmployeesPage}/>
            <ProtectRoute path="/cabinet/chief-doctor/all-vaccines" component={AllVaccinesPage}/>
            <ProtectRoute path="/cabinet/chief-doctor/all-reports" component={AllReportsPage}/>
        </div>
    );
}

export default App;
