import React from 'react'

function ViewContact({ contact, onClose }) {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="form-group row">
                    <label className="col-md-3 col-form-label">First Name</label>
                    <div className="col-md-9">
                        <p className="form-control-plaintext text-muted">{contact.first_name}</p>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Last Name</label>
                    <div className="col-md-9">
                        <p className="form-control-plaintext text-muted">{contact.last_name}</p>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Email</label>
                    <div className="col-md-9">
                        <p className="form-control-plaintext text-muted">{contact.email}</p>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Phone</label>
                    <div className="col-md-9">
                        <p className="form-control-plaintext text-muted">{contact.phone}</p>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Address</label>
                    <div className="col-md-9">
                        <p className="form-control-plaintext text-muted">{contact.address}</p>
                    </div>
                </div>
                <hr />
                <div className="form-group row mb-0">
                    <div className="col-md-9 offset-md-3">
                        <button className="btn btn-info mr-1" onClick={() => onClose(contact, {view: false, edit: true}) }>Edit</button>
                        <button className="btn btn-outline-danger mr-1" onClick={() => onClose(contact, {delete: true}) }>Delete</button>
                        <button className="btn btn-outline-secondary" onClick={() =>onClose()}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewContact