import { certificates } from "./certificates.js";
import { List, Item, } from "./styled";

export const Certificates = () => {
    return (
        <List>
            {certificates.map(({ name, file }) => (
                <Item key={name}{...file}>
                    {file}
                </Item>
            ))}
        </List>
    );
};