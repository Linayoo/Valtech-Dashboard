import styled from "styled-components";


export const ProjectResultsContainer = styled.div`
position: sticky;
margin-top: 0%;
margin-left: 6%;
width: 100%;
color: grey;
height: 400px;

p {
    margin-left: 1%;
    margin-top: -0%;
    font-style: italic;
}

table {
    width: 100%;
    height: 410px;
}

table > tr:first-of-type{
   background-color: #f3e9e94;
   display: flex;
   margin-top: 20px;
   margin-bottom: 15px;
}

table > div > tr{
    display: flex;
    align-items: center;
    height: 50px;
    margin: 5px;
    border-radius: 15px;
    /* width: 1100px; */
}


table > tr > th {
    display: flex;
    width: 160px;
    justify-content: center;
    color: #1b253d;
    position: sticky;
    top: 0;
}


table > tr > th > button{
    background-color: none;
    border: none;
    color: grey;
    font-size: 15px;
    display: flex;
    align-items: center;
    margin-right: 10px;
}

table > div > tr > td {
    display: flex;
    align-items: center;
    width: 150px;
    justify-content: center;
    background-color: white;
    height: 50px;
    padding: 15px;
}



table > div > tr > td:nth-of-type(1), th:nth-of-type(1) {
    width: 220px;
}

table > div > tr > td:nth-of-type(2), th:nth-of-type(2) {
    width: 250px;
}

table > div > tr > td:nth-of-type(3), th:nth-of-type(3) {
    width: 160px;
}

table > div > tr > td:nth-of-type(4), th:nth-of-type(4) {
    width: 130px;
}

table > div > tr > td:nth-of-type(5), th:nth-of-type(5) {
    width: 130px;
}

table > div > tr > td:nth-of-type(6) {
    width: 100px;
}


table > div > tr > td:nth-of-type(1), td:nth-of-type(2), td:nth-of-type(3) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
   
}

table > tr > div > th:nth-of-type(1), th:nth-of-type(2), th:nth-of-type(3) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
   
}

/* table > tr > td:last-of-type {
    margin-left: -30px;
} */
table > tr > th {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 7px;

}



table > tr > td > button {
    background: none;
    border:none;
    margin-right: 8px;
    border-radius: 10px;
    padding: 5px 10px;
    width: 60px;
    color: white;
}
table > tr > td:nth-of-type(7) > button {
    width: 75px;
    background-color: #CEDCCF;
    margin-left: -25px;
}

table > tr > td > button:hover {
    opacity: 0.7;
}



table >  tr > td:nth-of-type(8) > button:last-of-type {
    /* background-color: #F5A69F; */
    color: black;
}

table > div > tr > td:nth-of-type(7), td:nth-of-type(8), td:nth-of-type(9){
    width: 40px;
}


tr {
  border: 1px solid transparent;

 
}
tr:hover td{
  cursor:pointer;
  color: #1b253d;
  transform: scale(1.2);
  border-top: 1px solid #80808071;
  border-bottom: 1px solid #80808071;
  
}
tr:first-child:hover td {
  border-top: none;
}
tr:last-child:hover td {
  border-bottom: none;
}

div {
    position: relative;
    z-index: 4;
    height: 390px;
    button {
        width: 30px;
        height: 30px;
        background-color: white;
        border: none;
    }

    i {
        position: absolute;
        z-index3;
        left:14px;
        bottom: 9px;
    }

}
`;

export const OverFlow= styled.div`
overflow-y: auto;
height: 510px;

::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: #ffffff95;
  box-shadow: inset 0 0 5px #9ea3ac49; 
  border-radius: 10px;
  border: 1px solid #a9abb05f;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #1b253d;  
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #1b253da1; 
}
`;