import React, { MouseEvent, useState, useEffect } from 'react'

import MainGrid from '../components/MainGrid/MainGrid';
import Layout from '../components/Layout/Layout'
import GridMenu from '../components/GridMenu/GridMenu';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { Difficulty, MatchTile, ShowTile, GridSize } from '../store/store';
import { InitialTiles, SelectionArray, GridSizeType } from '../@types/myTypes';
import { sleep } from '../components/MainGrid/MainGrid.utils';
import { shuffleImages } from '../store/store.utils';

const Index = () => {
    const [difficulty, setDifficulty] = useRecoilState(Difficulty)
    const [gridTiles, setGridTiles] = useRecoilState<GridSizeType>(GridSize)
    const [selectionArray, setSelectionArray] = useState<SelectionArray[]>([])
    const [matchTiles, setMatchTiles] = useRecoilState<InitialTiles>(MatchTile)
    const [showTiles, setShowTiles] = useRecoilState<InitialTiles>(ShowTile)
    const resetShowTiles = useResetRecoilState(ShowTile)
    const resetMatchTiles = useResetRecoilState(MatchTile)
    const [gameActive, setGameActive] = useState<boolean>(false)
    const [time, setTime] = useState<{start: number, end: number}>({start: 0, end: 0})
    const [won, setWon] = useState<boolean>(false)

    useEffect(() => {
        let arr = Object.values(matchTiles).filter(el => el === true)
        if(difficulty === 'sm' && arr.length === 12) {
                let endTime = +new Date()
                setGameActive(false)
                setTime(time => {
                    return {...time, end: endTime}
                })
                setWon(true)
        }
        if(difficulty === 'md' && arr.length === 20) {
            let endTime = +new Date()
                setGameActive(false)
                setTime(time => {
                    return {...time, end: endTime}
                })
                setWon(true)
        }
        if(difficulty === 'lg' && arr.length === 30) {
            let endTime = +new Date()
                setGameActive(false)
                setTime(time => {
                    return {...time, end: endTime}
                })
                setWon(true)
        }
    },[matchTiles, difficulty])

    const handleShow = (event: MouseEvent) => {
        const ID: string = event.currentTarget!.getAttribute('id') ?? ''
        const NAME: string = event.currentTarget!.getAttribute('name') ?? ''

        if(!gameActive) {
            let startTime = +new Date()
            setGameActive(true)
            setTime({...time, start: startTime})
        }

        if (selectionArray.length < 1) {
            let arr: SelectionArray[] = [...selectionArray, { name: NAME, id: ID }]
            setSelectionArray(arr)
            let obj = { ...showTiles, [NAME]: true }
            setShowTiles(obj)
        }
        if (selectionArray.length === 1) {
            let arr: SelectionArray[] = [...selectionArray, { name: NAME, id: ID }]
            setSelectionArray(arr)

            let obj = { ...showTiles, [NAME]: true }
            setShowTiles(obj)

            if (arr[0].id === arr[1].id && arr[0].name !== arr[1].name) {
                sleep(1000).then(() => {
                    setMatchTiles({ ...matchTiles, [arr[0].name]: true, [arr[1].name]: true })
                    setSelectionArray([])
                    resetShowTiles()
                }).catch(error => console.error(error))
            } else {
                sleep(1000).then(() => {
                    setSelectionArray([])
                    resetShowTiles()
                }).catch(error => console.error(error))
            }
        }
    }

    const handleDifficulty = (num: string) => {
        if(!gameActive) setDifficulty(num)
    }

    const handleNewGame = () => {
        let arr = shuffleImages(gridTiles[difficulty as keyof {}])

        resetMatchTiles()
        resetShowTiles()
        setWon(false)
        setTime({start: 0, end: 0})
        setSelectionArray([])
        setGameActive(false)
        setGridTiles((prev: GridSizeType) => {
            return {...prev, [difficulty]: arr}
        })
    }

    return (
        <Layout>
            <React.Suspense fallback={<div>Loading...</div>}>
                <MainGrid won={won} time={time} handle={handleShow} match={matchTiles} pairNum={gridTiles[difficulty as keyof {}]} grid={gridTiles[difficulty as keyof {}]} show={showTiles} />
                <GridMenu newGame={handleNewGame} difficulty={difficulty} changeDifficulty={handleDifficulty} />
            </React.Suspense>
        </Layout>
    )
}

export default Index