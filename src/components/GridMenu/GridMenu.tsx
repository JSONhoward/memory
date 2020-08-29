import React from 'react'
import { DifficultyBox, DifficultyNumbers, NewGameBox, StyledGridMenu } from './GridMenu.styles'

type Props = {
    difficulty: string,
    changeDifficulty: (num: string) => void,
    newGame: () => void
}

const GridMenu: React.FC<Props> = ({ difficulty, changeDifficulty, newGame }) => {
    return (
        <StyledGridMenu>
            <DifficultyBox>
                <DifficultyNumbers onClick={() => changeDifficulty('sm')} disable={difficulty !== 'sm'}>easy</DifficultyNumbers>
                <DifficultyNumbers onClick={() => changeDifficulty('md')} disable={difficulty !== 'md'}>normal</DifficultyNumbers>
                <DifficultyNumbers onClick={() => changeDifficulty('lg')} disable={difficulty !== 'lg'}>hard</DifficultyNumbers>
            </DifficultyBox>
            <NewGameBox onClick={newGame}>
                <p>New Game</p>
            </NewGameBox>
        </StyledGridMenu>
    )
}

export default GridMenu
