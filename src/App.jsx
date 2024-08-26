
import './App.css'
import Header from "./Components/Header.jsx";
import kisaan from "../src/assets/images/kisaan.png"
import {Route, Routes} from "react-router-dom";
import Login_page from "./pages/login_page.jsx";
import Register from "./pages/register.jsx";
import Otp_enter from "./pages/otp_enter.jsx";
import Dashboard from "./pages/Dashboard.jsx";
function App() {


    return (
        <>
            <Header/>

            <img src={kisaan} className="kisaan_background" alt="real"/>

            <Routes>
                <Route element={<Login_page/>} path="/"></Route>
                <Route element={<Register/>} path="/register"/>
                <Route element={<Otp_enter/>} path="/register/otp"/>
                <Route element={<Dashboard/>} path={"/dashboard"}/>
            </Routes>
        </>
    );
}

export default App
