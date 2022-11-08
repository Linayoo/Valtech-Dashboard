import styled from "styled-components";
import { keyframes } from "styled-components";

const transparentAutofill = keyframes`
    100% {
        background: transparent;
        color: inherit;
    }
`

export const LoginMain = styled.div`
background-image: url("65.png");
/* background-color: rgba(128,128,128, 0.8); */
/* background-blend-mode: overlay; */
/* filter: grayscale(1); */
/* opacity: 50%; */
font-family: "Helvetica Neue",sans-serif;

background-repeat: no-repeat;
background-size: cover;
width: 100vw;
height: 100vh;
z-index: 0;
position: relative;
display: flex;
/* opacity: 80%; */
/* flex-direction: column; */
align-items: center;
`;

export const LoginBar = styled.div`
background: linear-gradient(to top, #42018c, #220641);
/* color: purple; */
/* filter: none; */
z-index: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 30%;
height: 70%;
border-radius:10px;
position: absolute;
margin-left: 35%;
`;

export const LogoString = styled.div`
color: white;
font-size: 80px;
font-family: "Helvetica Neue",sans-serif;
font-weight: 400;
display: flex;
`;

export const LoginForm = styled.form`
margin-top: 50px;
font-size: 30px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
input{
outline: none;    
background: transparent;
width: 250px;
border: none;
font-size: 20px;
display: flex;
flex-direction: column;
padding-left: 15px;
padding-bottom: 15px;
margin-top: 20px;
border-bottom: 0.5px solid white;


/* &:-webkit-autofill,
  &:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s white;
} */



::placeholder {
    color: white;
}
}
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
border: 1px solid transparent;
-webkit-text-fill-color: white;
-webkit-box-shadow: 0 0 0px 1000px transparent inset;
transition: background-color 5000s ease-in-out 0s;
border-bottom: 0.5px solid white;
}

`;

export const LoginRemember = styled.div`
color: white;
display: flex;
flex-direction: row;
margin-right: 150px;
margin-bottom: 20px;
margin-top: 10px;
font-family: "Helvetica Neue",sans-serif;
padding-right: 5px;
p{
    padding-left: 5px;
    font-size: 12px;
}
`;

export const LoginButton = styled.button`
color: black;
display: flex;
width: 110px;
align-items: center;
justify-content: center;
font-size: 15px;
border-radius: 50px;
background-color: white;
font-family: Arial, Helvetica, sans-serif;
padding: 20px;
border: none;
height: 40px;
margin-bottom: 50px;
cursor: pointer;
&:hover {
    background-color: #f6f4fbb5;
}
`;

export const LoginForget = styled.div`
color: white;
width: 200px;
height: 20px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-top: 10%;
`;