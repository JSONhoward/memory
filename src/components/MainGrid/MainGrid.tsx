import React from 'react'

import GridBoxImage from './GridBoxImage/GridBoxImage'
import { genBoxesArray } from './MainGrid.utils';
import GridBox from './GridBox/GridBox';
import { GridObject, InitialTiles } from '../../@types/myTypes';
import { GameStats, StyledMainGrid } from './MainGrid.styles';

type Props = {
    handle: (event: any) => void,
    match: InitialTiles,
    pairNum: GridObject[],
    grid: GridObject[],
    show: InitialTiles,
    time: {start: number, end: number},
    won: boolean
}

const MainGrid: React.FC<Props> = ({ handle, match, pairNum, grid, show, time, won }) => {
    const boxes = genBoxesArray(grid.length).map((el, i) => {
        return (
            <GridBox match={match[`tile${i}` as keyof InitialTiles]} col={el.col} row={el.row} key={i}>
                <GridBoxImage name={`tile${i}`} pairNum={pairNum[i].pair} handle={handle} show={show[`tile${i}` as keyof InitialTiles]} image={grid[i].image} />
            </GridBox>
        )
    })

    return (
        <>
            <StyledMainGrid size={grid.length}>
                {boxes}
            </StyledMainGrid>
            {!won && (<GameStats gameOver={false}>
                <p>Game Over</p>
                <p>time: {((time.end - time.start) / 1000).toFixed(1)}s</p>
            </GameStats>)}
        </>
    )
}

export default MainGrid
