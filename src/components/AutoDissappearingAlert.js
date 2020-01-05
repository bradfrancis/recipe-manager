import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';


const AutoDisappearingAlert = (props) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        setTimeout(() => setShow(false), 4000);
    }, [])

    return (
        <Alert show={show} variant={props.variant} onClose={() => setShow(false)} dismissible>
            {props.children}
        </Alert>
    );
};

export default AutoDisappearingAlert;