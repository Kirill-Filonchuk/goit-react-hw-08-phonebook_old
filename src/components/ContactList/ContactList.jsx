import React from 'react';
import { connect } from 'react-redux';
import actionsContact from '../../redux/contacts-actions';
import s from './ContactList.module.css';

const ContactList = ({ visibleContact, onDeleteCont }) => (
  <ul className={s.list}>
    {visibleContact.map(({ id, name, number }) => (
      <li key={id} className={s.item}>
        {name}:<span>{number}</span>
        <button type="button" onClick={() => onDeleteCont(id)} className={s.btnForm}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);
//вспомогательная функция - селектор
const getVisibleContact = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(con => con.name.toLowerCase().includes(normalizedFilter));
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  visibleContact: getVisibleContact(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteCont: id => dispatch(actionsContact.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);


/* was: this.state.contact */

// const visibleContact = () => {
//   const normalizedFilter = filter.toLowerCase();
//   const visibleContact = contacts.filter(con =>
//     con.name.toLowerCase().includes(normalizedFilter),
//   );
//   return visibleContact;
// };

// const mapStateToProps = state => {
//     const { items, filter } = state.contacts;
//     const normalizedFilter = filter.toLowerCase();
//     const visibleContact = items.filter(con =>
//       con.name.toLowerCase().includes(normalizedFilter),
//     );
//     return {
//         visibleContact: visibleContact,
//     }
// };
