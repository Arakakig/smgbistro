import styled from "styled-components";

export const Container = styled.div` 
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    color: #1D1E18;
    background-color: rgba(0,0,0,0.4);
    display: flex;
    justify-content:center;
    align-items: center;

    .Modal{
        background-color: #f5f5f5;
        width: 80%;
        height: 80%;
        color: black;
        justify-content:center;
        display: flex;
        .closeModal{
            justify-content: center;
            align-items:center;
            background-color: transparent;
            width: 32px;
            height: 32px;
            color:black;
            cursor: pointer;
            display: flex;
            right: 11%;
            top: 11%;
            position: absolute;
        }
    }


`; 

