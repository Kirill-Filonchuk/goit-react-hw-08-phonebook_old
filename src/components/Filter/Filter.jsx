import React from 'react';
import { connect } from 'react-redux';
// import * as contactActions from '../../redux/contacts-actions';
import { contactSelectors, changeFilter } from '../../redux/contacts';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <br />
    <input type="text" value={value} onChange={onChange} />
  </label>
);

const mapStateToProps = state => ({
    value: contactSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
    onChange: (e)=>dispatch(changeFilter(e.currentTarget.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

// const mapStateToProps = state => ({
//     value: state.contacts.filter,
// });