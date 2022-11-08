import { ProfileInfo, StringsSkills, ProfileJoined, ProfileUsername, SkillsString, StringsWork, DescriptionString, ProfileDescription, TextDescription, BasicString, SkillsAll, ProfileString, ProfileSkills, WorkExperience, ProfileBasicInformation, ProfileBirthday, ProfileGender, ProfileWork, PrimaryWork, SecondaryWork, ProfileContact, ProfileAddress, ProfileEmail, ProfilePhone, ProfileSite, TabAboutButton, ProfileName, ProfileLocation, TabTimelineButton, ProfileMain,ProfileRightSide, NameLocation, Proffession, Functions, FuncContacts, FuncReportUser, FuncSendMess, FunctionTabs, ProfilePhoto, WorkContact, SkillsBasic, ProfileInfoLeftSide} from "./profile.styles"
import {CiEdit} from 'react-icons/ci'
import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";



const ProfilePage = () => {

    let localToken = JSON.parse(localStorage.getItem("valtech-auth"))
    const [consultants, setConsultants] = useState()
    const initialID = useParams().userID


    // const [first_name, setFirstName] = useState()
    // const [last_name, setLastName] = useState()
    // const [username, setUsername] = useState()
    // const [country, setCountry] = useState()
    // const [city, setCity] = useState()
    // const [office_category, setOfficeCategory] = useState()
    // const [email, setEmail] = useState()
    // const [summary, setSummary] = useState()
    // const [primary_language, setPrimaryLanguage] = useState()
    // const [title, setTitle] = useState()
    // const [role_category, setRoleCategory] = useState()
    // const [educations, setEducations] = useState()
    
    // const [proffession, setProffession] = useState()

    // const [location, setLocation] = useState()
    // const [primaryWork, setPrimaryWork] = useState()
    // const [addressPrimaryWork, setAddressPrimaryWork] = useState()
    // const [secondaryWork, setSecondaryWork] = useState()
    // const [addressSecondaryWork, setAddressSecondaryWork] = useState()
    // const [email, setEmail] = useState()
    // const [numberPhone, setNumberPhone] = useState()
    // const [address, setAddress] = useState() 
    // const [site, setSite] = useState()
    // const [birthday, setBirtday] = useState()
    // const [gender, setGender] = useState()
    // const navigate = useNavigate();

    // const post = "POST"
    const get = "GET"
    const header = new Headers({
    "Authorization": `Bearer ${localToken}`,
    "content-type": "application/json",
    })


// const body = JSON.stringify({
//     "first_name": `${first_name}`,
//     "last_name": `${last_name}`,
//     "username": `${username}`,
//     "country": `${country}`,
//     "city": `${city}`,
//     "office_category": `${office_category}`,
//     "email": `${email}`,
//     "summary": `${summary}`,
//     "primary_language": `${primary_language}`,
//     "title": `${title}`,
//     "role_category": `${role_category}`,
//     "educations": `${educations}`,
// })

// const postconfig = {
//     method: post,
//     headers: header,
//     body: body,
// }

const getconfig = {
    method: get,
    headers: header,
}



useEffect((state) => {
    if ( initialID === undefined ) {

    fetch("http://localhost:8000/api/consultants/", getconfig)
        .then(response => response.json())
        .then(data => setConsultants(data))
        .catch(error => console.log(error));

    } else {

    fetch(`http://localhost:8000/api/consultants/${initialID}/`, getconfig)
        .then(response => response.json())
        .then(data => setConsultants(data))
        .catch(error => console.log(error));

    }

},[])










//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetch("https://team3luna.propulsion-learn.ch/api/restaurants/new/", postconfig)
//       .then(response => response.json())
//       .then((data) => navigate("/userprofile/")) /*after creating new restaurant, navigate back to user page*/
//       .catch(error => console.log(error))
//   }

// .then((data) => {localStorage.setItem("valtech-auth", JSON.stringify(data.access));})






    return (
        <ProfileMain>
            <ProfileInfo>
                <ProfileInfoLeftSide>
                    <button>Change Photo</button>
                    <ProfilePhoto>
                    </ProfilePhoto>
                </ProfileInfoLeftSide>
                <ProfileRightSide>
                    <NameLocation>
                        <ProfileName>
                            <p><span><CiEdit /></span><input type="text" placeholder="Edit Name" value={consultants === undefined ? 'Loading...' : consultants.first_name}/></p>
                            <p><span><CiEdit /></span><input type="text" placeholder="Edit Surname" value={consultants === undefined ? 'Loading...' : consultants.last_name}/></p>
                        </ProfileName>
                        {/* <ProfileLocation>
                            <p><span><CiEdit /></span><input type="text" placeholder="Edit Location"/></p>
                        </ProfileLocation> */}
                    </NameLocation>
                    {/* <Proffession>
                        <p><span><CiEdit /></span><input type="text" placeholder="Edit Proffession"/></p>
                    </Proffession> */}
                    <ProfileUsername>
                        <p><span><CiEdit /></span><input type="text" placeholder="Edit Username" value={consultants === undefined ? 'Loading...' : consultants.username}/></p>
                    </ProfileUsername>
                    <Functions>
                        <FuncSendMess><button>Send Message</button></FuncSendMess>
                        <FuncContacts><button>Contacts</button></FuncContacts>
                    </Functions>
                    <FunctionTabs>
                        <TabAboutButton><p>About</p></TabAboutButton>
                        <TabTimelineButton><p>Timeline</p></TabTimelineButton>
                    </FunctionTabs>
                </ProfileRightSide>
            </ProfileInfo>
            <StringsWork>
            <WorkExperience><h2>Work Experience</h2></WorkExperience>
            <ProfileString><h2>Profile Contact</h2></ProfileString>
            <DescriptionString><h2>Description</h2></DescriptionString>
            </StringsWork>
            <WorkContact>
                <ProfileWork>
                    <PrimaryWork>
                        <h3><span><CiEdit /></span><input type="text" placeholder="Edit Primary Work"/></h3>
                        <p><span><CiEdit /></span><input type="text" placeholder="Edit Address of Work"/></p>
                    </PrimaryWork>
                    <SecondaryWork>
                        <h3><span><CiEdit /></span><input type="text" placeholder="Edit Secondary Work "/></h3>
                        <p><span><CiEdit /></span><input type="text" placeholder="Edit Address of Work"/></p>
                        </SecondaryWork>
                </ProfileWork>
                <ProfileContact>
                    <ProfilePhone>
                        <h3><span><CiEdit /></span>Number Phone:</h3>
                        <p><input type="text" placeholder="+41796129164"/></p>
                    </ProfilePhone>
                    <ProfileAddress>
                        <h3><span><CiEdit /></span>Address:</h3>
                        <p><input type="text" placeholder="Backerstrasse 35"/></p>
                    </ProfileAddress>
                    <ProfileEmail>
                        <h3><span><CiEdit /></span>Email:</h3>
                        <p><input type="text" placeholder="Edit Email" value={consultants === undefined ? 'Loading...' : consultants.email}/></p>
                    </ProfileEmail>
                    <ProfileSite>
                        <h3><span><CiEdit /></span>Site:</h3>
                        <p><input type="text" placeholder="Edit Site"/></p>
                    </ProfileSite>
                </ProfileContact>
                <ProfileDescription>
                        <TextDescription> 
                        <p><span><CiEdit /></span><input type="text" placeholder="Edit Description"/></p>
                        </TextDescription>
                </ProfileDescription>
            </WorkContact>
            <StringsSkills>
            <SkillsString>Skills</SkillsString>
            <BasicString>Basic Information</BasicString>
            </StringsSkills>
            <SkillsBasic>
                <ProfileSkills>
                    <SkillsAll>
                        <p>JS</p>
                        <p>Python</p>
                        <p>React</p>
                        <p>Django</p>
                        <p>Docker</p>
                    </SkillsAll>
                </ProfileSkills>
                <ProfileBasicInformation>
                    <ProfileBirthday>
                        <h3><span><CiEdit /></span>Birthday:</h3>
                        <p><input type="text" placeholder="15 December"/></p>
                    </ProfileBirthday>
                    <ProfileGender>
                        <h3><span><CiEdit /></span>Gender:</h3>
                        <p><input type="text" placeholder="Male"/></p>
                    </ProfileGender>
                    <ProfileJoined>
                        <h3><span><CiEdit /></span>Joined:</h3>
                        {/* <p><input type="text" placeholder="Edit Date" value={consultants === undefined ? 'Loading...' : consultants.unavailable.date_started}/></p> */}
                    </ProfileJoined>
                </ProfileBasicInformation>
            </SkillsBasic>
        </ProfileMain>
    )
}

export default ProfilePage
