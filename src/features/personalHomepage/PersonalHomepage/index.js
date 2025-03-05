import MainWrapper from "../../../common/mainWrapper";
import { ThemeSwitch } from "../../../common/ThemeSwitch/index";
import { Tile } from "../../../common/Tile";
import { Header } from "./Header";

export const PersonalHomepage = () => {
    return (
        <MainWrapper>
            <Header>
                <h1>Personal Homepage</h1>
                <ThemeSwitch />
            </Header>
            <p>Welcome to my personal homepage!</p>
            <Tile title="About me" content="I am a software engineer." />
            <Tile title="Skills" content="I am skilled in JavaScript, React, and Node.js." />
        </MainWrapper>
    );
};
