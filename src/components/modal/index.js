import React, { useEffect, useRef } from 'react';
import UIKit from 'uikit';

const Modal = ({
    id,
    showClose = true,
    title,
    className,
    style,
    footer,
    closeButton,
    children,
    onClose,
    show = false,
}) => {
    const modalRef = useRef();
    const classes = [];
    
    classes.push(className);

    let defaultClose = <button className="uk-modal-close-default" type="button" data-uk-close></button>;
    if (closeButton) {
        defaultClose = closeButton;
    }

    useEffect(() => {
        modalRef.current.addEventListener('hidden',() => onClose())
    }, []);

    useEffect(() => {
        if (show) {
            UIKit.modal(modalRef.current).show();
        } else {
            UIKit.modal(modalRef.current).hide();
        }
    }, [show]);
    
    return (
        <div id={id} ref={modalRef} data-uk-modal className={classes.join(' ')} style={style}>
            <div className="uk-modal-dialog">
                {showClose && defaultClose}
                {title && <div className="uk-modal-header">
                    <h2 className="uk-modal-title">{title}</h2>
                </div>}
                <div className="uk-modal-body">{children}</div>
                {footer && <div className="uk-modal-footer">{footer}</div>}
            </div>
        </div>
    )
}
export default Modal;
