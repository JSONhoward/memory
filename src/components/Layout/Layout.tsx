import React from 'react'
import { Reset } from 'styled-reset'
import { StyledLayout } from './Layout.styles'

const Layout: React.FC = ({ children }) => {
    return (
        <StyledLayout>
            <Reset />
            {children}
        </StyledLayout>
    )
}

export default Layout
