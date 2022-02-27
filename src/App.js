import './styles/App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/pages/view/HomePage";
import AboutPage from "./components/pages/view/AboutPage";
import Cabinet from "./components/pages/cabinet/Cabinet";
import AppointmentToDoctorPage from "./components/pages/cabinet/patient/AppointmentToDoctorPage";
import EditFormPatient from "./components/pages/cabinet/EditFormPatient";
import DiseaseHistoryPage from "./components/pages/cabinet/patient/DiseaseHistoryPage";
import ChiefDoctorPage from "./components/pages/cabinet/chief-doctor/ChiefDoctorPage";
import AllReportsPage from "./components/pages/cabinet/chief-doctor/AllReportsPage";
import AllEmployeesPage from "./components/pages/cabinet/chief-doctor/AllEmployeesPage";
import AllVaccinesPage from "./components/pages/cabinet/chief-doctor/vaccine/AllVaccinesPage";
import DoctorPage from "./components/pages/cabinet/doctor/DoctorPage";
import AllPatientsPage from "./components/pages/cabinet/doctor/AllPatientsPage";
import Users from "./components/tables/Users";
import Main from "./components/tables/Main";
import Diseases from "./components/tables/Diseases";
import Employees from "./components/tables/Employees";
import MedicalCards from "./components/tables/MedicalCards";
import Roles from "./components/tables/Roles";
import UsersAccess from "./components/tables/UsersAccess";
import Vaccines from "./components/tables/Vaccines";
import Appointments from "./components/tables/Appointments";

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

                {/* Tables */}
                <Route path="/tables" element={<Main/>}/>
                <Route path="/tables/appointments" element={<Appointments/>}/>
                <Route path="/tables/diseases" element={<Diseases/>}/>
                <Route path="/tables/employees" element={<Employees/>}/>
                <Route path="/tables/medical-cards" element={<MedicalCards/>}/>
                <Route path="/tables/roles" element={<Roles/>}/>
                <Route path="/tables/users" element={<Users/>}/>
                <Route path="/tables/users-access" element={<UsersAccess/>}/>
                <Route path="/tables/vaccines" element={<Vaccines/>}/>
            </Routes>
        </div>
    );
}

export default App;
