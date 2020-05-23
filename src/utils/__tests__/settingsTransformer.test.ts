import settingsTransformer from '../settingsTransformer'

const testettingsList: ISettingsList = {
  testKey1: {
    type: 'range',
    value: 23,
    props: {
      min: 1,
      max: 100,
      step: 3
    },
    title: 'Test 1'
  },

  testKey2: {
    type: 'toggle',  
    value: true,
    props: {},
    title: 'Test 2'
  }
}

describe('Testing settingsTransformer util', () => {
  test('toObject method', () => {

    expect(settingsTransformer.toObject(testettingsList)).toEqual({
      testKey1: 23,
      testKey2: true
    })
  })
})