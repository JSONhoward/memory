import * as React from 'react';
import styled from 'styled-components'

export const StyledGridMenu = styled('div')`
display: flex;
height: 50px;
width: 100vh;
margin: 1rem;

@media screen and (orientation: portrait) {
width: 95vw;
}
`

export const DifficultyBox = styled('div')`
display: flex;
align-items: center;
justify-content: space-between;
flex: 2;
font-size: 2vw;
border-radius: 10px;

@media screen and (orientation: portrait) {
    font-size: 5vw;
}
`

export const DifficultyNumbers = React.memo(styled('button')<{disable: boolean}>`
display: grid;
place-items: center;
height: 100%;
flex: 1;
min-width: 25%;
font-size: 1.5vw;
padding: 1px;
margin: .5rem;
border-radius: 5px;
text-transform: uppercase;
box-shadow: 1px 1px 5px rgba(0,0,0,.25);
color: ${props => props.disable ? 'rgba(0,0,0,.25)' : '#373737'};
font-weight: bold;
background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
border: none;
cursor: pointer;

@media screen and (max-width: 400px) {
    font-size: 3vw;
}
`)

export const NewGameBox = React.memo(styled('button')`
display: grid;
place-items: center;
flex: 1;
border-radius: 5px;
font-size: 2vw;
color: #373737;
font-weight: bold;
background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
border: none;
box-shadow: 1px 1px 5px rgba(0,0,0,.25);
margin: 0 .5rem;
cursor: pointer;

@media screen and (max-width: 400px) {
    font-size: 5vw;
}
`)