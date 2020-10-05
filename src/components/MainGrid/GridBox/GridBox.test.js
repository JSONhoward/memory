import React from 'react'
import {create} from 'react-test-renderer'
import GridBox from './'

const props = {
    col: 1,
    row: 1,
    match: false
}

describe('GridBox Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<GridBox />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('Receives Props', () => {
        const component = create(<GridBox {...props} />).root

        expect(component.props).toEqual(props)
    })
})