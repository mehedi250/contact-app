import React from 'react'
import CreateContactForm from '../components/CreateContactForm';

function CreateContact() {
    return (

        <div className="row justify-content-md-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header card-title">
                        <strong>Add New Contact</strong>
                    </div>
                    <div className="card-body">
                        <CreateContactForm />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CreateContact;