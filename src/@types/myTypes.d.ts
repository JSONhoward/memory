export type SelectionArray = {
    name: string,
    id: string
}

export type InitialTiles = {
    tile0: boolean,
    tile1: boolean,
    tile2: boolean,
    tile3: boolean,
    tile4: boolean,
    tile5: boolean,
    tile6: boolean,
    tile7: boolean,
    tile8: boolean,
    tile9: boolean,
    tile10: boolean,
    tile11: boolean,
    tile12: boolean,
    tile13: boolean,
    tile14: boolean,
    tile15: boolean,
    tile16: boolean,
    tile17: boolean,
    tile18: boolean,
    tile19: boolean,
    tile20: boolean,
    tile21: boolean,
    tile22: boolean,
    tile23: boolean,
    tile24: boolean,
    tile25: boolean,
    tile26: boolean,
    tile27: boolean,
    tile28: boolean,
    tile29: boolean,
}

export type GridObject = {
    pair: number,
    image: React.ReactNode
}

export type GridSizeType = {
    sm: GridObject[],
    md: GridObject[],
    lg: GridObject[]
}