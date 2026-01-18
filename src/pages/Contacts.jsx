import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import ContactTable from "../components/ContactTable";
import ContactModal from "../components/ContactModal";
import { useContacts } from "../context/ContactContext";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import { defaultModalAction } from "../helper/consent";

const Contacts = () => {
  const { modalAction, selectedContact, triggerModal, deleteContact } = useContacts();

  return (
    <>
      <div className="card">
        <div className="card-header card-title">
          <SearchBar />
        </div>

        <Filter />

        <div className="card-body">
          <ContactTable />
        </div>
      </div>


        <ContactModal
          show={(modalAction.view || modalAction.edit) && selectedContact}
          onClose={(contact = null, action = defaultModalAction) => triggerModal(contact, action)}
          contact={selectedContact}
          action={modalAction}
        />

        {
          modalAction.delete && selectedContact && 
          <DeleteConfirmModal 
            onDelete={()=>{deleteContact(selectedContact.id)}} 
            onCancel={() => {triggerModal(selectedContact, {delete: false})}}
          />
        }

        
    </>
  );
};

export default Contacts;
