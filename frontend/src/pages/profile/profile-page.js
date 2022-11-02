import { ProfileInfo, ProfileSkills, ProfileBasicInformation, ProfileBirthday, ProfileGender, ProfileWork, PrimaryWork, SecondaryWork, ProfileContact, ProfileAddress, ProfileEmail, ProfilePhone, ProfileSite, TabAbout, ProfileName, ProfileLocation, TabTimeline, ProfileMain,ProfileRightSide, NameLocation, Proffession, Functions, FuncContacts, FuncReportUser, FuncSendMess, FunctionTabs, ProfilePhoto, WorkContact, SkillsBasic, ProfileInfoLeftSide} from "./profile.styles"

const ProfilePage = () => {
    return (
        <ProfileMain>
            <ProfileInfo>
                <ProfileInfoLeftSide>
                    <ProfilePhoto></ProfilePhoto>
                </ProfileInfoLeftSide>
                <ProfileRightSide>
                    <NameLocation>
                        <ProfileName>Jeremy Rose</ProfileName>
                        <ProfileLocation>New York</ProfileLocation>
                    </NameLocation>
                    <Proffession>Product Designer</Proffession>
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
                <ProfileWork>Work Expirience
                    <PrimaryWork>Spotify New York</PrimaryWork>
                    <SecondaryWork>Metropolitan Museum</SecondaryWork>
                </ProfileWork>
                <ProfileContact>Profile Contact
                    <ProfilePhone>Number:3838383</ProfilePhone>
                    <ProfileAddress>Address:Odessa</ProfileAddress>
                    <ProfileEmail>Email:gekakskd@gmaiodfj</ProfileEmail>
                    <ProfileSite>Site:valtech.com</ProfileSite>
                </ProfileContact>
            </WorkContact>
            <SkillsBasic>
                <ProfileSkills>Hello SKills</ProfileSkills>
                <ProfileBasicInformation>
                    <ProfileBirthday>Birthday: 15 June</ProfileBirthday>
                    <ProfileGender>Gender: Male</ProfileGender>
                </ProfileBasicInformation>
            </SkillsBasic>
        </ProfileMain>
    )
}

export default ProfilePage
