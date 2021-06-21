import {createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { area } from "./area/reducer"
import { snake } from "./snake/reducer"
import { game } from "./game/reducer"

let reducers = combineReducers({
    area,
    snake,
    game
});

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers,
compose(composeEnhancers && composeEnhancers(), applyMiddleware(thunkMiddleware))
);

export default store; 

export type StoreType = ReturnType<typeof reducers>