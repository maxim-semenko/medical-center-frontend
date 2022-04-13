import React from 'react';
import {Alert} from "react-bootstrap";
import CSSTransition from "react-transition-group/CSSTransition";

function AlertCSSTransition(props) {
    return (
        <div>
            <CSSTransition in={props.in}
                           classNames="my-node"
                           timeout={500}
                           unmountOnExit>
                <Alert variant={props.variant} onClose={props.close} dismissible>
                    <Alert.Heading>{props.textHeader}</Alert.Heading>
                    <p>{props.text}</p>
                </Alert>
            </CSSTransition>
        </div>
    );
}

export default AlertCSSTransition;
