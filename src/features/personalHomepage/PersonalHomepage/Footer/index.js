import { email } from '../email';
import { FooterWrapper, SocialIcons, Email } from './styled';

export const Footer = () => {
    return (
        <FooterWrapper id="footer">
            <Email>{email}</Email>
            <SocialIcons>
                <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <img src="src\features\personalHomepage\PersonalHomepage\Footer\SocialIcons\icons\github.svg" alt="GitHub" />
                </a>
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/linkedin.svg" alt="LinkedIn" />
                </a>
                <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/twitter.svg" alt="Twitter" />
                </a>
            </SocialIcons>
        </FooterWrapper>
    );
};