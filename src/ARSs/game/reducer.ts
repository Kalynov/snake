
import { GAME_PLAY, GAME_PAUSE, GAME_CRASH } from  "./actions";
import { TTimer } from "../../globalTypes";


interface InitialState {
  play: boolean;
  pause: boolean;
  score: number;
  speed: number;
  timerId?: TTimer;
  crash: boolean;
  classic: boolean;
}

let initialState: InitialState = {
    play: false,
    pause: false,
    score: 0,
    speed: 1,
    crash: false,
    classic: false
  }

export const game =  (state = initialState, action: any) : InitialState => {
    switch (action.type){
      case GAME_PLAY: {
        return {
          ...state,
          play: true,
          timerId: action.timerId
        }
      }
      case GAME_PAUSE: {
        return {
          ...state,
          play: true,
          timerId: undefined
        }
      }
      case GAME_CRASH: {
        return {
          ...state,
          play: true,
          timerId: undefined
        }
      }
      default: return state;
    }

  
}