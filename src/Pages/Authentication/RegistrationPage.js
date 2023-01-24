import React, { useEffect, useState } from "react";
import UserForm from "../../Components/Authentication/UserForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    loginPageAuthCheck,
    getCurrentUser,
} from "../../HelperFunctions/authCheck";

import { useDispatch } from "react-redux";
import { userActions } from "../../Store";
import Loader from "../../Components/General/Loader";

function RegistrationPage() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const register = async (newUser) => {
        await axios
            .post(process.env.REACT_APP_API_LINK + "/users/", newUser)
            .then((res) => {
                const { message } = res.data;
                alert(message);
                navigate("/login")
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const loadPage = async () => {
        setLoading(true);
        await loginPageAuthCheck(navigate)
            .then((res) => {
                const { name, id } = getCurrentUser(res);
                dispatch(userActions.login({ name, id }));
                setLoading(false);
            })
            .catch(() => {
                dispatch(userActions.logout());
                setLoading(false);
            });
    };

    useEffect(() => {
        loadPage();
    },[]);

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <UserForm mode="register" submitFunction={register} />
            )}
        </div>
    );
}

export default RegistrationPage;
