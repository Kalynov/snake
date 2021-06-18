
import {AREA_SET_SIZE} from  "./actions"


interface InitialState {
  width: number | null;
  height: number| null;
  area: Array<Array<number>> | null
}

let initialState: InitialState = {
    width: null,
    height: null,
    area: null
  }

export default  (state = initialState, action: any) : InitialState => {

    switch (action.type){
       case AREA_SET_SIZE: {
        return {
          ...state,
          ...action.size,
          area: new Array(action.size.height).fill(new Array(action.size.width).fill(0))
        }
    }
      default: return state;
    }

  
}