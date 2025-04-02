import { useDispatch, useSelector } from "react-redux";
import { Emoticon, MainWrapper, TitleWithEmoticon, ToggleButton } from "./styled";
import { ThemeSwitch } from "../../../common/ThemeSwitch/index";

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
import { CertificatesTile, TileList } from "./Tile";

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
                    <CertificatesTile
                        title="Certificate"
                        emoticon={graduationExpert}
                        content={<Certificates />}
                    />
                )}
            </SectionCommon>
            <ToggleButton onClick={() => dispatch(toggleSkillsView())}>
                <span>{showSkills ? "Show Certificate" : "Show Skills"}</span>
            </ToggleButton>
            <SectionCommon>
                <TileList
                    title={
                        <TitleWithEmoticon>
                            What I want to <br />
                            <span>
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
