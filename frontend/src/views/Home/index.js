import React, { useState, useEffect, useCallback } from "react";     // Guardo o estado de uma pagina
import { Link, Redirect } from 'react-router-dom';
import * as styl from './styles';
import api from '../../services/api';


// Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterEmp from '../../components/FilterEmp';
import EmpresaMaps from '../../components/EmpresaMaps';
import isConnected from "../../Utils/isConnected";

function Home() {
  const [filtroAtivo, setFiltroAtivo] = useState('all');
  const [empresa, setEmpresa] = useState([]);
  const [redirect, setRedirect] = useState(false);

  async function loadEmpresa() {
    await api.get(`/empresa/filter/${filtroAtivo}/${isConnected}`)
      .then(response => {
        setEmpresa(response.data)
      });
  };


  useEffect(() => {
    if (!isConnected) {
      localStorage.setItem('@grandCharles/user', '1')
      window.location.reload();
    }

    loadEmpresa();

    if (!isConnected) {
      setRedirect(true);
    }
  }, [filtroAtivo])

  return (
    <styl.Container>
      {redirect && <Redirect to="/" />}

      <Header />

      <styl.FilterArea>

        <FilterEmp titulo='Todas' ativo={filtroAtivo === 'all'} onClick={() => setFiltroAtivo('all')} />
        <FilterEmp titulo='Cadastrada Hoje' ativo={filtroAtivo === 'today'} onClick={() => setFiltroAtivo('today')} />
        <FilterEmp titulo='Cadastrada Semana' ativo={filtroAtivo === 'week'} onClick={() => setFiltroAtivo('week')} />
        <FilterEmp titulo='Cadastrada Mês' ativo={filtroAtivo === 'month'} onClick={() => setFiltroAtivo('month')} />
        <FilterEmp titulo='Cadastrada Ano' ativo={filtroAtivo === 'year'} onClick={() => setFiltroAtivo('year')} />

      </styl.FilterArea>

      < styl.Titulo>
        <h3> EMPRESAS</h3>
      </styl.Titulo>

      <styl.Content>

        <styl.ContainerList>

          <table border="1" width="500">
            <thead>
              <tr>
                <th scope="col" width="20%" >
                  Empresas
                </th>
              </tr>
            </thead>


            <tbody>
              {
                empresa.map(emp => (
                  <tr>
                    <td >
                      <Link to={`/empresa/${emp._id}`} >
                        {emp.codigo} - {emp.fantasia}
                      </Link>
                    </td>
                  </tr>
                ))
              }
            </tbody>

          </table>
        </styl.ContainerList>

        <EmpresaMaps empresa={empresa} />
        
      </styl.Content>

      <Footer />

    </styl.Container>
  )
}

export default Home;
