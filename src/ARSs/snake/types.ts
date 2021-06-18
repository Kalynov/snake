import {
    SNAKE_SET_LENGTH,
    SNAKE_SET_COORDS,
    SNAKE_ADD_LENGTH,
    SNAKE_STEP,
    SNAKE_CHANGE_DIRECTION,
    ISnakeSetLength,
    ISnakeSetCoords,
    ISnakeAddLength,
    ISnakeStep,
    ISnakeChangeDirection
  } from  "./actions"

export type  Action = ISnakeSetLength | ISnakeSetCoords | ISnakeAddLength | ISnakeStep | ISnakeChangeDirection | ISnakeSetCoords;
export type TDirection = "UP" | "DOWN" | "LEFT" | "RIGHT"