import { useState } from "react";
import { checkIfLoggedIn } from "../API/LoginApi";
import SignUpForm from "../components/SignupForm";
import PostLogin from "../components/PostLogin";
import LoginForm from "../components/LoginForm";
import Cookies from "js-cookie";

export default function UserLanding() {
    const [isLoggedIn, setIsLoggedIn] = useState(checkIfLoggedIn());
    const [signUpFormSelected, setSignUpFormSelected] = useState(false);

    function renderVisibleForm() {
        if (isLoggedIn) {
            return <div className="loginMain">
                <div className="loginComponent">
                    <PostLogin setIsLoggedIn={setIsLoggedIn}/>
                </div>
            </div>
        }
        else if (signUpFormSelected) {
            return <div className="loginMain">
                <div className="loginComponent">
                    <SignUpForm setSignUpFormSelected={setSignUpFormSelected} setIsLoggedIn={setIsLoggedIn}/>
                </div>
            </div>
        }
        else {
            return <div className="loginMain">
                <div className="loginComponent">
                    <LoginForm setSignUpFormSelected={setSignUpFormSelected} setIsLoggedIn={setIsLoggedIn}/>
                </div>
            </div>
        }
    }

    return renderVisibleForm();
}
