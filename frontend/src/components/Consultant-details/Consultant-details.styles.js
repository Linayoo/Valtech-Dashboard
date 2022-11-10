import styled from "styled-components"

export const ConsultantDetailsWrapper  = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-top: 110px;
margin-left: 80px;
width: 100vw;
height: 100vh;

div > p:last-child {
    color: #1b253d;
}


/* div > p:first-child {
    color: #1b253d;
} */


div > button {
    color: #1b253d;
    border: 1px solid #42018cc2;
    height: 30px;
    width: 100px;
    font-weight: bolder;
    border-radius: 5px;
    margin-left:20px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 15px;
}

div > button:hover {
    background-color: #220641;
    color: white;
}


h1 {
    color: #1b253d;
  
    margin-bottom: 10px;
}

hr {
    color: #5f5e5e42;
    border: none;
    height: 2px;
    background-color: #8080803e;
    width: 570px;
    margin-bottom: 20px;
    
}


div:not(:first-child) {
    display: flex;
    justify-content: flex-start;
    width: 100%;
}

p {
    font-size: 20px;
    color: grey;
    width: 400px;
    padding: 10px 0;

}

p:first-child {
    font-weight: bolder;
}

h4 {
    font-weight: 400;
    color: white;
    background-color: black;
    border-radius: 16px;
    text-align: center;
    height: 30px;
    padding: 6px;
    margin-right: 8px;
}

`;

export const HeaderStyle  = styled.div`
display: flex;

`;

export const ConsultantStyle  = styled.div`
display: flex;
flex-direction: column;
margin-top: 2%;

p {
    color: #1b253d;
}

`;