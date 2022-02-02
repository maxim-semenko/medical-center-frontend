import './styles/App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import Cabinet from "./components/pages/Cabinet";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/cabinet" element={<Cabinet/>}/>
            </Routes>
        </div>
    );
}

export default App;
