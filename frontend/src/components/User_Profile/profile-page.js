import { ProfileInfo, StringsSkills, ProfileJoined, ProfileUsername, SkillsString, StringsWork, DescriptionString, ProfileDescription, TextDescription, BasicString, SkillsAll, ProfileString, ProfileSkills, WorkExperience, ProfileBasicInformation, ProfileBirthday, ProfileGender, ProfileWork, PrimaryWork, SecondaryWork, ProfileContact, ProfileAddress, ProfileEmail, ProfilePhone, ProfileSite, TabAboutButton, ProfileName, ProfileLocation, TabTimelineButton, ProfileMain,ProfileRightSide, NameLocation, Proffession, Functions, FuncContacts, FuncReportUser, FuncSendMess, FunctionTabs, ProfilePhoto, WorkContact, SkillsBasic, ProfileInfoLeftSide} from "./profile.styles"
import {CiEdit} from 'react-icons/ci'
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import SideNav from '../../components/SideNav/SideNav';


const UserProfile = () => {

    // let localToken = JSON.parse(localStorage.getItem("valtech-auth"))
    const [consultants, setConsultants] = useState([])


    const get = "GET"
    const header = new Headers({
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4NTAzMzE0LCJpYXQiOjE2NjgwNzEzMTQsImp0aSI6ImExMTUxY2MwM2E4ODRjNGRhZDA0OTM4ZWU4Mzc4YzM3IiwidXNlcl9pZCI6MX0.efDFxFISLWDdC-0sjLE9iauw7QEAyJ6SVm2bOGgBR_s`,
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
                    <button>Change Photo</button>
                    <ProfilePhoto>
                    </ProfilePhoto>
                </ProfileInfoLeftSide>
                <ProfileRightSide>
                    <NameLocation>
                        <ProfileName>
                            <p><span><CiEdit /></span><input type="text" placeholder="Edit Name" value={consultants.first_name}/></p>
                            <p><span><CiEdit /></span><input type="text" placeholder="Edit Surname" value={consultants.last_name}/></p>
                        </ProfileName>
                        {/* <ProfileLocation>
                            <p><span><CiEdit /></span><input type="text" placeholder="Edit Location"/></p>
                        </ProfileLocation> */}
                    </NameLocation>
                    {/* <Proffession>
                        <p><span><CiEdit /></span><input type="text" placeholder="Edit Proffession"/></p>
                    </Proffession> */}
                    <ProfileUsername>
                        <p><span><CiEdit /></span><input type="text" placeholder="Edit Username" value={consultants.username}/></p>
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
                        <p><input type="text" placeholder="Edit Email" value={consultants.email}/></p>
                    </ProfileEmail>
                    <ProfileSite>
                        <h3><span><CiEdit /></span>Site:</h3>
                        <p><input type="text" placeholder="Edit Site"/></p>
                    </ProfileSite>
                </ProfileContact>
                <ProfileDescription>
                        <TextDescription> 
                        <p><span><CiEdit /></span>
                        Выполните следующие действия:
Запустите Chrome на компьютере.
Нажмите на значок с тремя точками в правом верхнем углу экрана Настройки.
Внизу выберите Дополнительные.
Включите или отключите параметр</p>
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
                        <p><input type="text" placeholder="Edit Date" value="25/11/2018"/></p>
                    </ProfileJoined>
                </ProfileBasicInformation>
            </SkillsBasic>
        </ProfileMain>
    )
}

export default UserProfile
