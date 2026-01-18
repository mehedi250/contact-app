import { createContext, useContext, useState } from "react";
import { API_BASE_URL, defaultModalAction, ORDER_DEFAULT, ORDER_FIRST_NAME_ASC, ORDER_LAST_NAME_ASC, ORDER_OLDEST_FIRST } from "../helper/consent";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("default");
    const [loading, setLoading] = useState(false);
    const [modalAction, setModalAction] = useState(defaultModalAction);

    const fetchContacts = async (search = "", orderFilter = ORDER_DEFAULT) => {
        setLoading(true);

        let query = [];
        if (search) query.push(`q=${encodeURIComponent(search)}`);

        if (orderFilter === ORDER_DEFAULT) {
            query.push(`_sort=id&_order=desc`);

        } else if (orderFilter === ORDER_FIRST_NAME_ASC) query.push("_sort=first_name");
        else if (orderFilter === ORDER_LAST_NAME_ASC) query.push("_sort=last_name");
        else if (orderFilter === ORDER_OLDEST_FIRST) query.push("_sort=id");

        const queryString = query.length ? `?${query.join("&")}` : "";

        try {
            const res = await fetch(`${API_BASE_URL}/contacts${queryString}`);
            const data = await res.json();
            setContacts(data);
        } catch (error) {
            console.error("Fetch failed", error);
        } finally {
            setLoading(false);
        }
    };

    const updateContact = async (id, updatedData) => {
        try {
            const res = await fetch(`${API_BASE_URL}/contacts/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedData),
            });

            if (!res.ok) {
                throw new Error("Failed to update contact");
            }

            const data = await res.json();

            setContacts((prev) =>
                prev.map((item) => (item.id === id ? data : item))
            );

            triggerModal(null, defaultModalAction);
        } catch (error) {
            console.error("Update failed", error);
            throw error;
        }
    };

    const deleteContact = async (id) => {
        await fetch(`${API_BASE_URL}/contacts/${id}`, {
            method: "DELETE",
        });

        setContacts((prev) => prev.filter((item) => item.id !== id));
        triggerModal(null, defaultModalAction);
    };

    const changeFilter = (filter) => {
        setFilter(filter);
        fetchContacts(searchTerm, filter);
    };

    const searchContacts = () => {
        fetchContacts(searchTerm, filter);
    };

    const triggerModal = (selectedItem, action) => {
        setModalAction((prev) => ({
            ...prev,
            ...action,
        }));

        if (selectedItem) {
            setSelectedContact(selectedItem);
        }

        if (selectedItem?.id !== selectedContact?.id) {
            setSelectedContact(selectedItem);
        }

    }

    return (
        <ContactContext.Provider
            value={{
                contacts,
                loading,
                selectedContact,
                searchTerm,
                modalAction,
                fetchContacts,
                updateContact,
                deleteContact,
                changeFilter,
                searchContacts,
                setSearchTerm,
                triggerModal
            }}
        >
            {children}
        </ContactContext.Provider>
    );
};

// Custom hook
export const useContacts = () => useContext(ContactContext);
