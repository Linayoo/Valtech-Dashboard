import styled from "styled-components"


export const ProfileMain  = styled.div`
margin-top: 90px;
margin-left: 5%;
width: 100vw;
height: 100vh;

p:last-child {
    color: #1b253d;
}

img {
    height: 150px;
    width: 150px;
    box-shadow: 5px 4px 10px #8888888b;
    margin-bottom: 20px;
}

button {
    color: #1b253d;
    border: 1px solid #42018cc2;
    height: 30px;
    width: 100px;
    font-weight: bolder;
    border-radius: 5px;
    margin-left:0px;
    margin-top: 15px;
    margin-bottom: 5px;
    font-size: 15px;
}

button:hover {
    background-color: #220641;
    color: white;
}


h1 {
    color: #1b253d;
    margin-bottom: 5px;
}

hr {
    color: #5f5e5e42;
    border: none;
    height: 2px;
    background-color: #8080803e;
    width: 570px;
    margin-bottom: 30px;
}

input, select {
   display: flex;
   border-top: none;
   border-left: none;
   border-right: none;
   border-bottom: 2px solid grey;
   background-color: transparent;
   width: 300px;
   height: 25px;
   margin-top:0px;
   margin-bottom: 10px;
   color: #1b253d;
   font-weight: bold;
   font-size: 18px;
}

input:focus, select:focus {
    outline: none;
    border-bottom: 1px solid #837b7b8e;
    box-shadow: 0 1px 0 0 #837b7b8e;
}


div:not(:first-child) {
    display: flex;
}

p {
    font-size: 20px;
    color: grey;
    width: 220px;
    padding: 10px 0;
    margin-top: -10px;
}

p:last-child {
    font-weight: 600;
    font-style: inherit;
}

`;




// export const ProfileMain = styled.form`
// background-color: #8080801e;
// width: 85%;
// height: 95%;
// margin-top: 4%;
// font-family: Arial;
// input{
//     background-color: transparent;
//     border: none;
//     color: white;
//     font-family: Arial;
//     font-size: 20px;
//     padding-left: 5px;
//     font-weight: 900;
//     outline: none;
//     ::placeholder{
//         color: white;
//     }
// }
// `;


// export const ChangePhotoButton = styled.div`
//     width: 130px;
//     height: 30px;
//     justify-content: flex-start;
//     /* align-items: flex-start; */
//     font-size: 50px;
//     color: white;
//     padding-right: 300px;
//     display: flex;
//     font-size: 20px;
//     p{
//     padding-top: 10%;
//     color: white;
//     display: flex;
//     flex-direction: row;
//     width: 130px;
//     height: 30px;
//     }
// /* button {
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
// } */

// button:hover {
//     background-color: #220641;
//     color: white;
// }
// input[type="file"] {
//     display: none;
// }

// label{
//     cursor: pointer;
// }
// `;


// export const FieldsProfile = styled.div`
// width: 50%;
// display: flex;
// flex-direction: column;
// justify-content: space-evenly;
// align-items: flex-start;
// height: 100%;
// padding: 5px;

// `;

// export const ProfileInfo = styled.div`
// background: linear-gradient(to top, #42018c, #220641); 
// width: 100%;
// height: 35%;
// display: flex;
// flex-direction: row;
// `;

// export const ProfileInfoLeftSide = styled.div`
// width: 25%;
// height: 100%;
// display: flex;
// align-items: center;
// flex-direction: row;
// `;

// export const ProfilePhoto = styled.div`
// width: 100%;
// height: 95%;
// display: flex;
// align-items: center;
// justify-content: center;
// img{
//     height:100%;
//     width:100%;
// }
// `;

// export const ProfileRightSide = styled.div`
// width: 75%;
// height: 100%;
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// `;

// export const NameLocation = styled.div`
// width: 100%;
// height: 20%;
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// padding-left: 5%;
// font-size: 20px;

// `;

// export const ProfileName = styled.form`
// height: 30%;
// color: white;
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// justify-content: flex-start;
// font-size: 20px;
// font-weight: 900;
// width: 100%;
// p{
//     display: flex;
//     flex-direction: row;
//     width: 100%;
//     padding: 5px;
// }
// input {
//     display: flex;
//     flex-direction: row;
//     padding-left: 10px;

// }
// `;

// export const ProfileUsername = styled.div`
// color: white;
// display: flex;
// flex-direction: row;
// /* margin-left: -32%; */
// font-weight: 900;
// font-size: 20px;
// padding-left: 5%;
// width:100%;
// p{
//     font-size: 20px;
//     padding: 5px;
//     padding-top: 15px;

// }
// input{
//     padding-left: 5px;
// }
// `;


// export const ProfileEmail = styled.form`
// color: white;
// display: flex;
// flex-direction: row;
// width: 100%;
// /* margin-left: -32%; */
// font-size: 20px;
// font-weight: 900;
// padding-left: 5%;

// p{
//     width: 100%;
//     padding-left: 5px;
//     padding-top: 5px;

// }

// `;

// export const ProfileJoined = styled.div`
// width: 100%;
// /* height: 40%; */
// display: flex;
// flex-direction: row;
// /* margin-left: -32%;*/
// font-size: 20px;
// color: white;
// font-weight: 900;
// padding-left: 5%;

// p{
//     width: 100%;
//     padding: 5px;
//     padding-top: 10px;
// }
// span{
//     padding-left: 5px;

// }
// `; 

// export const ButtonProfile = styled.div`
// color: black;
// display: flex;
// justify-content: center;
// margin-top: 5%;
// `
// export const EditUserDetails = styled.button`
//     color: #1b253d;
//     border: 1px solid #42018cc2;
//     height: 50px;
//     width: 150px;
//     font-weight: bolder;
//     border-radius: 5px;
//     margin-left:20px;
//     margin-top: 5px;
//     margin-bottom: 5px;
//     font-size: 40px;


// :hover {
//     background-color: #220641;
//     color: white;
// }
// `


