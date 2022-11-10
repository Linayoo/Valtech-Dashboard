import styled from "styled-components"





export const ProfileMain = styled.div`
background-color: #8080801e;
width: 85%;
height: 95%;
margin-top: 3%;
`;

export const ProfileInfo = styled.div`
background: linear-gradient(to top, #42018c, #220641); 
width: 100%;
height: 35%;
display: flex;
flex-direction: row;
`;

export const ProfileInfoLeftSide = styled.div`
width: 40%;
height: 100%;
display: flex;
align-items: center;
flex-direction: row;
button {
    color: white;
    align-items: flex-end;
    background-color: blue;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    height: 40px;
    width: 100px;
    border: none;
    margin: 5px;
}
`;

export const ProfilePhoto = styled.div`
width: 50%;
height: 95%;
display: flex;
align-items: center;
justify-content: center;
background-image: url("profile_photo.webp");

`;

export const ProfileRightSide = styled.div`
width: 60%;
height: 100%;
display: flex;
/* justify-content: center; */
flex-direction: column;
margin-top: 1%;
`;

export const NameLocation = styled.div`
width: 100%;
height: 20%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-left: -20%;
/* align-items: flex-start; */

`;

export const ProfileName = styled.form`
/* width: 70%; */
height: 20%;
color: white;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
span{
    color: black;
}
p{
    width: 20%;
}

input{
    background-color: transparent;
    border: none;
    font-size: 20px;
    width: 100%;
    color: white;
    padding-left: 5px;
}

`;

// export const ProfileLocation = styled.div`
// width: 50%;
// height: 20%;
// /* color: black; */
// /* margin-left: -23%; */
// span{
//     color: black;
// }
// input{
//     background-color: transparent;
//     border: none;
//     color: black;
//     font-size: 20px;
//     width: 90%;
//     color: white;
//     padding-left: 5px;
// }
// `;



// export const Proffession = styled.div`
// color: black;
// display: flex;
// flex-direction: row;
// width: 100%;
// height: 5%;
// margin-left: -20%;
// span{
//     color: black;
// }
// input{
//     background-color: transparent;
//     border: none;
//     font-size: 20px;
//     width: 90%;
//     color: white;
//     padding-left: 5px;
// }
// `;

export const ProfileUsername = styled.div`
color: black;
display: flex;
flex-direction: row;
width: 100%;
height: 5%;
margin-left: -20%;
span{
    color: black;
}
input{
    background-color: transparent;
    border: none;
    font-size: 20px;
    width: 90%;
    color: white;
    padding-left: 5px;
}
`;

export const Functions = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 100%;
height: 50%;
align-items: flex-end;
`;

export const FuncContacts = styled.div`
button {
    color: white;
    align-items: flex-end;
    background-color: blue;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    height: 40px;
    width: 100px;
    border: none;
}
`;



export const FuncSendMess = styled.div`
button {
    color: white;
    align-items: flex-end;
    background-color: blue;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    height: 40px;
    width: 100px;
    border: none;
}
`;

export const FunctionTabs = styled.div`
/* margin-bottom: 3%; */
display: flex;
flex-direction: row;
justify-content: space-around;
width: 50%;
height: 30%;
align-items: flex-end;
font-weight: 800;
margin-left: -20%;
`;

export const TabAboutButton = styled.button`
color: white;
display: flex;
width: 110px;
align-items: flex-start;
justify-content: center;
font-size: 15px;
border-radius: 50px;
background-color: #8080801e;
font-family: Arial, Helvetica, sans-serif;
/* padding: 20px; */
border: none;
height: 40px;
margin-bottom: -5px; 
cursor: pointer;
&:hover {
    background-color: #f6f4fbb5;
}

`;

export const TabTimelineButton = styled.button`
color: white;
display: flex;
width: 110px;
align-items: flex-start;
justify-content: center;
font-size: 15px;
border-radius: 50px;
background-color: #8080801e;
;
font-family: Arial, Helvetica, sans-serif;
/* padding: 20px; */
border: none;
height: 40px;
margin-bottom: -5px; 
cursor: pointer;
&:hover {
    background-color: #f6f4fbb5;
}
`;

export const StringsWork = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-left: 15px;
margin-right: 15px;
margin-top: 20px;
border-bottom: 3px solid black;
`;

export const WorkContact = styled.div`
width: 100%;
height: 35%;
display: flex;
flex-direction: row;
`; 


export const ProfileWork = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height:100%;
width: 35%;
/* margin-top: -0.45%; */
margin-left: 15px;
margin-top: 15px;
`;

export const WorkExperience = styled.div`
color: black;
display: flex;
/* margin-top: 30px; */
`;

export const PrimaryWork = styled.form`
display: flex;
flex-direction: column;
/* width:100%; */
input{
    background-color: transparent;
    border: none;
    color: white;
    font-size: 20px;
    width: 90%;
    color: black;
    padding-left: 5px;
}
`;

export const SecondaryWork = styled.form`
display: flex;
flex-direction: column;
/* width: 100%; */
/* height: 5%; */
input{
    background-color: transparent;
    border: none;
    color: white;
    font-size: 20px;
    width: 90%;
    color: black;
    padding-left: 5px;
}
`;

export const ProfileContact = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
/* background-color: blue; */
justify-content: space-around;
width: 35%;
height: 100%;
`;

export const ProfileString = styled.div`
color: black;
display: flex;
padding-bottom: 5px;
width: 35%;
justify-content: center;
`;

export const ProfilePhone = styled.form`
display: flex;
input{
    background-color: transparent;
    border: none;
    color: white;
    font-size: 20px;
    width: 90%;
    color: black;
    padding-left: 5px;
}
`;

export const ProfileAddress = styled.form`
display: flex;
input{
    background-color: transparent;
    border: none;
    color: white;
    font-size: 20px;
    width: 90%;
    color: black;
    padding-left: 5px;
}
`;

export const ProfileEmail = styled.form`
display: flex;
input{
    background-color: transparent;
    border: none;
    color: white;
    font-size: 20px;
    width: 90%;
    color: black;
    padding-left: 5px;
}
`;

export const ProfileSite = styled.form`
display: flex;
input{
    background-color: transparent;
    border: none;
    color: white;
    font-size: 20px;
    width: 90%;
    color: black;
    padding-left: 5px;    
}   
`;

export const ProfileDescription = styled.div`
display: flex;
flex-direction: column;
width: 35%;
margin-top: 5px;
height: 100%;
`;

export const DescriptionString = styled.div`
display: flex;
color: black;
/* justify-content: flex-start;
align-items: flex-start; */
padding-bottom: 5px;
width: 30%;
justify-content: center;
`;

export const TextDescription = styled.form`
display: flex;
color: black;
flex-direction: column;
justify-content: flex-start;
align-items: center;
/* background-color: blue; */
/* justify-content: space-ar; */
/* height: 100%; */
/* width: 100%; */
/* margin-top: 23px; */
input {
/* margin-top: 35px; */
padding-top: 5%;
width: 200px;
height: 350px;
background: transparent;
border: none;
font-size: 20px;
/* width: 90%; */
color: black;
padding-left: 5px;
flex-wrap: wrap;
display: flex;
}
`;


export const StringsSkills = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
border-bottom: 3px solid black; 
`;

export const SkillsString = styled.div`
color: black;
display: flex;
font-size: 25px;
font-family: Arial,Helvetica,sans-serif;
font-weight: 900;
/* justify-content: center; */
`;

export const BasicString = styled.div`
color: black;
font-size: 25px;
font-family: Arial,Helvetica,sans-serif;
font-weight: 900;
`;

export const SkillsBasic = styled.div`
width: 100%;
height: 25%;
display: flex;
flex-direction: row;
/* justify-content: center;
align-items: center; */
margin-left: 15px;

`; 

export const ProfileSkills = styled.div`
width: 50%;
/* height: 80%; */
display: flex;
font-size: 20px;
flex-direction: column;
justify-content: flex-start;
align-items: align-items;
margin-bottom: 20px;
padding-top: 10px;
`; 



export const SkillsAll = styled.div`
color: black;
display: flex;
flex-direction: column;
font-size: 30px;
/* justify-content: space-between; */
`;





export const ProfileBasicInformation = styled.div`
width: 50%;
height: 80%;
display: flex;
font-size: 20px;
flex-direction: column;
/* justify-content: center; */
/* align-items: center; */
margin-top: 30px;
`; 



export const ProfileBirthday = styled.form`
width: 100%;
height: 40%;
display: flex;
flex-direction: row;
justify-content: center;
input{
    background-color: transparent;
    border: none;
    color: black;
    font-size: 25px;
    width: 90%;
    padding-left: 5px;
    font-weight: 900;
}

`; 

export const ProfileGender = styled.div`
width: 100%;
height: 40%;
display: flex;
flex-direction: row;
justify-content: center;
input{
    background-color: transparent;
    border: none;
    color: black;
    font-size: 25px;
    width: 90%;
    padding-left: 5px;
}
`; 

export const ProfileJoined = styled.div`
width: 100%;
height: 40%;
display: flex;
flex-direction: row;
justify-content: center;
input{
    background-color: transparent;
    border: none;
    color: black;
    font-size: 25px;
    width: 90%;
    padding-left: 5px;
}
`; 