import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';


const AutoDisappearingAlert = (props) => {
    const [show, setShow] = useState(true);
    const delay = props.delay || 4000;

    useEffect(() => {
        const timeout = setTimeout(() => setShow(false), delay);
        return () => clearTimeout(timeout);
    }, [delay])

    return (
        <Alert show={show} variant={props.variant} onClose={() => setShow(false)} dismissible>
            {props.children}
        </Alert>
    );
};

export default AutoDisappearingAlert;