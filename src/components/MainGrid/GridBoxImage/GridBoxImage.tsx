import React from 'react'
import { ImageContainer, StyledGridBoxFront } from './GridBoxImage.styles'

interface Props {
    image: React.ReactNode,
    show: boolean,
    name: string,
    pairNum: number,
    handle: (event: any) => void
}

const GridBoxFront: React.FC<Props> = ({ name, handle, show, image, pairNum }) => {
    return (
        <StyledGridBoxFront id={pairNum.toString()} name={name} onClick={(e) => handle(e)} show={show}>
            <ImageContainer>
                {image}
            </ImageContainer>
        </StyledGridBoxFront>
    )
}

export default GridBoxFront
