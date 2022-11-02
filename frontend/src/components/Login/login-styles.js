import styled from "styled-components";



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
opacity: 80%;
/* flex-direction: column; */
align-items: center;
`;

export const LoginBar = styled.div`
background: linear-gradient(to top, #531ebd, #8d54e966);/* background-size: cover; */
color: purple;
filter: none;
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
/* filter: brightness(100%); */
`;

// export const LoginLeft =styled.div`
// width: 50%;
// height: 100%;
// display: flex;
// flex-direction: column;
// align-items: center;
// `;

// export const LoginRight =styled.div`
// width: 50%;
// height: 100%;
// display: flex;
// flex-direction: column;
// align-items: center;
// `;

// export const WelcomeLog = styled.div`
// color: white;
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// margin-top: 160px;
// font-size: 50px;
// opacity: 100%;
// `;

// export const AboutText = styled.div`
// color: white;
// display: flex;
// flex-direction: column;
// font-size: 25px;
// width: 50%;
// height: 100%;
// padding-left: 50px;
// padding-right: 50px;
// align-items: center;
// justify-content: center;
// margin-top: 5px;
// `;


export const LogoString = styled.div`
color: white;
/* -webkit-text-fill-color: transparent;
background-image: linear-gradient(45deg, #f3ec78, #af4261);
background-size: 100%;
background-clip: text; */
/* margin-top: 100px; */
font-size: 70px;
font-family: "Helvetica Neue",sans-serif;
font-weight: 900;
display: flex;

/* justify-content: flex-start;
align-items: flex-start; */
`;

export const LoginForm = styled.form`
margin-top: 50px;
font-size: 30px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
color: white;
input{
outline: none;    
background: transparent;/* background-size: cover; */
color: white;
width: 250px;
border: none;
font-size: 20px;
display: flex;
flex-direction: column;
padding-left: 15px;
padding-bottom: 15px;
border-color: white;
margin-top: 20px;
border-bottom: 0.5px solid white;

::placeholder {
    color: white;
}
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
padding-right: 18px;
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
/* margin-top: 2%; */
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