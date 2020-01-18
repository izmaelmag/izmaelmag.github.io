import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import Title from 'components/Title'
import { PageThemes, ThemeNames, PageThemeI } from 'constants/Themes'
import Media from 'utils/Media';

interface LayoutProps {
  title?: string
  titleLink?: string
  layoutTheme?: ThemeNames
}

export const PageLayout: React.StatelessComponent<LayoutProps> = ({ children, title, layoutTheme, titleLink }) => {
  return(
    <ThemeProvider theme={PageThemes[layoutTheme]}>
      <Page$>      
        <GlobalStyles/>
        
        <Content$>
          {title && <Title to=''>{title}</Title>}
          {children}
        </Content$>  
      </Page$>
    </ThemeProvider>
  )
}

//region Styled
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    width: 100vw;
    min-height: 100vh;
    color: ${({ theme }: PageThemeI) => theme.text}
  }
`

const Page$ = styled.main`
  width: 100vw;
  min-height: 100vh;
  background: ${({ theme }: PageThemeI ) => theme.background};
  color: ${({ theme }: PageThemeI ) => theme.text };
` 

const Content$ = styled.div`
  max-width: 900px;
  margin: auto;


  ${Media.Phone`
    padding: 0 24px;
  `}
`
//endregion