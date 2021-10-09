export const myAction = value => ({
  type: 'MY_ACTION',
  payload: value,
});

export const myAction2 = {
  type: 'MY_ACTION_2',
  payload: 'super 2',
};

export const addContact = value => ({
  type: 'add/Contact',
  payload: {
    name: value.name,
    number: value.number,
  },
});
