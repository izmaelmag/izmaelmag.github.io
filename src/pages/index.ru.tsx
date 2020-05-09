import React from 'react'
import usePersonDataRu from 'hooks/usePersonDataRu'
import IndexLayout from 'layouts/Index'

const IndexPageRu = () => <IndexLayout person={usePersonDataRu().person} />

export default IndexPageRu