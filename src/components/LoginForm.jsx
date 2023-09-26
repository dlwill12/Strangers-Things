import { useState } from "react";
import { userLogin } from "../API/LoginApi";
import Cookies from "js-cookie";
export default function LoginForm({ setSignUpFormSelected, setIsLoggedIn }) {
    const [userName, setUserName] = useState("");
    const [passWord, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await userLogin(userName, passWord);
            console.log(response);
            if (response.data != null) {
                Cookies.set(`loginToken`, response.data.token, 99, { sameSite: 'lax' });
                alert(response.data.message);
                setIsLoggedIn(true);
            }
            else {
                alert(response.error.message);
                setError(response.error.message);
            }
            // console.log(Cookies.get("loginToken"));
        }
        catch (e) {
            setError(e);
            console.error(e);
        }
    }

    function switchToSignup() {
        setSignUpFormSelected(true);
    }


    return <>
        <h2>Please sign in!</h2>
        {error != null && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label>
                Username:{" "}
                <input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </label>
            <label>
                Password:{" "}
                <input
                    type="password"
                    value={passWord}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button>Submit</button>
        </form>
        <form onSubmit={switchToSignup}>
            <label>No account?</label><button>Sign up!</button>
        </form>
    </>
}