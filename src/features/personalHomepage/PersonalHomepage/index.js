import MainWrapper from "./styled";
import { ThemeSwitch } from "../../../common/ThemeSwitch/index";
import { Tile } from "../../../common/Tile";
// import Header from "./Header";

import PortfolioInformation from "./Portfolio";
import { MainInformation } from "./MainInformation";

export const PersonalHomepage = () => {
    return (
        <MainWrapper>
            <ThemeSwitch />
            <MainInformation />           
            <Tile title="About me" content="I am a software engineer." />
            <Tile title="Skills" content="I am skilled in JavaScript, React, and Node.js." />
            <PortfolioInformation />
        </MainWrapper>
    );
};
