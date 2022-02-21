import styled from "styled-components";

export const Container = styled.div `
    margin: 30px 10px;
    cursor: pointer;
    a{
        padding: 10px;
        display: flex;
        justify-content:center;
        align-items: center;
        text-decoration: none;
        color: black;
        border: 1px solid #1D1E18;
    }

    &&:hover{
        background-color: #DCDCDC;
    }
    &&:active{
        background-color: #DCDCDC;
        color: #1D1E18;
     }
    
`;


export const Title = styled.div ` 
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size:15px;
    `;





