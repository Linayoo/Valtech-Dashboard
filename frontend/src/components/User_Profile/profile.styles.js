import styled from "styled-components"


export const ProfileMain = styled.div`
background-color: #8080801e;
width: 85%;
height: 95%;
margin-top: 4%;
font-family: Arial;
`;

export const ProfileInfo = styled.div`
background: linear-gradient(to top, #42018c, #220641); 
width: 100%;
height: 35%;
display: flex;
flex-direction: row;
`;

export const ProfileInfoLeftSide = styled.div`
width: 25%;
height: 100%;
display: flex;
align-items: center;
flex-direction: row;
`;

export const ProfilePhoto = styled.div`
width: 100%;
height: 95%;
display: flex;
align-items: center;
justify-content: center;
img{
    height:100%;
    width:100%;
}
`;

export const ProfileRightSide = styled.div`
width: 75%;
height: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const FieldsProfile = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: flex-start;
height: 100%;
padding: 5px;
`;



export const NameLocation = styled.div`
width: 100%;
height: 20%;
display: flex;
flex-direction: row;
justify-content: space-between;
font-size: 20px;
padding-left: 5%;
`;

export const ProfileName = styled.form`
height: 30%;
width: 100%;
color: white;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
font-size: 20px;
font-weight: 900;

p{
    padding: 5px;
    font-size: 20px;

}
span{
    padding-left: 5px;
}
`;


export const ProfileUsername = styled.div`
color: white;
display: flex;
flex-direction: row;
font-weight: 900;
font-size: 20px;
width: 100%;
padding-left: 5%;

p{
    font-size: 20px;
    padding: 5px;
    padding-top: 15px;
}
span{
    padding-left: 5px;

}
`;

export const ProfileEmail = styled.form`
color: white;
display: flex;
flex-direction: row;
width: 100%;
font-size: 20px;
font-weight: 900;
padding-left: 5%;


p{
    width: 100%;
    padding: 5px;
}
span{
    padding-left: 5px;

}
`;

export const ProfileJoined = styled.div`
width: 100%;
/* height: 40%; */
display: flex;
flex-direction: row;
font-size: 20px;
color: white;
font-weight: 900;
padding-left: 5%;

p{
    width: 100%;
    padding: 5px;
}
span{
    padding-left: 5px;

}
`; 

// export const ChangePhotoButton = styled.div`
//     width: 200px;
//     height: 200px;
//     justify-content: flex-start;
//     align-items: flex-start;
//     font-size: 500px;
// button {
//     color: #1b253d;
//     border: 1px solid #42018cc2;
//     height: 50px;
//     width: 180px;
//     font-weight: bolder;
//     border-radius: 5px;
//     margin-right:50px;
//     margin-top: 20px;
//     font-size: 15px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// }

// button:hover {
//     background-color: #220641;
//     color: white;
// }
// `

export const ButtonProfile = styled.div`
color: black;
display: flex;
justify-content: center;
margin-top: 5%;

`
export const EditUserDetails = styled.button`
color: #1b253d;
    border: 1px solid #42018cc2;
    height: 50px;
    width: 300px;
    font-weight: bolder;
    border-radius: 5px;
    margin-left:20px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 30px;


:hover {
    background-color: #220641;
    color: white;
}
`

