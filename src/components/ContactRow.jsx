import { useContacts } from "../context/ContactContext";

const ContactRow = ({ index, contact }) => {
    const { triggerModal } = useContacts();
  
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{contact.first_name}</td>
      <td>{contact.last_name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td width="150">
        <button className="btn btn-sm btn-circle btn-outline-info mr-1" onClick={() => triggerModal(contact, {view: true})}>
          <i className="fa fa-eye"></i>
        </button>
        <button className="btn btn-sm btn-circle btn-outline-secondary mr-1" onClick={() => triggerModal(contact, {edit: true})}>
          <i className="fa fa-edit"></i>
        </button>
        <button
          className="btn btn-sm btn-circle btn-outline-danger"
           onClick={() => triggerModal(contact, {delete: true})}
        >
          <i className="fa fa-times"></i>
        </button>
      </td>
    </tr>
  );
};

export default ContactRow;
