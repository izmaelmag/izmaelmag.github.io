import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import Title from 'components/Title'
import { PageThemes, ThemeNames, PageThemeI } from 'constants/Themes'

interface LayoutProps {
  title?: string,
  layoutTheme?: ThemeNames
}

export const PageLayout = ({ title, layoutTheme }: LayoutProps) => {
  console.log(PageThemes)
  return(
    <ThemeProvider theme={PageThemes[layoutTheme]}>
      <Page$>
        <GlobalStyles/>
        <Content$>
          {title && (
            <Title>
              SINE SERIES
            </Title>  
          )}
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
  }
`

const Page$ = styled.main`
  width: 100vw;
  min-height: 100vh;
  background: ${({theme}: PageThemeI ) => theme.background};
  color: ${({theme}: PageThemeI ) => theme.text };
` 

const Content$ = styled.div`
  max-width: 900px;
  margin: auto;
`
//endregion