import React, { useEffect, useState } from 'react'
import { useContacts } from '../context/ContactContext';

function EditContactForm({ contact, onClose }) {
    const { updateContact} = useContacts();
  
  const [formData, setFormData] = useState({
    first_name: contact.first_name || "",
    last_name: contact.last_name || "",
    email: contact.email || "",
    phone: contact.phone || "",
    address: contact.address || "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formData.first_name && !formData.last_name && !formData.email && !formData.phone && !formData.address) {
        throw new Error("At least one field is required.");
      }

      setLoading(true);

      await updateContact(contact.id, formData);

      setLoading(false);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {success && (
        <div className="alert alert-success">
          Contact updated successfully!
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12">

            <div className="form-group row mb-2">
              <label className="col-md-3 col-form-label">First Name</label>
              <div className="col-md-9">
                <input
                  type="text"
                  name="first_name"
                  className="form-control"
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group row mb-2">
              <label className="col-md-3 col-form-label">Last Name</label>
              <div className="col-md-9">
                <input
                  type="text"
                  name="last_name"
                  className="form-control"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group row mb-2">
              <label className="col-md-3 col-form-label">Email</label>
              <div className="col-md-9">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group row mb-2">
              <label className="col-md-3 col-form-label">Phone</label>
              <div className="col-md-9">
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group row mb-2">
              <label className="col-md-3 col-form-label">Address</label>
              <div className="col-md-9">
                <textarea
                  name="address"
                  rows="3"
                  className="form-control"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>

            <hr />

            <div className="form-group row mb-0">
              <div className="col-md-9 offset-md-3">
                <button
                  type="submit"
                  className="btn btn-primary mr-2"
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save"}
                </button>
                <button onClick={onClose} className="btn btn-outline-secondary">
                  Cancel
                </button>
              </div>
            </div>

          </div>
        </div>
      </form>
    </>
  );
}

export default EditContactForm