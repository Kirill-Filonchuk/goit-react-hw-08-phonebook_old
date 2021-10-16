// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AppBar from '../AppBar';
import ContactsView from '../views/ContactsView';
import HomeView from '../views/HomeView';
import RegisterView from '../views/RegisterView';
import LoginView from '../views/LoginView';
import Container from '../Container/Container';
// import { authOperations } from './redux/auth';
function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch('authOperations.fetchCurrentUser()');
  // }, [dispatch]);
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>
    </Container>
  );
}

export default App;

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
