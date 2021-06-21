import React, { useCallback, useEffect } from 'react';
import { TDirection } from "../../ARSs/snake/types"

import {
    FlexBoxVertical,
    FlexBoxHorisontal,
    ArrowWithDirection
} from "./interfaces";

interface IDirectionControlProp {
    setDirection: (direction: TDirection ) => void
}


export const DirectionControl = ({
    setDirection
}:IDirectionControlProp) => {

    const keyControlHandler = useCallback((event: KeyboardEvent) => {
        const keyName = event.key;
        switch (keyName) {
            case "ArrowDown":
            case  "s": {
                setDirection("DOWN")
                break
            }
            case "ArrowUp":
            case  "w": {
                setDirection("UP")
                break
            }
            case "ArrowLeft":
            case  "a": {
                setDirection("LEFT")
                break
            }
            case "ArrowRight":
            case  "d": {
                setDirection("RIGHT")
                break
            }
        }
    },[setDirection])

    useEffect(()=> {
        document.addEventListener("keydown", keyControlHandler);
        return () => document.removeEventListener("keydown", keyControlHandler)
    },[keyControlHandler]);

   


    return (
        <FlexBoxVertical>
            <FlexBoxHorisontal>
                <ArrowWithDirection 
                    direction={"UP"} 
                    onClick={()=> setDirection("UP")} 
                />
            </FlexBoxHorisontal>
            <FlexBoxHorisontal style={{width: 198}}>
                <ArrowWithDirection 
                    direction={"LEFT"} 
                    onClick={()=> setDirection("LEFT")} 
                />
                <ArrowWithDirection 
                    direction={"RIGHT"} 
                    onClick={()=> setDirection("RIGHT")} 
                />
            </FlexBoxHorisontal>
            <FlexBoxHorisontal>
                <ArrowWithDirection 
                    direction={"DOWN"}  
                    onClick={()=> setDirection("DOWN")}
                />
            </FlexBoxHorisontal>
        </FlexBoxVertical>
    );
}