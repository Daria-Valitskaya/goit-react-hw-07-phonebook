import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";
import { onDeleteContact } from "../../redux/Contacts/contacts-actions";
import { getVisibleContacts } from "../../redux/Contacts/contacts-selectors";

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const deleteContact = (id) => dispatch(onDeleteContact(id));
  return (
    <ul>
      {contacts.map(({ id, number, name }) => (
        <li key={id} name={name}>
          <ContactItem
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
