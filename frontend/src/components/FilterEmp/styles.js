import styled from 'styled-components';

export const Container = styled.div`
    width: 15%;
    height: 50px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    background: ${props => props.actived ? '#EE6B26' : '#0000CD'};

    img {
        width: 20px;
        height: 20px;
    }

    span {
        font-weight: bold;
        color: #FFF;
        font-size: 15px;

        align-self: flex-end;
    }

    &:hover{
        background: #EE6B26;
    }
`
