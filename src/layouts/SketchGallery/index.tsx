import React from 'react'
import styled, { createGlobalStyle, ThemeProvider, StyledComponent } from 'styled-components'
import Title from 'components/Title'
import { PageThemes, ThemeNames, PageThemeI } from 'constants/Themes'
import Media from 'utils/Media'
import { Link } from 'gatsby'

interface LayoutProps {
  title?: string
  layoutTheme?: ThemeNames
}

export const SketchGallery: React.StatelessComponent<LayoutProps> = ({ children, title, layoutTheme }) => {
  return(
    <ThemeProvider theme={PageThemes[layoutTheme]}>
      <Page$>      
        <GlobalStyles/>
        
        <Content$>
          <Header$>
            <HomeLink$ to='/'>Main page</HomeLink$>

            {title && <Title>{title}</Title>}
          </Header$>

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
  max-width: 640px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Media.Phone`
    padding: 0 24px;
  `}
`

const Header$ = styled.header`
  padding: 32px 0;
  font-size: 32px;
  text-align: center;

  ${Media.Phone`
    padding: 20px 0;
    font-size: 24px;
  `}
`

const HomeLink$ = styled(Link)`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: ${({ theme }: PageThemeI ) => theme.accent};
  font-family: 'Motserrat', sans-serif;
  font-weight: 900;
  text-decoration: none;
  margin-bottom: 15px;
`
//endregion
