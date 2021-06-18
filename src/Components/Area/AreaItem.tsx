import React, { memo } from 'react';

import { Item } from "./interfaces";

const AreaItem = ({
    key ="1", 
    itemType=0
}) => (
    <Item  key={key} type={itemType} />
)

  


export default memo(AreaItem);