import { useDispatch, useSelector } from 'react-redux';
import { selectIsDarkTheme, toggleTheme } from '../themeSlice';
import { Wrapper, Button, Text, IconSpace, IconWrapper, Icon } from './styles';

export const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <Wrapper>
      <Button onClick={() => dispatch(toggleTheme())}>
        <Text>Dark mode {isDarkTheme ? 'on' : 'of'}</Text>
        <IconSpace>
          <IconWrapper $moveToRight={isDarkTheme} >
          <Icon />
          </IconWrapper>
        </IconSpace>
      </Button>
    </Wrapper>
  );
};