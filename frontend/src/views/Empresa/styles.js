import styled from 'styled-components';

// Recebe uma div de styled
export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Form = styled.div`
    width: 50%;
    margin-bottom: 70px;
`

export const Inputs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px 0;

    display: flex;
    justify-content: space-between;

    span {
        color: #707070;
        margin: 5px 0;
    }

    input  {
        width: 100%;
        font-size: 16px;
        padding: 10 px;
        border: none;
        border-bottom: 1px solid #EE6B26;
    }
   
`


export const Options = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        font-weight: bold;
        font-size: 18px;
        color: #20295f;
        border: none;
        background: none;
        cursor: pointer;
    }

    &:hover{
        opacity: 0.7;
    }

    div {
        display: flex;
        align-items: center;
        color: #EE6B26;
        font-weight: bold;
        font-size: 18px;
    }
`

export const Save = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    button {
        width: 20%;
        background: #EE6B26;
        color: #FFF;
        border: none;
        font-size: 18px;
        font-weight: bold;
        padding: 8px;
        border-radius: 10px;
        cursor: pointer;
    }

    &:hover{
        opacity: 0.7;
    }
`

