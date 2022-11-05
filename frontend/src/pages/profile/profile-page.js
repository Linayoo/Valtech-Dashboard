import { ProfileInfo, SkillsString, DescriptionString, ProfileDescription, TextDescription, BasicString, SkillsAll, ProfileString, ProfileSkills, WorkExperience, ProfileBasicInformation, ProfileBirthday, ProfileGender, ProfileWork, PrimaryWork, SecondaryWork, ProfileContact, ProfileAddress, ProfileEmail, ProfilePhone, ProfileSite, TabAbout, ProfileName, ProfileLocation, TabTimeline, ProfileMain,ProfileRightSide, NameLocation, Proffession, Functions, FuncContacts, FuncReportUser, FuncSendMess, FunctionTabs, ProfilePhoto, WorkContact, SkillsBasic, ProfileInfoLeftSide} from "./profile.styles"
import {CiEdit} from 'react-icons/ci'
const ProfilePage = () => {
    return (
        <ProfileMain>
            <ProfileInfo>
                <ProfileInfoLeftSide>
                    <ProfilePhoto>
                    </ProfilePhoto>
                    <button>Change Photo</button>
                </ProfileInfoLeftSide>
                <ProfileRightSide>
                    <NameLocation>
                        <ProfileName>
                            <p><input type="text" placeholder="Edit Name"/><span><CiEdit /></span></p>
                        </ProfileName>
                        <ProfileLocation>
                            <p><input type="text" placeholder="Edit Location"/><span><CiEdit /></span></p>
                        </ProfileLocation>
                    </NameLocation>
                    <Proffession>
                        <p><input type="text" placeholder="Edit Proffession"/><span><CiEdit /></span></p>
                    </Proffession>
                    <Functions>
                        <FuncSendMess>Send Message</FuncSendMess>
                        <FuncContacts>Contacts</FuncContacts>
                        <FuncReportUser>Report User</FuncReportUser>
                    </Functions>
                    <FunctionTabs>
                        <TabTimeline> Timeline</TabTimeline>
                        <TabAbout>About</TabAbout>
                    </FunctionTabs>
                </ProfileRightSide>
            </ProfileInfo>
            <WorkContact>
                <ProfileWork>
                    <WorkExperience><h2>Work Experience</h2></WorkExperience>
                    <PrimaryWork>
                        <h3><input type="text" placeholder="Edit Primary Work"/><span><CiEdit /></span></h3>
                        <p><input type="text" placeholder="Edit Address of Work"/><span><CiEdit /></span></p>
                    </PrimaryWork>
                    <SecondaryWork>
                        <h3><input type="text" placeholder="Edit Secondary Work "/><span><CiEdit /></span></h3>
                        <p><input type="text" placeholder="Edit Address of Work"/><span><CiEdit /></span></p>
                        </SecondaryWork>
                </ProfileWork>
                <ProfileContact>
                    <ProfileString><h2>Profile Contact</h2></ProfileString>
                    <ProfilePhone>
                        <h3>Number Phone:</h3>
                        <p><input type="text" placeholder="Edit Number Phone"/><span><CiEdit /></span></p>
                    </ProfilePhone>
                    <ProfileAddress>
                        <h3>Address:</h3>
                        <p><input type="text" placeholder="Edit Address"/><span><CiEdit /></span></p>
                    </ProfileAddress>
                    <ProfileEmail>
                        <h3>Email:</h3>
                        <p><input type="text" placeholder="Edit Email"/><span><CiEdit /></span></p>
                    </ProfileEmail>
                    <ProfileSite>
                        <h3>Site:</h3>
                        <p><input type="text" placeholder="Edit Site"/><span><CiEdit /></span></p>
                    </ProfileSite>
                </ProfileContact>
                <ProfileDescription>
                    <TextDescription>
                        <DescriptionString>                        
                            <h2>Description</h2>
                        </DescriptionString>
                        <p><input type="text" placeholder="Edit Description"/><span><CiEdit /></span></p>
                    </TextDescription>
                </ProfileDescription>
            </WorkContact>
            <SkillsBasic>
                <ProfileSkills>
                    <SkillsString>Skills</SkillsString>
                    <SkillsAll>
                        <p>JS</p>
                        <p>Python</p>
                        <p>React</p>
                        <p>Django</p>
                        <p>Docker</p>
                    </SkillsAll>
                </ProfileSkills>
                <ProfileBasicInformation>
                    <BasicString>Basic Information</BasicString>
                    <ProfileBirthday>
                        <h3>Birthday:</h3>
                        <p><input type="text" placeholder="Edit Date"/><span><CiEdit /></span></p>
                    </ProfileBirthday>
                    <ProfileGender>
                        <h3>Gender:</h3>
                        <p><input type="text" placeholder="Edit Gender"/><span><CiEdit /></span></p>
                    </ProfileGender>
                </ProfileBasicInformation>
            </SkillsBasic>
        </ProfileMain>
    )
}

export default ProfilePage
