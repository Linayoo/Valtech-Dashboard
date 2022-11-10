import { ProfileInfo, StringsSkills, ProfileJoined, ProfileUsername, SkillsString, StringsWork, DescriptionString, ProfileDescription, TextDescription, BasicString, SkillsAll, ProfileString, ProfileSkills, WorkExperience, ProfileBasicInformation, ProfileBirthday, ProfileGender, ProfileWork, PrimaryWork, SecondaryWork, ProfileContact, ProfileAddress, ProfileEmail, ProfilePhone, ProfileSite, TabAboutButton, ProfileName, ProfileLocation, TabTimelineButton, ProfileMain,ProfileRightSide, NameLocation, Proffession, Functions, FuncContacts, FuncReportUser, FuncSendMess, FunctionTabs, ProfilePhoto, WorkContact, SkillsBasic, ProfileInfoLeftSide} from "./profile.styles"
import {CiEdit} from 'react-icons/ci'
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import SideNav from '../../components/SideNav/SideNav';


const UserProfile = () => {

    const [consultants, setConsultants] = useState([])

    const get = "GET"
    const header = new Headers({
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4MzY0NzM1LCJpYXQiOjE2Njc5MzI3MzUsImp0aSI6ImVjYTk5ZTYxMTg1ZTQ2OTRhNDg0N2VkODg5YWFkOTliIiwidXNlcl9pZCI6Mn0.0rsTH6W_ehRitYh5ezU_HHzPpG6EfSlQIdFAfbUKyag`,
        "content-type": "application/json",
    })

    const getconfig = {
    method: get,
    headers: header,
    }

useEffect((state) => {
    fetch("http://localhost:8000/api/me/", getconfig)
        .then(response => response.json())
        .then(data => setConsultants(data))
        .catch(error => console.log(error));
}, [])





return (
        <ProfileMain>
            <ProfileInfo>
                <ProfileInfoLeftSide>
                    <ProfilePhoto photo={consultants.image}>
                    </ProfilePhoto>
                </ProfileInfoLeftSide>
                <ProfileRightSide>
                    <NameLocation>
                        <ProfileName>
                            First name:
                            <p>{consultants.first_name}</p>
                            Last name:
                            <p>{consultants.last_name}</p>
                        </ProfileName>
                    </NameLocation>
                    <ProfileUsername>
                        User name
                        <p>{consultants.username}</p>
                    </ProfileUsername>
                </ProfileRightSide>
            </ProfileInfo>
            
            <WorkContact>
               
                <ProfileContact>
                    <ProfileEmail>
                        <h3><span><CiEdit /></span>Email:</h3>
                        <p><input type="text" placeholder="Edit Email" value={consultants.email}/></p>
                    </ProfileEmail>
                </ProfileContact>
            </WorkContact>
            <StringsSkills>

            <BasicString>Basic Information</BasicString>
            </StringsSkills>
            <SkillsBasic>
                
                <ProfileBasicInformation>       
                    <ProfileJoined>
                        <h3><span><CiEdit /></span>Joined:</h3>
                        <p><input type="text" placeholder="Edit Date" value="25/11/2018"/></p>
                    </ProfileJoined>
                </ProfileBasicInformation>
            </SkillsBasic>
        </ProfileMain>
    )
}

export default UserProfile

                

