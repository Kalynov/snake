import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from "../../ARSs/reducers";
import {snakeSetLength, snakeSetCoords, snakeStep, snakeChangeDirection} from "../../ARSs/snake/actions";
import { gamePlay, gamePause } from "../../ARSs/game/actions";
import { Area, Control } from "./interfaces";
import { DirectionControl } from "../DirectionControl";
import AreaItem from "./AreaItem";
import {
  setSize
} from "../../ARSs/area/actions";
import { FlexBoxHorisontal } from "../DirectionControl/interfaces";
import { TDirection } from "../../ARSs/snake/types"

/**
 * для обозначения клеток на поле используются следующие элементы
 * type = 0  // пустая клетка
 * type = 1  // часть змеи
 * type = 2  // еда для змеи
 * 
 */


export const GameArea = () => {
  const area = useSelector((state: StoreType) => state.area)
  const snake = useSelector((state: StoreType) => state.snake)
  const timerId = useSelector((state: StoreType) => state.game?.timerId)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setSize({
      width: 100,
      height: 100,
    }))
    dispatch(snakeSetLength(3));
    dispatch(snakeSetCoords([[49,50],[49,49],[49,48],[48,48],[47,48],[46,48],[45,48]]))
  },[])

  const grid = area.area && area.area.map((el,i) => {
    return el.map((element, j) => {
      let type = 0
      snake.coords && snake.coords.forEach((coordinate) => {
        if (coordinate[0] === i && coordinate[1] === j)
          type = 1;
      })
      return <AreaItem key={`${i},${j}`} itemType={type}></AreaItem>
    }) 
  })

  const step = () => {
    let selfCross = false
    const snakeBodyCoords = snake.coords.slice(1)
    // snake.coords.forEach(el => {
    //   if(el[0] + 1)
    // })
    if (snake.coords[0].includes(0) ||
      snake.coords[0].includes(99)
    ) {
      pause()
    } else {
      dispatch(snakeStep())
    }    
  } 

  const start = () => {
    dispatch(gamePlay(setInterval(step, 500)));
  }

  const pause = () => {
    if (timerId){
      clearInterval(timerId);
      dispatch(gamePause());
    }
  }

  const setDirectionSnake = (direction: TDirection) => {
    dispatch(snakeChangeDirection(direction))
  }

  return (
    <Fragment>
      <Control>
        <button onClick={start}>Start</button>
        <button>100X100</button>
        <button>50X50</button>
        <button onClick = {pause}>Pause</button>
        <button onClick = {step}>Step</button>
      </Control>
      <FlexBoxHorisontal>
        <Area>
          {grid}
        </Area>
        <DirectionControl setDirection={setDirectionSnake}/>
      </FlexBoxHorisontal>
      
    </Fragment>

  );
}


export default GameArea;