import React from 'react'
import { SocialLinks$, SocialLink$ } from './styles'

interface SocialLinksPropsI {
  links: {
    title?: string,
    url?: string
  }[]
}

const SocialLinks: React.FunctionComponent<SocialLinksPropsI> = ({ links = [] }) => {
  return (
    <SocialLinks$>
      {links.map(({ title, url }, key) => (
        <SocialLink$ key={key} target='_blank' href={url}>{title}</SocialLink$>
      ))}
    </SocialLinks$>
  )
}

export default SocialLinks