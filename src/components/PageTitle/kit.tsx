import React from 'react'
import PageTitle from '.'
import Group, { GroupDivider$ } from 'components/Group'
import usePersonDataEn from 'hooks/usePersonDataEn'

const ToggleKit = () => {
  const userData = usePersonDataEn()

  return (
    <Group title='Page title'>
      <PageTitle title="Custom page title" subtitle="Page subtitle or tags"/>
      <GroupDivider$ />
      <PageTitle
        imageSrc={userData.person.image.resolutions.src}
        imageSrcSet={userData.person.image.resolutions.srcSet}
        title="Ismail Magomedov"
        subtitle="Frontend developer"
      />
    </Group>
  )
}

export default ToggleKit