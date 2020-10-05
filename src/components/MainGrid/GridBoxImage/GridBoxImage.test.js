import React from 'react'
import {create} from 'react-test-renderer'
import GridBoxImage from './'

const props = {
    image: <img src='#' alt='test' />,
    show: true,
    name: 'test',
    pairNum: 1,
    handle: jest.fn()
}

describe('GridBoxImage Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<GridBoxImage {...props} />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('Receives Props', () => {
        const component = create(<GridBoxImage {...props} />).root

        expect(component.props).toEqual(props)
    })
})