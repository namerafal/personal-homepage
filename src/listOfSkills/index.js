import { List, ListItem } from "./styled";

export const ListOfSkills = ({content}) => (
    <>
        {Array.isArray(content) ? (
        <List>
          {content.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </List>
      ) : (
        content
      )}
    </>
);