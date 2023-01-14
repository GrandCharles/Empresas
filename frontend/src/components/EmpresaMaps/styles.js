import styled from 'styled-components';

export const Container = styled.div`
    width: 48%;
    height: 450px;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 20px;   
    cursor: pointer;
    transition: all 0.3s ease;

    
    body {
        padding: 0;
        margin: 0;
      }
      
      .App {
        height: 100vh;
        width: 100%;
      }
      
      .circle {
        background-color: #d83b01;
        border-radius: 50%;
        color: #fff;
        height: 2.5em;
        position: relative;
        width: 2.5em;
      
        border: 1px solid transparent;
      }
      
      .circleText {
        text-align: center;
        height: 50%;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
      }
      
      .hover {
        background-color: #0078d4;
      }
      
`



export const BottonCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    strong {
        color: #EE6B26;
        font-weight: bold;
        font-size: 12px;
    }

    span {
        color: #707070;
        font-weight: bold;
        font-size: 12px;
    }
`

