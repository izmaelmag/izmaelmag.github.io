import React from 'react'
import usePersonDataEn from 'hooks/usePersonDataEn'
import IndexLayout from 'templates/Index'
import { LocalesT } from 'constants/Locales'

const IndexPageEn = () => {
  const data = usePersonDataEn()

  return <IndexLayout locale={LocalesT.en} person={data.person} />
}

export default IndexPageEn