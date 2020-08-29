import styled from 'styled-components'

export const StyledGridBoxFront = styled('div')<{show: boolean, name: string, id?: string}>`
position: absolute;
display: grid;
place-items: center;
opacity: ${props => props.show ? 1 : 0};
height: 100%;
width: 100%;
border-radius: 5px;
border: 1px solid rgba(0,0,0,.25);
background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
`

export const ImageContainer = styled('div')`
position: absolute;
display: grid;
place-items: center;
font-size: 8vw;

@media screen and (orientation: portrait) {
    font-size: 15vw;
}
`