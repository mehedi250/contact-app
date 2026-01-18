import { useEffect } from "react";
import { useContacts } from "../context/ContactContext";
import ContactRow from "./ContactRow";

const ContactTable = () => {
  const { contacts, loading, fetchContacts } = useContacts();

  useEffect(() => {
    fetchContacts();
  }, []);


  const renderBody = () => {
    if (loading) {
      return (
        <tr>
          <td colSpan="6" className="text-center">
            Loading...
          </td>
        </tr>
      );
    }

    if (!contacts.length) {
      return (
        <tr>
          <td colSpan="6" className="text-center">
            No contacts found.
          </td>
        </tr>
      );
    }

    return contacts.map((contact, index) => (
      <ContactRow
        key={contact.id}
        index={index}
        contact={contact}
      />
    ));
  };

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>{renderBody()}</tbody>
    </table>
  );
};

export default ContactTable;
