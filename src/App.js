import './styles/App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/pages/view/HomePage";
import AboutPage from "./components/pages/view/AboutPage";
import Cabinet from "./components/pages/cabinet/Cabinet";
import AllAppointmentsPage from "./components/pages/cabinet/patient/appointment/AllAppointmentsPage";
import DiseaseHistoryPage from "./components/pages/cabinet/patient/DiseaseHistoryPage";
import ChiefDoctorPage from "./components/pages/cabinet/chief-doctor/ChiefDoctorPage";
import AllReportsPage from "./components/pages/cabinet/chief-doctor/AllReportsPage";
import AllEmployeesPage from "./components/pages/cabinet/chief-doctor/AllEmployeesPage";
import AllVaccinesPage from "./components/pages/cabinet/chief-doctor/vaccine/AllVaccinesPage";
import DoctorPage from "./components/pages/cabinet/doctor/DoctorPage";
import AllMedicalCardsPage from "./components/pages/cabinet/doctor/AllMedicalCardsPage";
import Users from "./components/tables/user/Users";
import Main from "./components/tables/Main";
import Diseases from "./components/tables/desease/Diseases";
import Employees from "./components/tables/employee/Employees";
import MedicalCards from "./components/tables/medical-card/MedicalCards";
import Roles from "./components/tables/role/Roles";
import UsersAccess from "./components/tables/UsersAccess";
import Vaccines from "./components/tables/vaccine/Vaccines";
import Appointments from "./components/tables/appointment/Appointments";
import EditProfileCabinetPage from "./components/pages/cabinet/EditProfileCabinetPage";

function App() {
    return (
        <div className="App">
            <Routes>

                {/* Common pages */}
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/cabinet" element={<Cabinet/>}/>
                <Route path="/cabinet/edit" element={<EditProfileCabinetPage/>}/>
                <Route path="/cabinet/appointment-doctor" element={<AllAppointmentsPage/>}/>
                <Route path="/cabinet/history" element={<DiseaseHistoryPage/>}/>

                {/* Doctor's pages */}
                <Route path="/cabinet/doctor" element={<DoctorPage/>}/>
                <Route path="/cabinet/doctor/all-patients" element={<AllMedicalCardsPage/>}/>

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
