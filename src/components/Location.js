import React  from 'react';
import Imagen from '../assets/ubicacion.png'

function Location() {
    return (
        <div class="about">
            <div>
            <p className='label'>Dirección</p>
            <p className='data'>Juan Aldama 4703, Col Arquitectos</p>
            <p className='data'>Chihuahua, Chih</p>
            <p className='label'>Teléfonos</p>
            <p className='data'>614-495-9010</p>
            <p className='data'>614-249-9440</p>
            <p className='label'>Correo Electrónico</p>
            <a href='mailto:contacto@lasurabanas.mx'><p className='data'>contacto@lasurabanas.mx</p></a>
        </div>
        <img className="img-contact" src={Imagen} alt="Ubicacion"/>
        </div>
    )
}

export {Location};
