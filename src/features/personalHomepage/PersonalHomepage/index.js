import { useDispatch, useSelector } from "react-redux";
import { MainWrapper, ToggleButton } from "./styled";
import { ThemeSwitch } from "../../../common/ThemeSwitch/index";
import { CertificatesList, TileList } from "../../../common/Tile";
import Portfolio from "./Portfolio";
import { MainInformation } from "./MainInformation";
import { SectionCommon } from "../../../common/Section/commonSection";
import { skillsNow, skillsToHave } from "../../../listOfSkills/skills";
import { ReactComponent as GitHubIcon } from "../../../common/SocialIcons/icons/github.svg";
import toolsSpannerHammer from "../../../images/toolsSpannerHammer.png";
import rocket from "../../../images/rocket.png";
import graduationExpert from "../../../images/graduationExpert.png";
import Header from "./Portfolio/Header";
import { Footer } from "./Footer";
import { Certificates } from "../../../common/Certificates";
import { toggleSkillsView } from "../personalHomepageSlice";

export const PersonalHomepage = () => {
    const dispatch = useDispatch();
    const showSkills = useSelector((state) => state.personalHomepage.showSkills);

    return (
        <MainWrapper>
            <ThemeSwitch />
            <MainInformation />
            <SectionCommon>
                {showSkills ? (
                    <TileList
                        title="My skillset includes"
                        emoticon={toolsSpannerHammer}
                        content={skillsNow}
                    />
                ) : (
                    <CertificatesList
                        title="Certificate"
                        emoticon={graduationExpert}
                        content={<Certificates/>}
                    />
                )}
            </SectionCommon>
            <ToggleButton onClick={() => dispatch(toggleSkillsView())}>
                {showSkills ? "Show Certificate" : "Show Skills"}
            </ToggleButton>
            <SectionCommon>
                <TileList
                    title="What I want to learn next"
                    emoticon={rocket}
                    content={skillsToHave}
                />
            </SectionCommon>
            <SectionCommon>
                {/* <Certificates /> */}
            </SectionCommon>
            <SectionCommon>
                <Header
                    icon={GitHubIcon}
                    title="Portfolio"
                    subtitle={"My recent projects"}
                />
                <Portfolio />
            </SectionCommon>
            <Footer />
        </MainWrapper>
    );
};
