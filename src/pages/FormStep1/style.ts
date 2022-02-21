import styled from "styled-components";

export const Container = styled.div `
    display:grid;
    grid-template-columns: 80% 20%;
    h1{
        font-size: 28px;
    }
`;

export const Register = styled.div `
 
    justify-content: right;

    .modalButton{
        background-color: #6B8F71;
        color: #fff;
        font-size:14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
    }
`;
