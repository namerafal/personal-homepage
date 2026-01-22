import { SocialIcons } from "../../../../common/SocialIcons";
import { email } from "../email";
import { ThisIs } from "../MainInformation/styled";
import {
  FooterWrapper,
  Email,
  EmailWrapper,
  Description,
  Emoticon,
  SocialAndBrandsWrapper,
  RightsWrapper,
} from "./styled";
import fingersCrossed from "../../../../images/fingers-crossed.png";
import { BrandsLogo } from "../../../../common/BrandsLinks";
import { Rights } from "./Rights";

export const Footer = () => {
  return (
    <>
      <FooterWrapper id="footer">
        <ThisIs> Let's talk! </ThisIs>
        <EmailWrapper>
          <Email href={`mailto:${email}`} title={email}>
            {email}
          </Email>
        </EmailWrapper>
        <Description>
          I’m always open to new projects whenever I have the time. <br />
          If you have a website, dashboard or mobile app in mind and need some
          help to make your ideas come to life, feel free to contact me
          <Emoticon src={fingersCrossed} alt={""} />
        </Description>
        <SocialAndBrandsWrapper>
          <SocialIcons />
          <BrandsLogo />
        </SocialAndBrandsWrapper>
      </FooterWrapper>
      <RightsWrapper>
        <Rights />
      </RightsWrapper>
    </>
  );
};
