import { ListOfSkills } from "../../../../listOfSkills";
import { Content, HeaderEmoticon, Title, Wrapper } from "./styled";

export const TileList = ({ title, emoticon, content }) => (
  <Wrapper>
    <Title>
      {title}
      <HeaderEmoticon src={emoticon} alt="" />
    </Title>
    <Content>
      <ListOfSkills content={content} />
    </Content>
  </Wrapper>
);

export const CertificatesTile = ({ title, emoticon, content }) => (
  <Wrapper>
    <Title>
      {title}
      <HeaderEmoticon src={emoticon} alt="" />
    </Title>
    <Content>
      {content} 
    </Content>
  </Wrapper>
);