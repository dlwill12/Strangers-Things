import { deleteLoginCookie } from "../API/LoginApi";

export default function PostLogin({setIsLoggedIn}) {
    return <LogoutComponent setIsLoggedIn={setIsLoggedIn}/>
}

function LogoutComponent({setIsLoggedIn}){
    // deleteLoginCookie();
    return (<>
        <h2>You are logged in!</h2>
</>)
}

