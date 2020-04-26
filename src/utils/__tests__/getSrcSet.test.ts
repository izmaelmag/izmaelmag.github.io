import getSrcSet from '../getSrcSet'

describe('Testing getSrcSet', () => {
  test('Generating expected values', () => {
    const expectedValue = 'image@1x.png 1x, image@2x.png 2x'
    expect(getSrcSet('image@1x.png', 'image@2x.png')).toEqual(expectedValue)
  })
  
  test('Not generating unexpected values', () => {
    const checkValue = (val: string) => expect(getSrcSet('image@1x.png', 'image@2x.png')).not.toEqual(val)

    const uexpectedValues = [
      'image@1x.png 0x, image@2x.png 1x',
      'image@1x.png 1x, image@2x.png 2x, ',
      'image@1x.png 1x, image@2x.png 2x,',
      'image@1x.png 1x  image@2x.png 2x',
    ]

    uexpectedValues.map(checkValue)    
  })
})