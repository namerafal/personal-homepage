import { useDispatch, useSelector } from "react-redux";
import { Emoticon, MainWrapper, TitleWithEmoticon, ToggleButton } from "./styled";
import { ThemeSwitch } from "../../../common/ThemeSwitch/index";

import Portfolio from "./Portfolio";
import { MainInformation } from "./MainInformation";
import { SectionCommon } from "../../../common/Section/commonSection";
import { skillsLearning, skillsNow, skillsToHave } from "../../../listOfSkills/skills";
import { ReactComponent as GitHubIcon } from "../../../common/SocialIcons/icons/github.svg";
import toolsSpannerHammer from "../../../images/toolsSpannerHammer.png";
import rocket from "../../../images/rocket.png";
import owl from "../../../images/owl.png";
import graduationExpert from "../../../images/graduationExpert.png";
import Header from "./Portfolio/Header";
import { Footer } from "./Footer";
import { Certificates } from "../../../common/Certificates";
import { CVs } from "../../../common/Certificates copy";
import { toggleSkillsView } from "../personalHomepageSlice";
import { toggleCVview } from "../personalHomepageSlice";
import { toggleCertificatesView } from "../personalHomepageSlice";
import { CertificatesTile, CvTile, TileList } from "./Tile";

export const PersonalHomepage = () => {
    const dispatch = useDispatch();
    const showSkills = useSelector((state) => state.personalHomepage.showSkills);
    const showCertificates = useSelector((state) => state.personalHomepage.showCertificates);
    const showCV = useSelector((state) => state.personalHomepage.showCV);

    return (
        <MainWrapper>
            <ThemeSwitch />
            <MainInformation />
            <SectionCommon>
                {showCertificates ? (
                    <CertificatesTile
                        title="Certificate"
                        emoticon={graduationExpert}
                        content={<Certificates />}
                    />
                ) : showCV ? (
                    <CvTile
                        title="CV"
                        emoticon={graduationExpert}
                        content={<CVs />}
                    />
                ) : (
                    <TileList
                        title="My skillset includes"
                        emoticon={toolsSpannerHammer}
                        content={skillsNow}
                    />
                )}
            </SectionCommon>
            <ToggleButton onClick={() => dispatch(toggleSkillsView())}>
                <span>Show Skills</span>
            </ToggleButton>
            <ToggleButton onClick={() => dispatch(toggleCertificatesView())}>
                <span>Show Certificates</span>
            </ToggleButton>
            <ToggleButton onClick={() => dispatch(toggleCVview())}>
                <span>Show CV</span>
            </ToggleButton>
            <SectionCommon>
                <TileList
                    title={
                        <TitleWithEmoticon>
                            I learning <br />
                            <span>  {/*This solution between words is added for better icon layout in sentence at smaller screens */}
                                now <Emoticon src={owl} alt="" />
                            </span>
                        </TitleWithEmoticon>
                    }
                    content={skillsLearning}
                />
            </SectionCommon>
            <SectionCommon>
                <TileList
                    title={
                        <TitleWithEmoticon>
                            What I want to <br />
                            <span>  {/*This solution between words is added for better icon layout in sentence at smaller screens */}
                                learn next
                                <Emoticon src={rocket} alt="" />
                            </span>
                        </TitleWithEmoticon>
                    }
                    content={skillsToHave}
                />
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