import * as React from 'react';
import {
    FaHtml5,
    FaCss3,
    FaSass,
    FaJs,
    FaPhp,
    FaNodeJs,
    FaReact,
    FaVuejs,
    FaAngular,
    FaSwift,
    FaGithub,
    FaWordpress,
    FaNpm,
    FaYarn,
    FaFreeCodeCamp
} from 'react-icons/fa'
import { GridObject, InitialTiles } from '../@types/myTypes';

export const gridSmall: GridObject[] = [
    { pair: 1, image: <FaHtml5 color={'#E44D2D'} />},
    { pair: 2, image: <FaCss3 color={'#1F72B6'} />},
    { pair: 3, image: <FaSass color={'#CD669A'} />},
    { pair: 4, image: <FaJs color={'#F7DF32'} />},
    { pair: 5, image: <FaNpm color={'#CB3C37'} />},
    { pair: 6, image: <FaPhp color={'#777BB3'} />},
    { pair: 1, image: <FaHtml5 color={'#E44D2D'} />},
    { pair: 2, image: <FaCss3 color={'#1F72B6'} />},
    { pair: 3, image: <FaSass color={'#CD669A'} />},
    { pair: 4, image: <FaJs color={'#F7DF32'} />},
    { pair: 5, image: <FaNpm color={'#CB3C37'} />},
    { pair: 6, image: <FaPhp color={'#777BB3'} />},
]

export const gridMedium: GridObject[] = [
    { pair: 1, image: <FaHtml5 color={'#E44D2D'} /> },
    { pair: 2, image: <FaCss3 color={'#1F72B6'} /> },
    { pair: 3, image: <FaSass color={'#CD669A'} /> },
    { pair: 4, image: <FaJs color={'#F7DF32'} /> },
    { pair: 5, image: <FaNpm color={'#CB3C37'} /> },
    { pair: 6, image: <FaPhp color={'#777BB3'} /> },
    { pair: 7, image: <FaNodeJs color={'#90C53F'} /> },
    { pair: 8, image: <FaReact color={'#57D7FB'} /> },
    { pair: 9, image: <FaVuejs color={'#54B883'} /> },
    { pair: 10, image: <FaAngular color={'#E04231'} /> },
    { pair: 1, image: <FaHtml5 color={'#E44D2D'} /> },
    { pair: 2, image: <FaCss3 color={'#1F72B6'} /> },
    { pair: 3, image: <FaSass color={'#CD669A'} /> },
    { pair: 4, image: <FaJs color={'#F7DF32'} /> },
    { pair: 5, image: <FaNpm color={'#CB3C37'} /> },
    { pair: 6, image: <FaPhp color={'#777BB3'} /> },
    { pair: 7, image: <FaNodeJs color={'#90C53F'} /> },
    { pair: 8, image: <FaReact color={'#57D7FB'} /> },
    { pair: 9, image: <FaVuejs color={'#54B883'} /> },
    { pair: 10, image: <FaAngular color={'#E04231'} /> }
]

export const gridLarge: GridObject[] = [
    { pair: 1, image: <FaHtml5 color={'#E44D2D'} />},
    { pair: 2, image: <FaCss3 color={'#1F72B6'} />},
    { pair: 3, image: <FaSass color={'#CD669A'} />},
    { pair: 4, image: <FaJs color={'#F7DF32'} />},
    { pair: 5, image: <FaNpm color={'#CB3C37'} />},
    { pair: 6, image: <FaPhp color={'#777BB3'} />},
    { pair: 7, image: <FaNodeJs color={'#90C53F'} />},
    { pair: 8, image: <FaReact color={'#57D7FB'} />},
    { pair: 9, image: <FaVuejs color={'#54B883'} />},
    { pair: 10, image: <FaAngular color={'#E04231'} />},
    { pair: 11, image: <FaSwift color={'#EE5038'} />},
    { pair: 12, image: <FaWordpress color={'#29769B'} />},
    { pair: 13, image: <FaYarn color={'#348FBB'} />},
    { pair: 14, image: <FaGithub color={'#000000'} />},
    { pair: 15, image: <FaFreeCodeCamp color={'#0A0B22'} />},
    { pair: 1, image: <FaHtml5 color={'#E44D2D'} />},
    { pair: 2, image: <FaCss3 color={'#1F72B6'} />},
    { pair: 3, image: <FaSass color={'#CD669A'} />},
    { pair: 4, image: <FaJs color={'#F7DF32'} />},
    { pair: 5, image: <FaNpm color={'#CB3C37'} />},
    { pair: 6, image: <FaPhp color={'#777BB3'} />},
    { pair: 7, image: <FaNodeJs color={'#90C53F'} />},
    { pair: 8, image: <FaReact color={'#57D7FB'} />},
    { pair: 9, image: <FaVuejs color={'#54B883'} />},
    { pair: 10, image: <FaAngular color={'#E04231'} />},
    { pair: 11, image: <FaSwift color={'#EE5038'} />},
    { pair: 12, image: <FaWordpress color={'#29769B'} />},
    { pair: 13, image: <FaYarn color={'#348FBB'} />},
    { pair: 14, image: <FaGithub color={'#000000'} />},
    { pair: 15, image: <FaFreeCodeCamp color={'#0A0B22'} />},
]

export const initialTiles: InitialTiles = {
    tile0: false,
    tile1: false,
    tile2: false,
    tile3: false,
    tile4: false,
    tile5: false,
    tile6: false,
    tile7: false,
    tile8: false,
    tile9: false,
    tile10: false,
    tile11: false,
    tile12: false,
    tile13: false,
    tile14: false,
    tile15: false,
    tile16: false,
    tile17: false,
    tile18: false,
    tile19: false,
    tile20: false,
    tile21: false,
    tile22: false,
    tile23: false,
    tile24: false,
    tile25: false,
    tile26: false,
    tile27: false,
    tile28: false,
    tile29: false,
}

export const shuffleImages = (arr: GridObject[]): GridObject[] => {
    let shuffledArr: GridObject[] = [...arr]
    for (let i: number = shuffledArr.length - 1; i > 0; i--) {
        let j: number = Math.floor(Math.random() * (i + 1))
        let temp = shuffledArr[i]
        shuffledArr[i] = shuffledArr[j]
        shuffledArr[j] = temp
    }
    return shuffledArr
}