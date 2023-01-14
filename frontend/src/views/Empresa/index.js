import React, { useState, useEffect } from "react";     // Guardo o estado de uma pagina
import { Redirect } from 'react-router-dom';
import { format } from 'date-fns'
import api from '../../services/api';
import isConnected from "../../Utils/isConnected";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import * as styl from './styles';


function Empresa({ match }) {
    const [redirect, setRedirect] = useState(false);
    const [id, setId] = useState();
    const [dados, setDados] = useState(null);

    const [codigo, setCodigo] = useState();
    const [tipo, setTipo] = useState('J');
    const [razaoSocial, setRazaoSocial] = useState();
    const [fantasia, setFantasia] = useState();
    const [data, setData] = useState();
    const [hora, setHora] = useState();
    const [ativa, setAtiva] = useState(true);
    const [pontos, setPontos] = useState(1);
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();


    async function CarregarEmpresa() {
        await api.get(`/empresa/${match.params.id}`)
            .then(response => {
                setDados(response.data);

                setId(response.data._id);
                setCodigo(response.data.codigo);
                setTipo(response.data.tipo);
                setRazaoSocial(response.data.razaoSocial);
                setFantasia(response.data.fantasia);
                setData(format(new Date(response.data.dataHora), 'yyyy-MM-dd'));
                setHora(format(new Date(response.data.dataHora), 'HH:mm'));
                setAtiva(response.data.ativa);
                setPontos(response.data.pontos);
                setLatitude(response.data.latitude);
                setLongitude(response.data.longitude);
            })
    };


    async function salvar() {
        if (!codigo)
            return alert("Código é obrigatório")
        else if (!tipo)
            return alert("Tipo é obrigatório")
        else if (!razaoSocial)
            return alert("Razão Social é obrigatório")
        else if (!fantasia)
            return alert("Nome Fantasia é obrigatório")
        else if (!pontos)
            return alert("Pontuação é obrigatório")
        else if (!latitude)
            return alert("Latitude é obrigatório")
            else if (!longitude)
            return alert("Longitude é obrigatório")
        else if (!data)
            return alert("Data da empresa é obrigatório")

        if (match.params.id) {
            await api.put(`/empresa/${match.params.id}`, {
                codigo,
                razaoSocial,
                fantasia,
                dataHora: `${data}T${hora}:00.000`,
                ativa,
                pontos,
                latitude,
                longitude
            })
                .then(() => { setRedirect(true) })

        } else {

            const objRequest = {
                user: isConnected.toString(),
                codigo,
                razaoSocial,
                fantasia,
                dataHora: `${data}T${hora}:00.000`,
                latitude,
                longitude,
                pontos,
            };

            await api.post('/empresa', objRequest)
                .then(() => setRedirect(true))
                .catch(response => { alert(response.data.error) })
        }
    };

    async function Remover() {
        const resp = window.confirm('Deseja Excuir a empresa?');

        if (resp == true) {
            await api.delete(`/empresa/${match.params.id}`)
                .then(() => setRedirect(true));
        }
    };

    useEffect(() => {
        if (!isConnected) {
            setRedirect(true);
        }

        CarregarEmpresa();
    }, [])

    return (
        <styl.Container>
            {redirect && <Redirect to="/" />}

            <Header />

            <styl.Form>
                <styl.Inputs>
                    <span>Código:</span>
                    <input
                        type='text'
                        placeholder='Código da Empresa'
                        onChange={ev => setCodigo(ev.target.value)}
                        value={codigo}
                        readOnly={id}
                    />
                </styl.Inputs>

                <styl.Inputs>
                    <span>Tipo:</span>
                    <input type='text'
                        onChange={ev => setTipo(ev.target.value)}
                        value={tipo}
                        readOnly={true}
                    />
                </styl.Inputs>

                <styl.Inputs>
                    <span>Razão Social:</span>
                    <input type='text'
                        onChange={ev => setRazaoSocial(ev.target.value)}
                        value={razaoSocial} />
                </styl.Inputs>

                <styl.Inputs>
                    <span>Nome Fantasia:</span>
                    <input type='text'
                        onChange={ev => setFantasia(ev.target.value)}
                        value={fantasia} />
                </styl.Inputs>

                <styl.Inputs>
                    <span>Pontos:</span>
                    <input type='number'
                        onChange={ev => setPontos(ev.target.value)}
                        value={pontos} />
                </styl.Inputs>

                <styl.Inputs>
                    <span>Data:</span>
                    <input type='date'
                        placeholder='Data da Empresa'
                        onChange={ev => setData(ev.target.value)}
                        value={data} />

                </styl.Inputs>

                <styl.Inputs>
                    <span>Hora:</span>
                    <input type='time'
                        placeholder='Hora'
                        onChange={ev => setHora(ev.target.value)}
                        value={hora} />
                </styl.Inputs>

                <styl.Inputs>
                    <span>Latitude:</span>
                    <input type='text'
                        onChange={ev => setLatitude(ev.target.value)}
                        value={latitude}
                    />

                    <span>Longitude:</span>
                    <input type='text'
                        onChange={ev => setLongitude(ev.target.value)}
                        value={longitude}
                    />
                </styl.Inputs>

                <styl.Options>
                    <div>
                        <input type="checkbox"
                            checked={ativa}
                            onChange={() => setAtiva(ativa)}
                        />
                        <span>Ativa</span>
                    </div>

                </styl.Options>

                <styl.Save>
                    <button type="button" onClick={salvar}>
                        Salvar
                    </button>

                    {match.params.id &&
                        <button type="button" onClick={Remover}>
                            Excluir
                        </button>
                    }

                </styl.Save>

            </styl.Form>

            <Footer />

        </styl.Container>
    )
}

export default Empresa;
