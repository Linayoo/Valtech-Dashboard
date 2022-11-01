import { LoginMain, LogoString, LoginBg, LoginRemember, LoginForm, LoginBar, LoginButton, LoginLeft, LoginRight, AboutText, WelcomeLog, LoginForget } from "./login-styles"
import useNavigate from 'react-router-dom';
import { useState } from "react";

function Login() {

    // const navigate = useNavigate();
    // const [email, setEmail] = useState()
    // const [password, setPassword] = useState()

    // const post = "POST"
    // const header = new Headers({
    //     "content-type": "application/json"
    // })

    // const body = JSON.stringify({
    //     "email": `${email}`,
    //     "password": `${password}`, 
    // })

    // const postconfig = {
    //     method: post,
    //     headers: header,
    //     body: body
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     fetch("https://team3luna.propulsion-learn.ch/api/auth/token/", postconfig)
    //         .then(response => response.json())
    //         .then((data) => {localStorage.setItem("luna-auth", JSON.stringify(data.access)); navigate('../../') })
    //         .catch(error => console.log(error))
    // }

    return(
        <LoginMain>
            {/* <LoginBg>
                <img src='bk.jpeg' alt='img'></img>
            </LoginBg> */}
            <LoginBar>
            <LogoString>
                Valtech_
            </LogoString>
            <LoginForm>
                <input type='text' placeholder="Email"></input>
                <input type='text' placeholder="Password"></input>
            </LoginForm>
            <LoginRemember>
                <input type="checkbox"></input>
                <p>Remember me</p>
            </LoginRemember>
            <LoginButton>
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