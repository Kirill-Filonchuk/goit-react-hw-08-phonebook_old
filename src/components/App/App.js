import '../App/App.css';
import React from 'react';
// import { connect } from 'react-redux';

import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
// Вся информация забирается с локал стоража
function App() {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      {/* <ContactForm formSubmitHandler={formSubmitHandler} /> */}
      <ContactForm />

      <h2>Contacts</h2>
      {/* <Filter value={filter} onChange={changeFilter} /> */}
      <Filter />
      {/* <ContactList visibleContact={visibleContact()} onDeleteCont={onDeleteCont} /> */}
      <ContactList />
    </div>
  );
}

export default App;

// const mapStateToProps = state => {
//   return {
//     value: state.contacts.items,
//   }
// }
// export default connect(mapStateToProps)(App);

// class App extends Component {
//   state = {
//     contacts: initialContact,
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsetContacts = JSON.parse(contacts);

//     if (parsetContacts) {
//       this.setState({
//         contacts: [...parsetContacts],
//       });
//     }
//   }

//   componentDidUpdate(prevState) {
//     // console.log('prevState.contacts', prevState.contacts);
//     // console.log('this.state.contacts', this.state.contacts);
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   formSubmitHandler = ({ name, number }) => {
//     const cont = {
//       id: shortid.generate(),
//       name,
//       number,
//     };

//     const checkName = cont.name.toLowerCase();
//     if (this.state.contacts.some(item => item.name.toLowerCase() === `${checkName}`)) {
//       alert(`${cont.name} is already in contacts`);
//       return;
//     }
//     this.setState(prevState => {
//       const contacts = [...prevState.contacts, cont];
//       return {
//         contacts,
//       };
//     });
//     // console.log('Arr', this.state.contacts);
//   };

//   changeFilter = e => {
//     // console.log(e.currentTarget.value);
//     this.setState({
//       filter: e.currentTarget.value,
//     });
//   };

//   onDeleteCont = id => {
//     // console.log(id);
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(con => con.id !== id),
//     }));
//   };
//   // filter создаёт НОВЫЙ массив, в который войдут только те элементы arr, для которых вызов callback(item, i, arr) возвратит true.

//   visibleContact = () => {
//     const normalizedFilter = this.state.filter.toLowerCase();
//     const visibleContact = this.state.contacts.filter(con =>
//       con.name.toLowerCase().includes(normalizedFilter),
//     );
//     return visibleContact;
//   };

//   render() {
//     // const normalizedFilter = this.state.filter.toLowerCase();
//     // const visibleContact = this.state.contacts.filter(con =>
//     //   con.name.toLowerCase().includes(normalizedFilter),
//     // );
//     return (
//       <div className="container">
//         <h1>Phonebook</h1>

//         <ContactForm formSubmitHandler={this.formSubmitHandler} />

//         <h2>Contacts</h2>
//         <Filter value={this.state.filter} onChange={this.changeFilter} />

//         <ContactList visibleContact={this.visibleContact()} onDeleteCont={this.onDeleteCont} />
//       </div>
//     );
//   }
// }
