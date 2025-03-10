import React from 'react';
import { Icon, Subtitle, Title, TitleWrapper } from './styled';

const Header = ({icon, title, subtitle}) => (
 <TitleWrapper>
        {/* <Icon as={GitHubIcon} /> */}
        <Icon as={icon}/>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TitleWrapper>
);

export default Header;
