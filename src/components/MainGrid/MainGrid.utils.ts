export const genBoxesArray = (num: number): Array<{col: number, row: number }> => {
    let arr: {col: number, row: number}[] = []
    let maxCol: number, maxRow: number
    if(num === 12) {
        maxCol = 4
        maxRow = 3
    }
    if(num === 20) {
        maxCol = 5
        maxRow = 4
    }
    if(num === 30) {
        maxCol = 6
        maxRow = 5
    }

    for (let i = 0; i < num; i++) {
        arr[i] = {col: i % maxCol! + 1, row: i % maxRow! + 1 }
    }

    return arr
}

export const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}