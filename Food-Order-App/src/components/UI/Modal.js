import React from 'react'
import classes from "./Modal.module.css"
import ReactDOM from "react-dom";

export const Backdrop = (props) => {
    return (
        <div className={classes.backdrop}/>
    )
}

export const ModalOverlay = (props) =>{
    return (
        <div className={classes.modal}>
            {props.children}
        </div>
    )
}
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop/> , portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </React.Fragment>
    )
}

export default Modal
