import { email } from '../email';
import { Avatar } from './Avatar';
import { ButtonIcon, Name, ShortDescription, StyledButtonLink, ThisIs, Wrapper } from './styled';
import { usePreventDefaultHandlers } from '../../../../utils';

export const MainInformation = () => {
const preventUserActions = usePreventDefaultHandlers();

    return (
        <Wrapper>
            <Avatar {...preventUserActions} />
            <div>
                <ThisIs>This is</ThisIs>
                <Name>Rafał Olewicz</Name>
                <ShortDescription>
                    🧑🏻💻 I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.
                </ShortDescription>
                <StyledButtonLink href={`mailto:${email}`} title={email}>
                    <ButtonIcon />
                    Hire me
                </StyledButtonLink>
            </div>
        </Wrapper>
    );
};