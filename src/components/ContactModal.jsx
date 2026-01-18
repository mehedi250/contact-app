import React from 'react';
import ViewContact from "./ViewContact";
import EditContactForm from './EditContactForm';

const ContactModal = ({ show, onClose, contact, action }) => {
    if (!show) return null;

    return (
        <>
            <div
                className="modal-backdrop fade show"
                onClick={onClose}
                style={{ opacity: 0.5 }}
            ></div>

            <div
                className="modal d-block"
                tabIndex="-1"
                role="dialog"
            >
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content border-0 shadow-lg rounded-lg overflow-hidden">
                        <div className="modal-header default-header-style">
                            <h5 className="modal-title">
                                {action.edit ? "Edit" : "View"} Contact
                            </h5>

                            <button type="button" className="btn btn-transparent text-light" onClick={onClose}>
                                <i className="fa fa-times"></i>
                            </button>
                        </div>
                      
                        <div className="modal-body px-4 pb-4">
                            {action.edit ? (
                                <EditContactForm onClose={onClose} contact={contact} />
                            ) : (
                                <ViewContact onClose={onClose} contact={contact} />
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactModal;