import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ThemeNames } from 'constants/Themes';
import { SketchGallery } from 'layouts/SketchGallery';
import P5Sketch from 'components/P5Sketch';
import Pagination from 'components/Pagination';
import sketches from 'sketches/mandelbrot';

const SineSeries1: FunctionComponent = () => {
  const [settings, setSettings] = useState({
    adiv: 1,
  });
  const [sketchIndex, setSketchIndex] = useState(0);

  const paginationItems = sketches.map((sketch, i) => ({
    onClick: () => setSketchIndex(i),
  }));

  return (
    <SketchGallery title='Mandelbrot set' layoutTheme={ThemeNames.light}>
      <Pagination
        showSingle={false}
        items={paginationItems}
        activeIndex={sketchIndex}
      />

      <SketchFrame$>
        <P5Sketch sketch={sketches[sketchIndex](settings)} />
      </SketchFrame$>

      <input
        type='number'
        value={settings.adiv}
        step='0.05'
        onChange={(e) => setSettings({ adiv: Number(e.currentTarget.value) })}
      />
    </SketchGallery>
  );
};

export default React.memo(SineSeries1);

//#region Styled
const SketchFrame$ = styled.div`
  position: relative;
  line-height: 0;
  border-radius: 6px;
`;
//#endregion
