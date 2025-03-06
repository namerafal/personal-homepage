import { socials } from "./socials";
import  {List, Item, Link  } from "./styled";

export const SocialIcons = () => {
    <List>
        {socials.map(({ name, url, Icon }) => (
            <Item key={name}>
                <Link href={url} title={name} target="_blank" rel="noopener noreferrer">
                    <Icon />
                </Link>
            </Item>
        ))}
    </List>
};