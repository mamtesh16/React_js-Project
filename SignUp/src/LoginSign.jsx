import React, { useState } from "react";
import "./LoginSign.css";

const LoginSign = () => {

    const [Action, setAction] = useState("Login");

    function saveData() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
    }

    return (
        <div className="Container">
            <div className="header">
                <div className="text">{Action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">

                {Action === "Login" ? <></> :
                    <div className="input">
                        <input type="text" id="name" placeholder="Name" />
                    </div>
                }

                <div className="input">
                    <input type="email" id="email" placeholder="Email" />
                </div>

                <div className="input">
                    <input type="password" id="password" placeholder="Password" />
                </div>

            </div>

            <div className="forgot-password">
                Lost Password? <span>Click here</span>
            </div>

            <div className="submit-container">
                <div
                    className={Action === "SignUp" ? "submit gray" : "submit"}
                    onClick={() => { setAction("SignUp") }}
                >
                    SignUp
                </div>

                <div
                    className={Action === "Login" ? "submit gray" : "submit"}
                    onClick={() => { setAction("Login") }}
                >
                    Login
                </div>
            </div>

            <div className="save-container">
                <div className="submit" onClick={saveData}>
                    Save
                </div>
            </div>

        </div>
    );
};

export default LoginSign;