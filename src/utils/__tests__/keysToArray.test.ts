import keysToArray from '../keysToArray'

describe('Testing keysToArray util', () => {
  test('Convert object to array', () => {
    const inputData = {
      object: {
        test1: 1,
        test2: true,
        test3: 'string',
        test4: ['array'],
        test5: { object: true }
      },
      keyName: 'TestKey',
      valueName: 'TestValue'
    }

    const expectedData = [
      { TestKey: 'test1', TestValue: 1                },
      { TestKey: 'test2', TestValue: true             },
      { TestKey: 'test3', TestValue: 'string'         },
      { TestKey: 'test4', TestValue: ['array']        },
      { TestKey: 'test5', TestValue: { object: true } },
    ]

    expect(keysToArray(inputData)).toEqual(expectedData)
  })
})