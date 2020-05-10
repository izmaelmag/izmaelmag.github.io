import React from 'react'
import SocialLinks from '.'
import Group from 'components/Group'
import usePersonDataEn from 'hooks/usePersonData'
import keysToArray from 'utils/keysToArray'

const ToggleKit = () => {
  const { github, email, cv, twitter, instagram } = usePersonDataEn().person

  return (
    <Group title='Social links'>
      <SocialLinks links={keysToArray({
        object: { github, email, cv, twitter, instagram },
        keyName: 'title',
        valueName: 'url'
      })}/>
    </Group>
  )
}

export default ToggleKit