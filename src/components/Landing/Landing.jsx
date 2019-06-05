import React from 'react';
import Diagram from '../Diagram/Diagram';
import './Landing.scss';


function Landing() {
    return (
        <div className="Landing">
            <figure>
                <Diagram/>
                <figcaption>
                    Some text about diagram...
                </figcaption>
            </figure>
        </div>
    );
}

export default Landing;
