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
        .then(data => {console.log(data); setCurrentUser(data)})
        .catch(error => console.log(error));
}, [])
    return (
        <HeaderContainer>
            {/* <img src={currentUser.image}/> */}
            <p>{`${currentUser.first_name} ${currentUser.last_name}`} </p>
            <BsChevronDown size={22} color={"#1b253d"} />
            <button ><BsBell size={22} color={"#5a5757"}/></button>
        </HeaderContainer>
    )
}

export default Header
