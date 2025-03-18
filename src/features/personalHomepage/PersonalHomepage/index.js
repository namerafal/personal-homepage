import MainWrapper from "./styled";
import { ThemeSwitch } from "../../../common/ThemeSwitch/index";
import { TileList } from "../../../common/Tile";
import Portfolio from "./Portfolio";
import { MainInformation } from "./MainInformation";
import { SectionCommon } from "../../../common/Section/commonSection";
import { skillsNow, skillsToHave } from "../../../listOfSkills/skills";
import { ReactComponent as GitHubIcon } from "../../../common/SocialIcons/icons/github.svg";
import Header from "./Header";
import { Footer } from "./Footer";

export const PersonalHomepage = () => {
    return (
        <MainWrapper>
            <ThemeSwitch />
            <MainInformation />
            <SectionCommon>
                <TileList title="My skillset includes" content={skillsNow} />
            </SectionCommon>
            <SectionCommon>
                <TileList title="What I want to learn next" content={skillsToHave} />
            </SectionCommon>
            <SectionCommon>
                <Header icon={GitHubIcon} title="Portfolio" subtitle={"My recent projects"}/>
                <Portfolio />
            </SectionCommon>
            <Footer/>
        </MainWrapper>
    );
};
