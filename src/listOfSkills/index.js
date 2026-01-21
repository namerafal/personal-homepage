import { List, ListItem } from "./styled";

export const ListOfSkills = ({ content }) => (
  <>
    {Array.isArray(content) ? (
      <List>
        {content.length > 0 ? (content.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))
        ) : (
          <p>There is a lot for sure, <br/> but I can't show all of them right now. 🙄</p>
        )}
      </List>
    ) : (
      <p>🤷🏻‍♂️ Something went wrong. <br/> Let me know about this situation, please.</p>
    )}
  </>
);