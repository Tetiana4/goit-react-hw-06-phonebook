import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from "../../redux/actions";
import { List, ListItem, Button } from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
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



const mapStateToProps = state => ({contacts: state.contacts.contacts });

const mapDispatchToProps = dispatch => ({
  onDelete: (value) => dispatch(actions.deleteContact(value))
 });
 
export default connect(mapStateToProps, mapDispatchToProps)(ContactList)


ContactList.propeTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};
