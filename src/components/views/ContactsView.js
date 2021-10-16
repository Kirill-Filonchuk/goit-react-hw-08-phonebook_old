// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Container from '../Container/';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter/';

// import { todosOperations, todosSelectors } from '../redux/todos';

const barStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: 20,
};

export default function TodosView(params) {
  // const dispatch = useDispatch();
  // const isLoadingTodos = useSelector('todosSelectors.getLoading');
  const isLoadingTodos = false;
  // useEffect(() => dispatch(todosOperations.fetchTodos()), [dispatch]);

  return (
    <Container>
      <div style={barStyles}>
        <ContactForm />
        <br />
        <Filter />

        {isLoadingTodos && <h1>Загружаем...</h1>}
      </div>

      <ContactList />
    </Container>
  );
}
// <div className="container">
//   <h1>Phonebook</h1>
//   {/* <ContactForm formSubmitHandler={formSubmitHandler} /> */}
//   <ContactForm />

//   <h2>Contacts</h2>
//   {/* <Filter value={filter} onChange={changeFilter} /> */}
//   <Filter />
//   {/* <ContactList visibleContact={visibleContact()} onDeleteCont={onDeleteCont} /> */}
//   <ContactList />
// </div>;
