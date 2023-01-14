import React, { useCallback } from 'react';
import GoogleMapReact from 'google-map-react';
import MyMarker from '../../components/EmpresaMaps/myMaker'

import * as styl from './styles';


const distanceToMouse = (pt, mp) => {
    if (pt && mp) {
        // return distance between the marker and mouse pointer
        return Math.sqrt(
            (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
        );
    }
};

function EmpresaMaps({ empresa }) {

    const center = { lat: -16.673543, lng: -49.288562 }
    const zoom = 3;

    const dadosEmpresa = empresa.map((emp) => (
        {
            id: Number(emp.codigo),
            title: emp.razaoSocial + '\n ' +  '\n '  + emp.pontos + ' Pontos',
            pontos: emp.pontos,
            lat: emp.latitude,
            lng: emp.longitude,
        }
    ));

   
    return (

        <styl.Container >

            <GoogleMapReact
                bootstrapURLKeys={{key: "AIzaSyCfJ810LWN4I8s6ZJGk9oSmrh1fFrkrRXI",}}
                defaultCenter={center}
                defaultZoom={zoom}
                distanceToMouse={distanceToMouse}
            >
                {dadosEmpresa.map(({ id, title, pontos, lat, lng }) => {
                    return (
                        <MyMarker key={id} lat={lat} lng={lng} text={pontos} tooltip={title} />
                    );
                })}
            </GoogleMapReact>

        </styl.Container>

    )
}

export default EmpresaMaps;