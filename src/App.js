import './styles/App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
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

function App() {
    return (
        <div className="App">
            <Routes>

                {/* Common pages */}
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/cabinet" element={<Cabinet/>}/>
                <Route path="/cabinet/edit" element={<EditProfileCabinetPage/>}/>
                <Route path="/cabinet/appointment-doctor" element={<AllAppointmentsPatientPage/>}/>
                <Route path="/cabinet/history" element={<DiseaseHistoryPage/>}/>

                {/* Doctor's pages */}
                <Route path="/cabinet/doctor" element={<DoctorPage/>}/>
                <Route path="/cabinet/doctor/medical-cards" element={<AllMedicalCardsPage/>}/>
                <Route path="/cabinet/doctor/appointments" element={<AllAppointmentsDoctorPage/>}/>
                <Route path="/cabinet/doctor/patient-vaccines" element={<PatientVaccines/>}/>

                {/* Chief-doctor's pages */}
                <Route path="/cabinet/chief-doctor" element={<ChiefDoctorPage/>}/>
                <Route path="/cabinet/chief-doctor/all-employees" element={<AllEmployeesPage/>}/>
                <Route path="/cabinet/chief-doctor/all-vaccines" element={<AllVaccinesPage/>}/>
                <Route path="/cabinet/chief-doctor/all-reports" element={<AllReportsPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
