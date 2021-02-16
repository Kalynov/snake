import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import {StoreType} from "../../ARSs/reducers"
import {Wrapper, Control} from "./interfaces";
import Snake from "../Snake"


function Area() {
    

    const area = useSelector((state: StoreType) => state.area)
    console.log(area)

  return (
      <Fragment>
          <Control>
            <button>Start</button>
            <button>100X100</button>
            <button>50X50</button>
            <button>Pause</button>
        </Control>
          <Wrapper>
              {new Array(200).fill(0).map(el => {
                  return <Snake></Snake>
              })}
        </Wrapper>
      </Fragment>
    
  );
}


export default Area;