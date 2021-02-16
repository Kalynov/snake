
export const AREA_SET_SIZE = "AREA_SET_SIZE"

interface Size {
    width: number;
    height: number
}

interface SetSizeAction {
    type: typeof AREA_SET_SIZE,
    size: Size
}

export const setSize = (size :Size): SetSizeAction =>  ({
    type: AREA_SET_SIZE,
    size
})