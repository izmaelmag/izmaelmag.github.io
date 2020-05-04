import React from 'react'
import usePersonDataRu from 'hooks/usePersonDataRu'
import IndexLayout from 'templates/Index'
import { LocalesT } from 'constants/Locales'

const IndexPageRu = () => {
  const data = usePersonDataRu()

  return <IndexLayout locale={LocalesT.ru} person={data.person} />
}

export default IndexPageRu