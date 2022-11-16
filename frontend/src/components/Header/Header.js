import {BsSearch, BsBell, BsChevronDown} from "react-icons/bs";
import { HeaderContainer } from "./Header.styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";


const Header = () => {
    let localToken = localStorage.getItem("valtech-auth")
    const navigate = useNavigate()

    const [currentUser, setCurrentUser] = useState([])

    const get = "GET"
    const header = new Headers({
        "Authorization": `Bearer ${localToken}`,
        "content-type": "application/json",
    })

    const getconfig = {
    method: get,
    headers: header,
    }

useEffect((state) => {
    fetch("https://valtech-dashboard.propulsion-learn.ch/backend/api/me/", getconfig)
        .then(response => response.json())
        .then(data => {setCurrentUser(data)})
        .catch(error => console.log(error));
}, [])

const hour = new Date().getHours();

    return (
        <HeaderContainer>
            <img src={currentUser.image}/>
            <p>Good {hour<12 && "Morning," || hour<18 && "Afternoon," || "Evening,"} {currentUser.first_name} </p>
            <BsChevronDown size={22} color={"#1b253d"} />
            <button ><BsBell size={22} color={"#5a5757"}/></button>
        </HeaderContainer>
    )
}

export default Header
