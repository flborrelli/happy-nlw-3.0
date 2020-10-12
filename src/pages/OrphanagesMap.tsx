import React from 'react';

import mapMarkerTag from '../assets/2.svg';

import { Link } from 'react-router-dom';

import { FiPlus } from 'react-icons/fi';

import '../styles/pages/orphanages-map.css';

const OrphanagesMap = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerTag} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>São Paulo</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <div></div>
      <Link to='' className='create-orphanage'>
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  )
}

export default OrphanagesMap;
