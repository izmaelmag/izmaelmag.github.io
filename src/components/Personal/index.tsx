import React from 'react'
import * as photo1x from 'images/photo@1x.png'
import * as photo2x from 'images/photo@2x.png'
import getSrcSet from 'utils/getSrcSet'
import {
  Personal$,
  Photo$,
  Info$,
  Name$, 
  Position$
} from './styles'

const Personal = () => (
  <Personal$>
    <Photo$>
      <img srcSet={getSrcSet(photo1x, photo2x)} src={photo1x} alt='My photo' />
    </Photo$>

    <Info$>
      <Name$>Ismail Magomedov</Name$>
      <Position$>Frontend developer</Position$>
    </Info$>
  </Personal$>
)

export default Personal