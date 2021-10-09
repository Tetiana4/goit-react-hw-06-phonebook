import { ADD, DELETE, FILTER } from './types';
import { v4 as uuidv4 } from 'uuid';

export const addContact = data => ({
  type: ADD,
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
});

export const deleteContact = contactId => ({
  type: DELETE,
  payload: contactId,
});

export const filterContact = value => ({
  type: FILTER,
  payload: value,
});
