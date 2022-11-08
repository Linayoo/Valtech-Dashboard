import { LoginMain, LogoString, LoginRemember, LoginForm, LoginBar, LoginButton, LoginForget } from "./login-styles"
import { useNavigate } from 'react-router-dom';
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
        fetch("http://localhost:8000/token/", postconfig)
            .then(response => response.json())
            .then((data) => {localStorage.setItem("valtech-auth", JSON.stringify(data.access)); navigate('home/') })
            .catch(error => console.log(error))
    }

    return(
        <LoginMain>
            {/* <LoginBg>
                <img src='bk.jpeg' alt='img'></img>
            </LoginBg> */}
            <LoginBar>
            <LogoString>
                valtech_
            </LogoString>
            <LoginForm id='log' onSubmit={handleSubmit}>
                <input form="log" type="text" name="email" placeholder="Email" onChange={(e) => setUsername(e.target.value)}></input>
                <input form="log" type="text" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
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