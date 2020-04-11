import React from 'react'
import { SocialLinks$, SocialLink$ } from './styles'

const Links = [
  {
    title: 'twitter',
    url: 'https://twitter.com/tiredpieceofman'
  },
  {
    title: 'instagram',
    url: 'https://www.instagram.com/izmaelmag/'
  },
  {
    title: 'codepen',
    url: 'https://codepen.io/dead_seagull'
  },
  {
    title: 'cv',
    url: 'https://resume.io/r/krIT8F5Mv'
  },
  {
    title: 'email',
    url: 'mailto:ismail@resume.io'
  },
]

const SocialLinks = () => {
  return (
    <SocialLinks$>
      {Links.map(({ title, url }, key) => (
        <SocialLink$ key={key} target='_blank' href={url}>{title}</SocialLink$>
      ))}
    </SocialLinks$>
  )
}

export default SocialLinks