import styled from "styled-components"

export const ProjectConsultantsContainer  = styled.div`
display: flex;
flex-direction: column;
margin-top: 0%;
width: 100%;
color: grey;

p {
    margin-left: 40%;
    margin-bottom: -0%;
    font-style: italic;
}



table > tr:first-of-type{
   background-color: #f3e9e94;
}

table > tr{
    display: flex;
}


table > tr > th {
    display: flex;
    width: 150px;
    justify-content: flex-start;
    padding: 15px;
    color: #1b253d;
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

table > tr > td {
    display: flex;
    align-items: center;
    width: 150px;
    justify-content: flex-start;
    background-color: white;
    height: 50px;
    padding: 15px;
}

table > tr > td:nth-of-type(2) {
   font-size: 16px;
   width: 190px;
} 

table > tr > th:nth-of-type(2) {
   font-size: 16px;
   width: 190px;
} 

table > tr > td:last-of-type {
    margin-left: -30px;
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

table > tr > td > button:hover {
    opacity: 0.7;
}

table > tr > td > button:first-of-type {
    background-color: #4680f49d;
}

table > tr > td > button:last-of-type {
    background-color: #ee6969;
}

tr {
  border: 1px solid transparent;
}
tr:hover td{
  cursor:pointer;
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

table > tr > td:last-of-type {
    padding-left: 70px;
}
`;


export const OverFlow= styled.div`
overflow-y: auto;
`;