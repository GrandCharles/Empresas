import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
`

export const FilterArea= styled.div`
    width: 100%;
    margin-top: 10px;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    button {
        background: none;
        border: none;
    }
`

export const ContainerList = styled.div`
    width: 45%;
    height: 450px;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
    border-radius: 10px;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    margin: 20px;   
    cursor: pointer;
    transition: all 0.3s ease;
    

    
    table { 
        width:98%;
        height: 40%;
        margin-top: 10px;
        margin-left: 6px;

     }

     table {
        border:1px solid blue;
        border-collapse:collapse;
        padding:25px

        background-color: #B0C4DE;
        color: #0000FF;

        font-size: 0.8rem;
    }
    
    th {
        border:1px solid blue;
        border-collapse:collapse;
        padding:5px
        font-weight:bold
        
    }

    tr {
        border:1px solid blue;
        border-collapse:collapse;
        padding:5px
    }

    
    td {
        border:1px solid blue;
        border-collapse:collapse;
        padding:5px
        text-align: left;

        background-color: #00FF7F;
        font-weight:bold
        
    }
     
    @media (max-width: 600px) { table caption{display:none; }}

`


export const Content = styled.div`
    width: 100%;
   
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    a {
        text-decoration: none;
        color: #000;
    }
`

export const Titulo = styled.div`
    width: 100%;
    border-bottom: 2px solid #20295F;
    text-align: center;
    margin-bottom: 10px;

    display: flex;
    justify-content: center;

    h3 {
        color: #20295F;
        position: relative;
        margin-bottom: -5px;
        top: 5px;
        background: #FFF;
        padding: 0 10px;
    }
`
   

