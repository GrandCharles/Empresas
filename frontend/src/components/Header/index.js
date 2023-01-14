import React, { useState, useEffect } from 'react';
import * as styl from './styles';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo@2x.png';
import logout from '../../assets/log-out.png';

function Header() {
  const [getCtrlLate, setCtrlLate] = useState();

  async function sair() {
    localStorage.removeItem('@grandCharles/user');
    window.location.reload();
  }


  useEffect(() => {
    
  }, []);


  return (
    <styl.Container>

      <styl.LeftSide>
        <img src={logo} alt='Logo' />
      </styl.LeftSide>

      <styl.RightSide>
        <Link to="/">INÍCIO</Link>

        <span className="dividir" />

        <Link to="/empresa">NOVA EMPRESA</Link>

        <span className="dividir" />

        <button id="idSair" title='Sair' onClick={sair} >
          <img src={logout} alt='Sair' />
        </button>

      </styl.RightSide>

    </styl.Container>

  )
}

export default Header;
