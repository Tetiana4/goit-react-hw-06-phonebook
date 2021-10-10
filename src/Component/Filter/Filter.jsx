import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions'

const Filter = ({ value, onChange }) => (
  <label>
    <input
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);
const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: (event) => dispatch(actions.filterContact(event.currentTarget.value))
    
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propeTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};