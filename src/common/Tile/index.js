import { ListOfSkills } from "../../listOfSkills";
// import { List, ListItem } from "../../listOfSkills/styled";
import { Content, Title, Wrapper } from "./styled";

export const TileList = ({ title, content }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Content>
      <ListOfSkills content={content} />
    </Content>
  </Wrapper>
);