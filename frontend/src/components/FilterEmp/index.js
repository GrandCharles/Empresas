import React from 'react';
import * as styl from './styles';

import filtro from "../../assets/filter.png"

function FilterEmp({titulo, ativo, onClick}) {
    return (
        <styl.Container actived={ativo} onClick={onClick}>

            <img src={filtro} alt="Filtro" />
            <span>{titulo}</span>
            
        </styl.Container>   
    )
}

export default FilterEmp;