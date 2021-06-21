import styled from "styled-components";

const colors = ["transparent", "#000000"]

export const  Area = styled.div`
    width: 500px;
    height: 500px;
    background-color: #dbeeae;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    align-content: flex-start;
`;

export const Item = styled.div<{type: number}>`
    width: 5px;     
    height: 5px;
    background-color: ${({type}) => colors[type]};
`;

export const Control = styled.div`
    width: 700px;
    height: 50px;
    top: 10px;
    margin: 0 auto;
    background-color: #604a4a;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;