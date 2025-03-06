import { email } from '../email';
import rafalPicture from './raf.jpg';
import { ButtonIcon, Name, Picture, ShortDescription, StyledButtonLink, ThisIs, Wrapper } from './styled';

export const MainInformation = () => {
    return (
        <Wrapper>
        <Picture src={rafalPicture} alt="Rafal picture" />
        <div>
            <ThisIs>This is</ThisIs>
            <Name>Rafał Olewicz</Name>
            <ShortDescription>
                {/* <Icon src={faceIcon} alt="Face icon" />
                <Icon src={laptopIcon} alt="Laptop icon" /> */}
                🧑🏻💻I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.
            </ShortDescription>
            <StyledButtonLink href={`mailto:${email}`} title={email}>
                <ButtonIcon/>
                Hire me
            </StyledButtonLink>
        </div>
    </Wrapper>
    );
};