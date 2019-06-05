import React from 'react';
import Diagram from '../Diagram/Diagram';
import './Landing.scss';


function Landing() {
    return (
        <div className="Landing">
            <figure>
                <Diagram/>
                <figcaption>
                    <h3>ENA - Experimental Network Autonomy</h3>
                    <p>
                    ENA is an open platform for those who want to find the power to organize our lives sustainably. On this website, you can find DIY designs of different production systems that can provide you and your employees or fellow residents with the essential quality of life, such as good food, clean water, pure air, shelter, cooling, and heat.
                    </p>
                    <p>
                    ENA is about preparing for the sustainable future, about future-proofing of yourself and your fellow residents of this planet.
                    </p>
                </figcaption>
            </figure>
        </div>
    );
}

export default Landing;
