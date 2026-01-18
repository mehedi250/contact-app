import { useContacts } from "../context/ContactContext";
import { ORDER_DEFAULT, ORDER_FILTERS } from "../helper/consent";

const Filter = () => {
  const { Filter, changeFilter } = useContacts();

  return (
    <div className="d-flex align-items-center justify-content-between p-3">
      <div className="fs-2">
        <i className="fa fa-filter text-success"></i> Filter
      </div>
      <div>
        <select
          className="form-select"
          value={Filter}
          onChange={(e) => changeFilter(e.target.value)}
        >
          {Object.keys(ORDER_FILTERS).map((key) => (
            <option key={key} value={key}>
              {ORDER_FILTERS[key]}
            </option>
          ))}
        </select>
      </div>


    </div>
  );
};

export default Filter;
