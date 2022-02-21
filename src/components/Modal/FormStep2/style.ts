import styled from "styled-components";

export const Container = styled.div `
    margin: 4%;
    flex:1;
    .Subtitle{
        font-size: 13px;
        color: #B8B8D4; 
    }
    h1{
        margin: 0;
        padding: 0;
        font-size: 26px;
    }
    hr{
        height: 1px;
        border: 0;
        background-color: #16195C;
    }

    label{
        display: flex;
        align-items: center;
        margin-top: 10px;
        flex:1;
        input{
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #25CD89; 
            border-radius: 10px;
            color: black;
            outline: 0;
            font-size: 16px;
            background-color: transparent;
        }
        p{
            width: 100px;
            margin-top: 0;
            margin-bottom: 0;
            margin-right:10px;
        }
    }
    .Description{
        display: block;
        margin-top: 7px;
        box-sizing: border-box;
        width: 100%;
        padding: 20px 10px;
        border: 2px solid #25CD89; 
        border-radius: 10px;
        color: black;
        outline: 0;
        font-size: 16px;
        background-color: transparent;
    }
    .Finals-Button{
        display: flex;
        flex:1;
        justify-content: center;
        gap: 10px;
    }
    .Save-Button{
        display: flex;
        background-color: #25CD89;
        color: #FFF;
        font-size:14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
    }
    .Cancel-Button{
        display: flex;
        background-color: #25CD89;
        color: #FFF;
        font-size:14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
    }
    .Delete-Button{
        display: flex;
        background-color: #FF0000;
        color: #FFF;
        font-size:14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
    }
`;

