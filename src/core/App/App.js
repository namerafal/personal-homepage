import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyles } from './GlobalStyle';
import { selectIsDarkTheme } from '../../common/themeSlice';
import { themeDark, themeLight } from '../../theme';
import { PersonalHomepage } from '../../features/personalHomepage/PersonalHomepage';

export const App = () => {
  const isDarkMode = useSelector(selectIsDarkTheme);
  // const dispatch = useDispatch();

  // const handleToggleTheme = () => {
  //   dispatch(toggleTheme());
  // };

  return (
    <ThemeProvider theme={isDarkMode ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyles />
      <PersonalHomepage />
    </ThemeProvider>
  );
};

export default App;