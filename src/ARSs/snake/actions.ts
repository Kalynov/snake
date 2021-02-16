
export const SNAKE_SET_LENGTH = "SNAKE_SET_LENGTH"
export const SNAKE_SET_COORDS = "SNAKE_SET_COORDS"
export const SNAKE_ADD_LENGTH = "SNAKE_ADD_LENGTH"
export const SNAKE_STEP = "SNAKE_STEP"


export interface SnakeSetLengthType {
    type: typeof SNAKE_SET_LENGTH,
    length: number
}

export const snakeSetLength = (length: number): SnakeSetLengthType =>  ({
    type: SNAKE_SET_LENGTH,
    length
})

export interface SnakeSetCoordsType {
    type: typeof SNAKE_SET_COORDS,
    coords: Array<Array<number>>
}

export const snakeSetCoords = (coords: Array<Array<number>>): SnakeSetCoordsType =>  ({
    type: SNAKE_SET_COORDS,
    coords 
})

export interface SnakeAddLengthType {
    type: typeof SNAKE_ADD_LENGTH,
}

export const snakeAddLength = (length: number): SnakeAddLengthType =>  ({
    type: SNAKE_ADD_LENGTH,
})

export interface SnakeStepType {
    type: typeof SNAKE_STEP,
}

export const snakeStep = (length: number): SnakeStepType =>  ({
    type: SNAKE_STEP,
})