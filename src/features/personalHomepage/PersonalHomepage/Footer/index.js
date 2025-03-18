import { SocialIcons } from '../../../../common/SocialIcons';
import { email } from '../email';
import { ThisIs } from '../MainInformation/styled';
import { FooterWrapper, Email, Description } from './styled';

export const Footer = () => {
    return (
        <FooterWrapper id="footer">
            <ThisIs> Let's talk! </ThisIs>
            <Email>{email}</Email>
            <Description>
                I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to contact me
            </Description>
            <SocialIcons />
        </FooterWrapper>
    );
};