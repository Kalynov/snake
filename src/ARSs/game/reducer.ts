
import { GAME_PLAY, GAME_PAUSE, GAME_CRASH } from  "./actions";
import { InitialState } from "./types";

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
          pause: false,
          timerId: action.timerId
        }
      }
      case GAME_PAUSE: {
        return {
          ...state,
          play: false,
          pause: true,  
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