import styled from "styled-components"

export const ProfileMain = styled.div`
background-color: white;
width: 100vw;
height: 100vh;
`;

export const ProfileInfo = styled.div`
background: linear-gradient(to top, #531ebd, #8d54e966);
width: 100vw;
height: 40%;
display: flex;
flex-direction: row;
`;

export const ProfileInfoLeftSide = styled.div`
width: 35%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
button {
    color: black;
    align-items: flex-end;
}
`;

export const ProfilePhoto = styled.div`
width: 300px;
height: 300px;
display: flex;
align-items: center;
justify-content: center;
background-image: url("profile_photo.webp");

`;

export const ProfileRightSide = styled.div`
width: 65%;
height: 300px;
display: flex;
/* justify-content: center; */
flex-direction: column;
margin-top: 30px;
`;

export const NameLocation = styled.div`
width: 100%;
height: 30px;
display: flex;
flex-direction: row;
justify-content: space-around;

`;

export const ProfileName = styled.form`
width: 50%;
height: 30px;
color: white;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
font-size: 20px;
input{
    background-color: transparent;
    border: none;
    color: white;
    font-size: 20px;
    width: 50%;
}
`;

export const ProfileLocation = styled.div`
width: 50%;
height: 30px;
color: white;
input{
    background-color: transparent;
    border: none;
    color: white;
    font-size: 20px;
    width: 30%;
}
`;



export const Proffession = styled.div`
color: black;
display: flex;
flex-direction: row;
width: 100%;
height: 100px;
input{
    background-color: transparent;
    border: none;
    color: white;
    font-size: 20px;
    width: 65%;
}
`;

export const Functions = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 100%;
height: 250px;
align-items: flex-end;
`;

export const FuncContacts = styled.div`
color: white;
`;

export const FuncReportUser = styled.div`
color: white;
`;

export const FuncSendMess = styled.div`
color: white;
`;

export const FunctionTabs = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 50%;
height: 250px;
align-items: flex-end;
font-weight: 800;
margin-left: -70px;
`;

export const TabAbout = styled.div`
color: black
`;

export const TabTimeline = styled.div`
color: black
`;

export const WorkContact = styled.div`
width: 100vw;
height: 35%;
background-color: white;
display: flex;
flex-direction: row;
justify-content: space-around;
`; 



export const ProfileWork = styled.div`
display: flex;
flex-direction: column;
/* background-color: grey; */
justify-content: space-around;
`;

export const WorkExperience = styled.div`
color: black;
display: flex;
margin-top: 30px;
/* align-items: flex-start;
justify-content: flex-start; */
border-bottom: 1px solid black;
padding-bottom: 5px;
`;

export const PrimaryWork = styled.form`
display: flex;
flex-direction: column;
input{
    background-color: transparent;
    border: none;
    color: white;
    font-size: 20px;
    width: 85%;
}
/* background-color: green; */
`;

export const SecondaryWork = styled.form`
display: flex;
flex-direction: column;
input{
    background-color: transparent;
    border: none;
    color: white;
    font-size: 20px;
    width: 85%;
}
/* background-color: green; */
`;

export const ProfileContact = styled.div`
display: flex;
flex-direction: column;
/* background-color: blue; */
justify-content: space-around;
height: 80%;
margin-top: 20px;
`;

export const ProfileString = styled.div`
color: black;
display: flex;
margin-top: -20px;
border-bottom: 1px solid black;
padding-bottom: 5px;
`;

export const ProfilePhone = styled.div`
display: flex;
input{
    background-color: transparent;
    border: none;
    color: white;
    font-size: 20px;
    width: 80%;
}
`;

export const ProfileAddress = styled.div`
display: flex;
input{
    background-color: transparent;
    border: none;
    color: white;
    font-size: 20px;
    width: 53%;
}
`;

export const ProfileEmail = styled.div`
display: flex;
input{
    background-color: transparent;
    border: none;
    color: white;
    font-size: 20px;
    width: 43%;
}
`;

export const ProfileSite = styled.div`
display: flex;
input{
    background-color: transparent;
    border: none;
    color: white;
    font-size: 20px;
    width: 35%;
}
`;

export const ProfileDescription = styled.div`
display: flex;
color: black;
flex-direction: column;
justify-content: space-between;
/* align-items: flex-start; */
margin-bottom: 22%;
width: 30%;

`;

export const DescriptionString = styled.div`
display: flex;
color: black;
justify-content: flex-start;
align-items: flex-start;
border-bottom: 2px solid black;
padding-bottom: 5px;
`;

export const TextDescription = styled.form`

display: flex;
color: black;
display: flex;
flex-direction: column;
/* background-color: blue; */
justify-content: space-around;
height: 80%;
margin-top: 23px;
input {
/* margin-top: 35px; */
background: transparent;
border: none;
font-size: 20px;
}
`;

export const SkillsBasic = styled.div`
width: 100%;
height: 25%;
display: flex;
flex-direction: row;
justify-content: space-between;
`; 

export const ProfileSkills = styled.div`
width: 50%;
height: 100%;
display: flex;
font-size: 30px;
flex-direction: column;
justify-content: space-between;
margin-left: 100px;
`; 

export const SkillsString = styled.div`
color: black;
display: flex;
border-bottom: 2px solid black;
`;

export const SkillsAll = styled.div`
color: black;
display: flex;
flex-direction: column;
`;





export const ProfileBasicInformation = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`; 

export const BasicString = styled.div`
color: black;
font-size: 30px;
border-bottom: 2px solid black;
`;

export const ProfileBirthday = styled.div`
width: 100vw;
height: 25%;
display: flex;
flex-direction: row;
input{
    background-color: transparent;
    border: none;
    color: white;
    font-size: 20px;
    width: 40%;
}
`; 

export const ProfileGender = styled.div`
width: 100vw;
height: 25%;
display: flex;
flex-direction: row;
input{
    background-color: transparent;
    border: none;
    color: white;
    font-size: 20px;
    width: 50%;
}
`; 