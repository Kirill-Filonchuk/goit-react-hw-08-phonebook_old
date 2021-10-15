import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
// import {deleteContact} from '../../redux/contacts-actions';
// import contactOperation from '../../redux/contacts-operations';
// import contactSelectors from '../../redux/contacts-selectors';
import {contactOperation, contactSelectors} from '../../redux/'
import s from './ContactList.module.css';

const ContactList = ({ visibleContact, onDeleteCont, fetchContacts }) => {
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => dispatch(fetchContacts()), [dispatch]);
  
return (
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
};

const mapStateToProps = (state) => {
  return { visibleContact: contactSelectors.getVisibleContact(state), }
};

const mapDispatchToProps = dispatch => ({
  fetchContacts: ()=>dispatch(contactOperation.fetchContact),
  onDeleteCont: id => dispatch(contactOperation.deleteContact(id)),
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

// --------
// const getVisibleContact = (allContacts, filter) => {
//   console.log('allContacts', ...allContacts);
//   console.log('filter', filter);
//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter((text) => {console.log('Object.values(text)[0]',Object.values(text)[0]); return Object.values(text)[0].toLowerCase().includes(normalizedFilter) });
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => {
//   console.log('items', items[0]);
//   console.log('filter',filter );
//   return { visibleContact: getVisibleContact(items, filter), }
// };