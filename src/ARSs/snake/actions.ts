
import {TDirection} from "./types"
export const SNAKE_SET_LENGTH = "SNAKE_SET_LENGTH"
export const SNAKE_SET_COORDS = "SNAKE_SET_COORDS"
export const SNAKE_ADD_LENGTH = "SNAKE_ADD_LENGTH"
export const SNAKE_STEP = "SNAKE_STEP"
export const SNAKE_CHANGE_DIRECTION = "SNAKE_CHANGE_DIRECTION"


export interface ISnakeSetLength {
    type: typeof SNAKE_SET_LENGTH,
    length: number
}

export const snakeSetLength = (length: number): ISnakeSetLength =>  ({
    type: SNAKE_SET_LENGTH,
    length
})

export interface ISnakeSetCoords {
    type: typeof SNAKE_SET_COORDS,
    coords: Array<Array<number>>
}

export const snakeSetCoords = (coords: Array<Array<number>>): ISnakeSetCoords =>  ({
    type: SNAKE_SET_COORDS,
    coords 
})

export interface ISnakeAddLength {
    type: typeof SNAKE_ADD_LENGTH,
}

export const snakeAddLength = (length: number): ISnakeAddLength =>  ({
    type: SNAKE_ADD_LENGTH,
})

export interface ISnakeStep {
    type: typeof SNAKE_STEP,
}

export const snakeStep = (): ISnakeStep =>  ({
    type: SNAKE_STEP,
})

export interface ISnakeChangeDirection {
    type: typeof SNAKE_CHANGE_DIRECTION,
    direction: TDirection
}

export const snakeChangeDirection = (direction: TDirection): ISnakeChangeDirection =>  ({
    type: SNAKE_CHANGE_DIRECTION,
    direction
})