// import React, { FunctionComponent, useState, useEffect } from 'react'
// import styled from 'styled-components'
// import { ThemeNames } from 'constants/Themes'
// import { SketchGallery } from 'layouts/SketchGallery'
// import P5Sketch from 'components/P5Sketch'
// import Pagination from 'src/archive/Pagination'
// import sketch, { defaultParams } from 'sketches/vertices-oscillate'

// const SineSeries1: FunctionComponent = () => {
//   const [settings, setSettings] = useState(defaultParams)

//   useEffect(() => {
//     try {
//       setSettings({
//         ...settings,
//         size: window.innerWidth < 512 ? window.innerWidth : 512
//       })
//     } catch(e) {
//       console.error(e)
//     }
//   }, [])

//   return (
//     <SketchGallery title='Vertices' layoutTheme={ThemeNames.light}>
//       {/* <Pagination items={sketchItems} activeIndex={sketchIndex} /> */}

//       <SketchFrame$>
//         <P5Sketch sketch={sketch(defaultParams)} />
//       </SketchFrame$>
//     </SketchGallery>
//   )
// }

// export default React.memo(SineSeries1)

// //#region Styled
// const SketchFrame$ = styled.div`
//   position: relative;
//   line-height: 0;
//   border-radius: 6px;
//   overflow: hidden;
// `
// //#endregion
