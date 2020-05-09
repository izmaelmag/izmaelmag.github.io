// import React from 'react'
// import styled, { createGlobalStyle, ThemeProvider, StyledComponent } from 'styled-components'
// import Title from 'src/archive/Title'
// import { PageThemes, ThemeNames, PageThemeI } from 'constants/Themes'
// import Media from 'utils/Media'
// import { Link } from 'gatsby'

// interface LayoutProps {
//   withBorder?: boolean
//   title?: string
//   subtitle?: string
//   titleLink?: string
//   layoutTheme?: ThemeNames
// }

// export const PageLayout: React.StatelessComponent<LayoutProps> = ({ children, title, layoutTheme, titleLink, subtitle, withBorder = true }) => {
//   return(
//     <ThemeProvider theme={PageThemes[layoutTheme]}>
//       <Page$>      
//         <GlobalStyles/>
        
//         <Content$>
//           <Header$ withBorder={withBorder}>
//             {title && (
//               <Title>
//                 { titleLink ? <Link to={titleLink}>{title}</Link> : title }
//               </Title>
//             )}

//             {subtitle && <Subtitle$>{subtitle}</Subtitle$>}
//           </Header$>

//           {children}
//         </Content$>  
//       </Page$>
//     </ThemeProvider>
//   )
// }

// //region Styled
// const GlobalStyles = createGlobalStyle`
//   body {
//     margin: 0;
//     width: 100vw;
//     min-height: 100vh;
//     color: ${({ theme }: PageThemeI) => theme.text}
//   }
// `

// const Page$ = styled.main`
//   width: 100vw;
//   min-height: 100vh;
//   background: ${({ theme }: PageThemeI ) => theme.background};
//   color: ${({ theme }: PageThemeI ) => theme.text };
// ` 

// const Content$ = styled.div`
//   max-width: 900px;
//   margin: auto;


//   ${Media.Phone`
//     padding: 0 24px;
//   `}
// `

// const Header$ = styled.header`
//   padding: 32px 0;
//   border-bottom: ${({ theme, withBorder }: PageThemeI & LayoutProps) => {
//     return withBorder && `1px solid ${theme.gray}`
//   }};
//   margin-bottom: ${({ withBorder }: PageThemeI & LayoutProps) => withBorder ? '32px' : 0};

//   ${Media.Phone`
//     padding: 20px 0;
//     font-size: 32px;
//   `}
// `

// const Subtitle$ = styled.div`
//   font-size: 10px;
//   font-family: sans-serif;
//   margin-top: 10px;
//   letter-spacing: 1px;
//   text-transform: uppercase;
//   color: ${({ theme }: PageThemeI) => theme.textSecondary}
// `
// //endregion