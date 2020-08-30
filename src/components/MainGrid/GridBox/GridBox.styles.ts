import * as React from 'react';
import styled from 'styled-components'

export const StyledGridBox = React.memo(styled('div')<{col: number, row: number, match: boolean}>`
position: relative;
display: ${props => props.match ? 'none' : 'grid'};
place-items: center;
grid-column: ${props => props.col};
grid-row: ${props => props.row};
box-shadow: 1px 1px 5px rgba(0,0,0,.5);
border-radius: 5px;
background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
cursor: pointer;
`)