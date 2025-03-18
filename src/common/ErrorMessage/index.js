import { socials } from "../SocialIcons/socials";
import { ErrorIcon, HeaderError, Paragraph, StyledButton, Wrapper } from "./styled";

export const ErrorMessage = () => {
    const githubSocial = socials.find(social => social.name === "GitHub");
    return (
        <Wrapper>
            <ErrorIcon />
            <HeaderError>
                Oops! Something went wrong...
            </HeaderError>
            <Paragraph>
                Sorry, failed to load Github projects.<br/>
                You can check them directly on Github.
            </Paragraph>
            <StyledButton 
                href={githubSocial.url} 
                title={githubSocial.name}
                target="_blank"
                rel="noopener noreferrer"
            >
                Go to Github
            </StyledButton>
        </Wrapper>
    );
};