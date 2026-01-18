import React from 'react';

const DeleteConfirmModal = ({ onDelete, onCancel }) => {
  return (
    <>
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
          <div className="modal-content border-0 shadow-lg rounded-lg">
            
            <div className="modal-body text-center p-4">
              {/* Refined Warning Icon */}
              <div className="mb-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="64" 
                  height="64" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-danger"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>

              <h5 className="font-weight-bold mb-2">Confirm Delete</h5>
              <p className="text-secondary small mb-4">
                Are you sure you want to delete this contact? This action cannot be undone.
              </p>

              <div className="d-flex flex-column flex-sm-row justify-content-center">
                <button
                  type="button"
                  className="btn btn-outline-secondary border-0 mr-sm-2 mb-2 mb-sm-0"
                  onClick={onCancel}
                >
                  Keep it
                </button>
                <button
                  type="button"
                  className="btn btn-danger px-4 font-weight-bold shadow-sm"
                  onClick={onDelete}
                >
                  Yes, Delete
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default DeleteConfirmModal;