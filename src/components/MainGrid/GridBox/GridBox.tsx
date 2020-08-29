import React from 'react'
import { StyledGridBox } from './GridBox.styles'

interface Props {
    col: number,
    row: number,
    match: boolean
}

const GridBox: React.FC<Props> = ({col, row, match, children}) => {
    return (
        <StyledGridBox match={match} col={col} row={row}>
            {children}
        </StyledGridBox>
    )
}

export default GridBox
