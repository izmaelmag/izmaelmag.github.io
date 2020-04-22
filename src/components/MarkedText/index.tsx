import React from 'react'
import marked from 'marked'

interface MarkedTextI {
  markdownContent: string
}

const MarkedText: React.FunctionComponent<MarkedTextI> = ({ markdownContent }) => {
  return(
    <div dangerouslySetInnerHTML={{ __html: marked(markdownContent) }} />
  )
}

export default MarkedText