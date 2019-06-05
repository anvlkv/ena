import React from 'react';
// import logo from './assets/images/logo.svg';
import './Diagram.scss';
import diagram from '../../assets/images/diagram.svg';


function Diagram() {
    return (
        <div className="Diagram">
            <img src={diagram} className="diagram" alt="ENA diagram"/>
        </div>
    );
}

export default Diagram;
