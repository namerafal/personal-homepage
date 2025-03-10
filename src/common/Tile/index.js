import { List, ListItem } from "../../listOfSkills/styled";
import { Content, Title, Wrapper } from "./styled";

export const TileList = ({ title, content }) => (
    <Wrapper>
        <Title>{title}</Title>
        <Content>
            {Array.isArray(content) ? (
                    <List>
                      {content.map((item, index) => (
                        <ListItem key={index}>{item}</ListItem>
                      ))}
                    </List>
                  ) : (
                    content
                  )}
        </Content>
    </Wrapper>
);