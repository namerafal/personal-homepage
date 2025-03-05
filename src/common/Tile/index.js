import { Wrapper } from "./styled";

export const Tile = ({ title, content }) => {
    return (
        <Wrapper>
            <h2>{title}</h2>
            <p>{content}</p>
        </Wrapper>
    );
}