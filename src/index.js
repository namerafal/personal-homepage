import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import App from './core/App/App';
import { GlobalStyles } from './core/App/GlobalStyle';
import { themeLight, themeDark } from './common/theme';

const Root = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={isDarkMode ? themeDark : themeLight}>
        <GlobalStyles />
        <Normalize />
        <App toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      </ThemeProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
