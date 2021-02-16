
import {
  SNAKE_SET_LENGTH,
  SNAKE_SET_COORDS,
  SNAKE_ADD_LENGTH,
  SNAKE_STEP,
  SnakeSetLengthType,
  SnakeSetCoordsType,
  SnakeAddLengthType,
  SnakeStepType
} from  "./actions"

type  Action = SnakeSetLengthType | SnakeSetCoordsType | SnakeAddLengthType | SnakeStepType;
type DirectionType = "UP" | "DOWN" | "LEFT" | "RIGHT"


interface InitialState {
  length: number;
  coords: Array<Array<number>> | null,
  direction:  DirectionType
}

let initialState: InitialState = {
  length: 0,
  coords: null,
  direction: "RIGHT"
}

export default  (state = initialState, action: Action) : InitialState => {

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
    case SNAKE_STEP: {
      return {
        ...state,
        
      }
    }
    default: return state;
  }
}