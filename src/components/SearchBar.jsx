import { Link } from "react-router";
import { useContacts } from "../context/ContactContext";

const SearchBar = () => {
    const { searchTerm, setSearchTerm, searchContacts } = useContacts();

    return (
        <div className="d-flex align-items-center justify-content-between">
            <h2>All Contacts</h2>

            <div className="input-group w-50">
                <input
                    type="text"
                    className="form-control"
                    placeholder="search contact"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-success" onClick={searchContacts}>Search</button>
            </div>

            <div>
                <Link className="btn btn-success"  to="/create">
                    <i className="fa fa-plus-circle"></i> Add New
                </Link>
            </div>
        </div>
    );
};

export default SearchBar;