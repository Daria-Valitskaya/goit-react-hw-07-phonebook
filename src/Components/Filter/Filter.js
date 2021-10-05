import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { onChangeFilter } from "../../redux/Contacts/contacts-actions";
import s from "./Filter.module.css";

const Filter = () => {
  const value = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={(event) =>
          dispatch(onChangeFilter(event.currentTarget.value))
        }
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};

export default Filter;
