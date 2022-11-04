import { ProfileInfo, StringsSkills, SkillsString, StringsWork, DescriptionString, ProfileDescription, TextDescription, BasicString, SkillsAll, ProfileString, ProfileSkills, WorkExperience, ProfileBasicInformation, ProfileBirthday, ProfileGender, ProfileWork, PrimaryWork, SecondaryWork, ProfileContact, ProfileAddress, ProfileEmail, ProfilePhone, ProfileSite, TabAboutButton, ProfileName, ProfileLocation, TabTimelineButton, ProfileMain,ProfileRightSide, NameLocation, Proffession, Functions, FuncContacts, FuncReportUser, FuncSendMess, FunctionTabs, ProfilePhoto, WorkContact, SkillsBasic, ProfileInfoLeftSide} from "./profile.styles"
import {CiEdit} from 'react-icons/ci'
const ProfilePage = () => {
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
                            <p><span><CiEdit /></span><input type="text" placeholder="Edit Name"/></p>
                        </ProfileName>
                        <ProfileLocation>
                            <p><span><CiEdit /></span><input type="text" placeholder="Edit Location"/></p>
                        </ProfileLocation>
                    </NameLocation>
                    <Proffession>
                        <p><span><CiEdit /></span><input type="text" placeholder="Edit Proffession"/></p>
                    </Proffession>
                    <Functions>
                        <FuncSendMess><button>Send Message</button></FuncSendMess>
                        <FuncContacts><button>Contacts</button></FuncContacts>
                        <FuncReportUser><button>Report User</button></FuncReportUser>
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
                        <p><input type="text" placeholder="Edit Number Phone"/></p>
                    </ProfilePhone>
                    <ProfileAddress>
                        <h3><span><CiEdit /></span>Address:</h3>
                        <p><input type="text" placeholder="Edit Address"/></p>
                    </ProfileAddress>
                    <ProfileEmail>
                        <h3><span><CiEdit /></span>Email:</h3>
                        <p><input type="text" placeholder="Edit Email"/></p>
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
                        <p><input type="text" placeholder="Edit Date"/></p>
                    </ProfileBirthday>
                    <ProfileGender>
                        <h3><span><CiEdit /></span>Gender:</h3>
                        <p><input type="text" placeholder="Edit Gender"/></p>
                    </ProfileGender>
                </ProfileBasicInformation>
            </SkillsBasic>
        </ProfileMain>
    )
}

export default ProfilePage
