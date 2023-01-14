import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 60px;
    background: #20295F;
    display: flex;
    border-bottom: 4px solid #EE6B26;
`

export const LeftSide = styled.div`
    width: 50%;
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 5px;

    img {
        width: 12%;
        height: 36px;
    }
`

export const RightSide = styled.div`
    width: 50%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    a, button    {
        color: #FFF;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;
    }

    & :hover {
        color: #EE6B26;
    }

    #idNotificacao {
        img {
            width: 35px;
            height: 35px;
        }

        span {
            background: #FFF;
            color: black;
            padding: 1px 4px;
            border-radius: 50%;
            position: relative;
            top: -20px;
            right: 15px;
            font-size: 12px;
        }

        & :hover {
            opacity: 0.5;
        }
    }

    .dividir::after {
        content: "|";
        margin: 0 10px;
        color: #FFF;
    }

    #idSair {
        button {
            cursor: pointer;
        }

        img {
            width: 30px;
            height: 30px;
        }

        & :hover {
            opacity: 0.5;
        }
    }
`
