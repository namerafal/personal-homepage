import { brands } from "./brands";
import { List, Item, Link } from "./styled";

export const BrandsLogo = () => {
  return (
    <List>
      {brands.map(({ name, url, Logo }) => (
        <Item key={name}>
          <Link
            href={url}
            title={name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logo />
          </Link>
        </Item>
      ))}
    </List>
  );
};
