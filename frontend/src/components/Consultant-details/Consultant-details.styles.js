import styled from "styled-components"

export const ConsultantDetailsWrapper  = styled.div`
margin-top: 90px;
margin-left: 5%;
width: 100vw;
height: 100vh;
overflow-y: auto;

div > p:last-child {
    color: #1b253d;
}

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

div > button.deleteButton {
    width: 150px;
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
    margin-bottom: 30px;
}


div:not(:first-child) {
    display: flex;
}

/* p {
    font-size: 17px;
    color: grey;
    width: 400px;
    padding: 10px 0;
    margin-top: -10px;

} */

/* p:last-child {
    font-weight: 600;
    font-style: inherit;
} */

h4 {
    color: #1b253d;
    border: 1px solid #42018cc2;
    padding: 9px 15px 9px 15px;
    height: auto;
    text-align: center;
    font-weight: bolder;
    border-radius: 18px;
    margin-left:20px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 12px;
}

a {
    outline: none;
    font-size: 17px;
    width: 400px;
    padding: 10px 0;
}

a:link {
    color: #1b253d;
}

a:hover {
    color: purple;
}

a:visited {
    color: purple;
}


`;

export const HeaderStyle  = styled.div`
display: flex;

`;




export const FlexColumn  = styled.div`
display: flex;
flex-direction: column;
width: 800px;


/* :nth-of-type(2) {
    margin-bottom: 200px;
} */

img {
    height: 200px;
    width: 200px;
    box-shadow: 5px 4px 10px #8888888b;
}
p {
    width: 400px;
    padding: 10px 0;
}

/* div > p:last-child {
    margin-left: 200px;
    width: 100px;
}

div > p:first-child {
    width: 300px;
} */

:first-child {
    padding-top: 0px;
}

/* :nth-child(2) {
    width: 300px;
} */

div {
    display: flex;
    flex-direction: row;
    align-content: space-between;
}

.img-basic-info-section {
    display: flex;
    flex-direction: row;
    height: 200px;
    width: 570px;
    padding: 0px;
    margin-left: 20px;
}

.basic-info-section {
    display: flex;
    flex-direction: column;
    width: 300px;
    align-content: flex-start;
    align-items: flex-start;
    margin-left: 30px;
}

.basic-info-section > div {
}

.consultant-location-section {
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    align-items: flex-start;
    font-weight: normal;
    font-size: 15px;

    width: 300px;
    margin-bottom: 2px;
}

.consultant-name {
    font-size: 22px;
    font-weight: bold;
    width: 300px;
    padding-bottom: 0px;
}

.consultant-title {
    font-size: 30px;
    font-weight: bold;
    padding-top: 5px;
    padding-bottom: 20px;
    margin-bottom: 2px
}

.email {
    padding: 0;
    margin-left: 5px;
    font-size: 14px;
}

.summary-section {
    width: 570px;
    padding: 10px;
    border-bottom: 2px solid #8080803e;
}

.summary {
    width: 570px;
    margin: auto;
    font-style: italic;
    font-size: 14px;
    text-align: center;
    
}

.manager {
    padding: 0px;
    font-size: 14px;
    margin-left: 5px;
}

.office {
    padding: 0px;
    font-size: 14px;
    margin-left: 5px;
}

:last-child {
    border: none;
}

.more-info-section {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 20px;
    width: 570px;
}

.skills-left {
    width: 200px;
    padding-right: 180px;
    color: grey;
    font-weight: bold;
}

.left {
    width: 200px;
    color: grey;
    font-weight: bold;
}

.right {
    width: 370px;

}

.right > h4 {
    color: #1b253d;
    border: 1px solid #42018cc2;
    padding: 9px 15px 9px 15px;
    height: auto;
    font-weight: bolder;
    border-radius: 18px;
    margin-left:20px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 12px;
}

.skills-section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    width: 570px;
    overflow-wrap: inherit;

    div {
        display: grid;
         grid-template-columns: repeat(4, 1fr);
         grid-row-gap: 0px;
         grid-column-gap: 0px;

    }

}

.skills-right {
    width: 370px;
    /* overflow: auto; */
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 10px;
    grid-column-gap: 10px;


}

.skills-right > h4 {
    font-weight: 400;
    font-size: 12px;
    color: white;
    border-radius: 18px;
    text-align: center;
    height: auto;
    margin-right: 0px;
    background-color: #220641;
    font-weight: bolder;
    border: 1px solid #42018cc2;
    padding: 9px 15px 9px 15px;
    margin-left:11px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 12px;
}

.linkedin {
    margin-left: 25px;
}

.last {
    margin-bottom: 200px;
}
`;