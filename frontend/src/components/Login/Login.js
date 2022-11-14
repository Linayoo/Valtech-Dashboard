import { LoginMain, LogoString, LoginRemember, LoginForm, LoginBar, LoginButton, LoginForget } from "./login-styles"
import { useNavigate} from 'react-router-dom';
import { useState } from "react";

function Login() {

    const navigate = useNavigate();
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const post = "POST"
    const header = new Headers({
        "content-type": "application/json"
    })
    const body = JSON.stringify({
        "username": `${username}`,
        "password": `${password}`, 
    })
    const postconfig = {
        method: post,
        headers: header,
        body: body
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("https://valtech-dashboard.propulsion-learn.ch/backend/api/token/", postconfig)
            .then(response => response.json())
            .then((data) => {
                if (data.access) {
                    localStorage.setItem("valtech-auth", data.access);
                    console.log(localStorage.getItem("valtech-auth"));
                    navigate('insights/');
                } else {
                    alert('Invalid username or password. Please try again!')
                }
            })
            .catch(error => console.log(error))
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    };

    return(
        <LoginMain>
            <LoginBar>
            <LogoString>
                valtech_
            </LogoString>
            <LoginForm id='log' onSubmit={handleSubmit}>
                <input form="log" type="text" name="email" placeholder="Email" onChange={handleUsernameChange}></input>
                <input form="log" type="text" name="password" placeholder="Password" onChange={handlePasswordChange}></input>
            </LoginForm> 
            <LoginRemember>
                <input type="checkbox"></input>
                <p>Remember me</p>
            </LoginRemember>
            <LoginButton form="log" type="submit">
                <p>Login</p>
            </LoginButton>
            <LoginForget>
                <p>Forgot password?</p>
            </LoginForget>
            </LoginBar>
        </LoginMain>
    )
}

export default Login