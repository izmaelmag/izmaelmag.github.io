import React from 'react'
import IndexLayout from 'layouts/Index'
import usePersonData from 'hooks/usePersonData'
import useAnimationsList from 'hooks/useAnimationsList'

const IndexPage = () => {

  return (
    <IndexLayout
      animations={useAnimationsList().pagesList.pages}
      person={usePersonData().person}
    />
  )
}

export default IndexPage