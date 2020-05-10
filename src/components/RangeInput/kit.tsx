import React, { useState } from 'react'
import RangeInput from '.'
import Group, { GroupDivider$ } from 'components/Group'

const RangeInputKit = () => {
  const [demovalue, setDemovalue] = useState(0)

  return (
    <Group title='Range slider'>
      <RangeInput
        handleChange={() => false}
        values={[1, 100, 1]}
      />
      <GroupDivider$ />
      <RangeInput
        handleChange={setDemovalue}
        values={[0, 5000, 100]}
        label={`With label, value: ${demovalue}`}
      />
      <GroupDivider$ />
      <RangeInput
        initialValue={100}
        handleChange={() => false}
        values={[0, 2000, 100]}
        showValue
      />
      <GroupDivider$ />
      <RangeInput
        initialValue={140}
        handleChange={() => false}
        values={[10, 550, 10]}
        showValue
        showLimits
      />
    </Group>
  )
}

export default RangeInputKit