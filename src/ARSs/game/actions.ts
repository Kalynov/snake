import { TTimer } from "../../globalTypes";

export const GAME_PLAY = "GAME_PLAY";
export const GAME_PAUSE = "GAME_PAUSE";
export const GAME_CRASH = "GAME_CRASH"

interface GamePlayAction {
    type: typeof GAME_PLAY,
    timerId: TTimer
}

interface GamePauseAction {
    type: typeof GAME_PLAY,
}

export const gamePlay = (timerId: TTimer): GamePlayAction =>  ({
    type: GAME_PLAY,
    timerId
})


export const gamePause = (): GamePauseAction =>  ({
    type: GAME_PLAY
})