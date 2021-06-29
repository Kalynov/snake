
import { gamePlay } from "./actions";
import { game } from "./reducer";
import { InitialState } from "./types";

it('game should be started', () =>{
    // 1. test data
    let action = gamePlay(setInterval(()=> null,100))
    let initialState: InitialState = {
        play: false,
        pause: false,
        score: 0,
        speed: 1,
        crash: false,
        classic: false
      }

    // 2. action
    let newState  = game(initialState,action)
    // 3. expectation 
    expect(newState.play).toBe(true)
    expect(newState.timerId).not.toBe(undefined);

})
