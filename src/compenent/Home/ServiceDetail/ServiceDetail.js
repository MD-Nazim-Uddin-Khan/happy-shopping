import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServiceDetail = ({service}) => {
    return (
        <div style={{width: '200px'}} className="col-md-2 text-center box m-2 ">
            <span> <FontAwesomeIcon className="icon" icon={service.icon}></FontAwesomeIcon> </span>
            <h5 className="mt-2 mb-2">{service.name}</h5>
            <p className="text-secondary"> {service.description} </p>
        </div>
    );
};

export default ServiceDetail;