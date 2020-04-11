import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { SansSerif, UnderlineText, DarkCSSColors, LightCSSColors } from 'constants/Styles';
import Media from 'utils/Media'
import checkMediaScheme from 'utils/checkMediaScheme'

const CommonLayout: React.FunctionComponent = (props) => {
  const isDark = checkMediaScheme()

  return (
    <ThemeProvider theme={{ isDark }}>
      <Body$>
        <GlobalStyles$ />
        {props.children}
      </Body$>
    </ThemeProvider>
  );
};

export default CommonLayout

const Body$ = styled.div`
  ${({ theme }) => theme.isDark ? DarkCSSColors : LightCSSColors}

  width: 100%;
  min-height: 100%;
  background: var(--colors-background);
`;

const GlobalStyles$ = createGlobalStyle`
  body, html {
    ${SansSerif}
    margin: 0;
    width: 100vw;
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    color: var(--colors-text);
    margin: 10px 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }

    ${Media.Phone`
      font-size: 14px;
    `}
  }

  a {
    color: var(--colors-link);
    text-decoration: none;
    font-weight: 500;
    ${UnderlineText({ color: `var(--colors-link-underline)`, position: 1.2 })}
    
    &:hover {
      ${UnderlineText({ color: `var(--colors-link-hover-underline)`, position: 1.2 })}
    }
  }
`;
