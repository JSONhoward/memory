import React from 'react'
import {create} from 'react-test-renderer'
import GridMenu from './'

const props = {
    difficulty: 'sm',
    changeDifficulty: jest.fn(),
    newGame: jest.fn()
}

describe('GridMenu Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<GridMenu />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('Receives Props', () => {
        const component = create(<GridMenu {...props} />).root

        expect(component.props).toEqual(props)
    })
})