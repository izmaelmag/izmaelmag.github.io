import React from 'react'
import usePersonDataEn from 'hooks/usePersonDataEn'
import IndexLayout from 'layouts/Index'

const IndexPageEn = () => <IndexLayout person={usePersonDataEn().person} />

export default IndexPageEn