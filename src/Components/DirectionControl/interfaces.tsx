import styled from "styled-components";

export const FlexBoxVertical = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FlexBoxHorisontal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


interface Props {
    direction: string;
  }

export const Arrow = styled.div<Props>`
    & {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        padding: 0.5em;
        background-color: #f8d05d;
        position: relative;
    }
    &:after {
        border-right: solid 20px transparent;
        border-left: solid 20px transparent;
        border-top: solid 20px #000000;
        transform: translateX(-50%) translateY(-50%);
        position: absolute;
        z-index: 1;
        content: "";
        top: 50%;
        left: 50%;
    }
`;

export const ArrowWithDirection = styled(Arrow)<Props>`
    transform: ${(p) => {
        switch (p.direction) {
            case "UP" :
                return 'rotate(180deg)';
            case "DOWN" :
                return 'rotate(0deg)';
            case "LEFT" :
                return 'rotate(90deg)';
            case "RIGHT" :
                return 'rotate(270deg)'
        }
    }};
`