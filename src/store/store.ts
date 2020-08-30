import {atom, selector} from 'recoil'
import { gridMedium, initialTiles, gridSmall, gridLarge, shuffleImages } from './store.utils';

export const GridSize = atom({
    key: 'gridSize',
    default: {
        sm: gridSmall,
        md: gridMedium,
        lg: gridLarge
    }
})

export const ShuffledGrid = selector({
    key: 'shuffledGrid',
    get: ({get}) => {
        let {sm, md, lg} = get(GridSize),
        small = shuffleImages(sm),
        medium = shuffleImages(md),
        large = shuffleImages(lg)

        return {sm: small, md: medium, lg: large}
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