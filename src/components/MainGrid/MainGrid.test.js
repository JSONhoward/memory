import React from 'react'
import {create} from 'react-test-renderer'
import MainGrid from './'

const props = {
    handle: jest.fn(),
    match: [],
    pairNum: [],
    grid: [],
    show: [],
    time: {start: 1, end: 2},
    won: false
}

describe('MainGrid Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<MainGrid {...props} />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('Receives Props', () => {
        const component = create(<MainGrid {...props} />).root

        expect(component.props).toEqual(props)
    })
})