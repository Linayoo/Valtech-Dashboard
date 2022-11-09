import { LoginMain, LogoString, LoginRemember, LoginForm, LoginBar, LoginButton, LoginForget } from "./login-styles"
import { useNavigate} from 'react-router-dom';
// import { useDispatch } from 'react-router-dom';
import { useEffect, useState } from "react";

function Login() {

    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    // const [token, setToken] = useState()

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
      };
        
      const handlePasswordChange = (e) => {
        setPassword(e.target.value)
      };
      

    //   const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const url = "http://localhost:8000/token/"
        // const tokenFrom = localStorage.setItem("valtech-auth", JSON.stringify(data.access))
        // const tokenJsOj = JSON.parse(tokenFrom)

        

        // const jsBody = {
        //     "username": username,
        //     "password": password,
        // }
        
        // const config = {
        //     method: "POST",
        //     headers: new Headers ({
        //         "Content-Type": "application/json"
        //     }),
        //    body: JSON.stringify(jsBody)
        // }
    


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

    
        // fetch(url, config)
        //     .then((response) => {
        //         console.log(response)
        //         if (response.status === 200) {
        //             console.log("fetch worked")
        //             const json = response.json();
        //             return json
        //         } 
        //         else {
        //             console.log(response.json())                        
        //         }
        //     })
        //     .then(data => {setToken(data.access) 
        //         console.log(token)});
        // }

        // useEffect(() =>{
        //     const jsObject = {
        //         ValtechToken: token
        //     }
        //     if (token) {
        //         localStorage.setItem("valtech-auth", JSON.stringify(jsObject));
        //         console.log("the token was stored");
        //         navigate("home/")           
        //     }
        // }, [token]);
            
        



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