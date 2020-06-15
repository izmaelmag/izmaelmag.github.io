import React, { useState, FunctionComponent } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import FullscreenDemo from 'layouts/FullscreenDemo'
import { Interface$, Corner$ } from 'layouts/FullscreenDemo/styles'
import { Colors } from 'constants/Styles'
import P5Sketch from 'components/P5Sketch'
import PageTitle from 'components/PageTitle'
import sketch from 'sketches/mandelbrot'
import SEO from 'components/seo'

const Mandelbrot: FunctionComponent = () => {
  const [settings, setSettings] = useState({
    adiv: 1,
  });

  return (
    <div className="light-theme">
      <SEO title="Mandelbrot set" />

      <FullscreenDemo>
        <Interface$>
          <Corner$ top left>
            <PageTitle title='Mandelbrot' />
            <Link to="/">Home</Link>
          </Corner$>
        </Interface$>

        <SketchFrame$>
          <P5Sketch sketch={sketch[0](settings)} />
        </SketchFrame$>
      </FullscreenDemo>
    </div>
  )
}

export default React.memo(Mandelbrot)

//#region Styled
const SketchFrame$ = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${Colors.CSS.bg}
`
//#endregion