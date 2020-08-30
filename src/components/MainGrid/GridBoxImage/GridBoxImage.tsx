import React from 'react'
import { ImageContainer, StyledGridBoxImage } from './GridBoxImage.styles'

interface Props {
    image: React.ReactNode,
    show: boolean,
    name: string,
    pairNum: number,
    handle: (event: MouseEvent) => void
}

const GridBoxFront: React.FC<Props> = ({ name, handle, show, image, pairNum }) => {
    return (
        <StyledGridBoxImage id={pairNum.toString()} name={name} onClick={(e: MouseEvent) => handle(e)} show={show}>
            <ImageContainer>
                {image}
            </ImageContainer>
        </StyledGridBoxImage>
    )
}

export default GridBoxFront
