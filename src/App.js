// ====================================general imports====================================
import React,{useEffect} from "react"
import { Route, Routes } from "react-router-dom";
import "./App.css";

// ================================redux================================
import { useSelector } from "react-redux";

// ====================================component imports====================================
// ======================general======================
import Navbar from "./Components/General/Navbar";
import { Toolbar } from "@mui/material";

// ====================================page imports====================================
// ======================authenticaion======================
import RegistrationPage from "./Pages/Authentication/RegistrationPage";
import LoginPage from "./Pages/Authentication/LoginPage";
import LogoutPage from "./Pages/Authentication/LogoutPage";

// ======================homepages======================
import Homepage from "./Pages/Home/Homepage";
import Landingpage from "./Pages/Home/Landingpage";

// ======================projects======================
import CreateProjectPage from "./Pages/Projects/CreateProjectPage";
import ProjectListPage from "./Pages/Projects/ProjectListPage";
import EditProjectPage from "./Pages/Projects/EditProjectPage";
import IndividualProjectPage from "./Pages/Projects/IndividualProjectPage";

// ======================chat======================
import Userchat from "./Pages/Chat/Userchat";

// ======================users======================
import UserProfile from "./Pages/User/UserProfile";

import UserProjectPage from "./Pages/Projects/UserProjectPage";

// ======================redirect======================
import RedirectPage from "./Pages/Redirect/RedirectPage";
import ErrorPage from "./Pages/Redirect/ErrorPage";

// import axios from "axios"

function App() {
    const username = useSelector((state) => state.username);
    // useEffect(()=>{
    //     axios.get(process.env.REACT_APP_SOCKET_API).then((res)=>{
    //         console.log("res",res.data)
    //     })
    // },[])
    return (
        <div className="App">
            <Navbar />
            <Toolbar />
            <div className="pageContainer">
                {/* ======================authenticaion====================== */}
                <Routes>
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route
                        exact
                        path="/register"
                        element={<RegistrationPage />}
                    />
                    <Route exact path="/logout" element={<LogoutPage />} />

                    {/* ======================home====================== */}
                    <Route exact path="/home" element={<Homepage />} />
                    <Route exact path="/landing" element={<Landingpage />} />

                    {/* ======================projects====================== */}
                    <Route
                        exact
                        path="/projects"
                        element={<ProjectListPage />}
                    />
                    <Route
                        exact
                        path="/projects/create"
                        element={<CreateProjectPage />}
                    />
                    <Route
                        exact
                        path="/projects/edit/:projectId"
                        element={<EditProjectPage />}
                    />
                    <Route
                        exact
                        path="/projects/:projectId"
                        element={<IndividualProjectPage />}
                    />

                    {/* ======================chat====================== */}
                    <Route exact path="/chat" element={<Userchat />} />

                    {/* ======================users====================== */}
                    <Route
                        exact
                        path="/user/projects"
                        element={<UserProjectPage />}
                    />
                    <Route
                        exact
                        path="/user/profile/:userId"
                        element={<UserProfile />}
                    />
                    {/* ======================redirect====================== */}
                    <Route exact path="/" element={<RedirectPage />} />
                    <Route exact path="*" element={<ErrorPage />} />
                </Routes>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
