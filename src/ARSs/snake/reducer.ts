
import {
  SNAKE_SET_LENGTH,
  SNAKE_SET_COORDS,
  SNAKE_ADD_LENGTH,
  SNAKE_STEP,
  SNAKE_CHANGE_DIRECTION,
} from  "./actions"

import { TDirection, Action} from "./types"


interface InitialState {
  length: number;
  coords: Array<Array<number>>,
  direction:  TDirection,
  timeoutId?: number,
}

let initialState: InitialState = {
  length: 0,
  coords: [[0,0]],
  direction: "RIGHT",
}

export const snake = (state = initialState, action: Action) : InitialState => {

  switch (action.type){
    case SNAKE_SET_LENGTH: {
      return {
        ...state,
        length: action.length
      }
    }
    case SNAKE_SET_COORDS: {
      return {
        ...state,
        coords: action.coords
      }
    }
    case SNAKE_ADD_LENGTH: {
      return {
        ...state,
        length: state.length++
      }
    }
    case SNAKE_CHANGE_DIRECTION: {
      return {
        ...state,
        direction: action.direction
      }
    }
    case SNAKE_STEP: {
      return {
        ...state,
        coords: state.coords && state.coords.map((el, i, arr) => {
          if (i === 0){
            let newArr = []
            switch (state.direction){
              case "RIGHT": {
                newArr = [el[0],el[1]+1]
                return newArr
              }
              case "LEFT": {
                newArr = [el[0],el[1]-1]
                return newArr
              }
              case "UP": {
                newArr = [el[0]-1,el[1]]
                return newArr
              }
              case "DOWN": {
                newArr = [el[0]+1,el[1]]
                return newArr
              }
              default: return el
            }
          } else {
            return arr[i-1]
          }          
        })
      }
    }
    default: return state;
  }
}