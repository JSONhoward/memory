import {atom} from 'recoil'
import { gridMedium, initialTiles, gridSmall, gridLarge } from './store.utils';

export const GridSize = atom({
    key: 'gridSize',
    default: {
        sm: gridSmall,
        md: gridMedium,
        lg: gridLarge
    }
})

export const Difficulty = atom({
    key: 'gridDifficulty',
    default: 'sm'
})

export const ShowTile = atom({
    key: 'showTile',
    default: initialTiles
})

export const MatchTile = atom({
    key: 'matchTiled',
    default: initialTiles
})