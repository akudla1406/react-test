import React from 'react';
import AccordionInside from '../AccordionInside/AccordionInside'
import './accordion.scss';

const Accordion = ({applications}) => {

    //filter app version not start form 0
    const mature = applications.filter((app) => app.version ? app.version[0] !== "0" : false);
    //filter app version start form 0
    const beta = applications.filter((app) => app.version ? app.version[0] === "0" : false);

    return (
        <div className="accordion">
            <AccordionInside appType={mature} title='Mature Applications' isActive='true'/>
            <AccordionInside appType={beta} title='Beta Applications'/>
        </div>
    );
};

export default Accordion;
