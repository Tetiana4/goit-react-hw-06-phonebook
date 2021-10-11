import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from "../../redux/actions";
import { List, ListItem, Button } from './ContactList.styled';

const getVisibleList = (allContacts, filter) => {
  const normalisedFilter = filter.toLowerCase();
  
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalisedFilter),
   );
};
  
const ContactList = () => {
  const contacts = useSelector(state => getVisibleList(state.contacts.contacts, state.contacts.filter));
  const dispatch = useDispatch();
  const onDelete = (id) => dispatch(actions.deleteContact(id));

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <Button onClick={() => onDelete(id)}>delete</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;

ContactList.propeTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};




// redux

// const mapStateToProps = ({ contacts: { contacts, filter }}) => ({
//   contacts: getVisibleList(contacts, filter),
  
// });

// const mapDispatchToProps = dispatch => ({
//   onDelete: (value) => dispatch(actions.deleteContact(value))
//  });
 
// export default connect(mapStateToProps, mapDispatchToProps)(ContactList)



