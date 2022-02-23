import './styles/App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/pages/view/HomePage";
import AboutPage from "./components/pages/view/AboutPage";
import Cabinet from "./components/pages/cabinet/Cabinet";
import AppointmentToDoctorPage from "./components/pages/cabinet/AppointmentToDoctorPage";
import EditFormPatient from "./components/pages/cabinet/EditFormPatient";
import DiseaseHistoryPage from "./components/pages/cabinet/DiseaseHistoryPage";
import ChiefDoctorPage from "./components/pages/cabinet/chief-doctor/ChiefDoctorPage";
import AllReportsPage from "./components/pages/cabinet/chief-doctor/AllReportsPage";
import AllEmployeesPage from "./components/pages/cabinet/chief-doctor/AllEmployeesPage";
import AllVaccinesPage from "./components/pages/cabinet/chief-doctor/vaccine/AllVaccinesPage";
import DoctorPage from "./components/pages/cabinet/doctor/DoctorPage";
import AllPatientsPage from "./components/pages/cabinet/doctor/AllPatientsPage";

function App() {
    return (
        <div className="App">
            <Routes>

                {/* Common pages */}
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/cabinet" element={<Cabinet/>}/>
                <Route path="/cabinet/edit" element={<EditFormPatient/>}/>
                <Route path="/cabinet/appointment-doctor" element={<AppointmentToDoctorPage/>}/>
                <Route path="/cabinet/history" element={<DiseaseHistoryPage/>}/>

                {/* Doctor's pages */}
                <Route path="/cabinet/doctor" element={<DoctorPage/>}/>
                <Route path="/cabinet/doctor/all-patients" element={<AllPatientsPage/>}/>

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
