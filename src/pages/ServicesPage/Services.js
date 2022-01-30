import React from "react";
import { InfoSection, Pricing } from '../../components';
import { ServiceObjOne, ServiceObjTwo } from './Data';

let Services = () => {
    return (
        <div>
            <Pricing />
            <InfoSection {...ServiceObjOne} />
            <InfoSection {...ServiceObjTwo} />
        </div>
    );
};

export default Services;