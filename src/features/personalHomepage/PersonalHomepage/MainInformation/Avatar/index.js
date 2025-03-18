import rafalPicture from './Rafal.png';
import { Picture, Wrapper } from './styled';

export const Avatar = () => (
    <Wrapper>
         {/* <Picture src="https://avatars.githubusercontent.com/u/59869504?v=4" alt="avatar" /> */}
        <Picture src={rafalPicture} alt="Rafal picture" />
    </Wrapper>
    );
