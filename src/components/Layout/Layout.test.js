import React from 'react'
import {create} from 'react-test-renderer'
import Layout from './'

describe('Layout Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<Layout />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('Receives Children', () => {
        const Child = () => <div>Test Child</div>
        const component = create(<Layout><Child /></Layout>).root

        expect(component.props.children).toStrictEqual(<Child />)
    })
})