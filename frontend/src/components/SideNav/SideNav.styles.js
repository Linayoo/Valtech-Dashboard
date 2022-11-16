import styled from "styled-components"

export const NavContainer  = styled.div`
width: 215px;
/* margin-top: -80px; */
background: linear-gradient(to top, #42018c, #220641); 
/* background-color: black; */
display: flex;
flex-direction: column;
align-items: center;
border-radius: 0 5px 5px 0;
box-shadow: 0px 0px 25px -2px #555;
/* position: fixed; */
height: 100vh;

@media only screen and (min-width: 1500px) {
    width: 260px;
}

h1 {
    padding-top: 50px;
    color: #ffffffdf;
    font-family: Helvetica, sans-serif;
    font-size: 40px;
    font-weight: 400;
    @media only screen and (min-width: 1500px) {
    font-size: 45px;
}

}

button {
    display: flex;
    background-color: transparent;
    align-items: center;
    color: rgba(255, 255, 255, 0.55);
    border:none;
    width: 100%;
    height: 65px;
    padding: 15px;
    font-size: 15px;
    margin-top: 3px;
    margin-bottom: 3px;
    @media only screen and (min-width: 1500px) {
    font-size: 20px;
}
}

button > p {
    margin-right:18px;
    margin-left: 15px;
    color: #ffffffa8;
    
    @media only screen and (min-width: 1500px) {
    margin-left: 40px;
    margin-right: 25px;
}
}

button:first-of-type {
    margin-top: 60px;
}

button:hover {
    background-color:#42018c ;
    transform: scale(1.1);
    width: 90%;
}

button:focus {
    background-color: #170d22a7;
    transform: scale(1.1);
    border-left: 2px solid #fafafa8f ;
    width: 90%;
    height: 70px;
}


div {
    position: sticky;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    margin-top: 150px;
    width: 100%;
}

div > button {
    font-size: 20px;
}

img {
    width: 120px;
    height: 30px;
    margin-top: 30px;
    margin-bottom: 20px;
    margin-left: -25px;
    filter: opacity(75%)
}
    
`;