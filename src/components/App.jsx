import ContactForm from './ContactForm/contactForm';
import ContactList from './ContactList/contactList';
import Filter from './Filter/filter';
import { GlobalStyle } from './GlobalStyle';
import { Phonebook, MainTitle, ContactTitle } from './Layout';
import { Notify } from 'notiflix';
import { useSelector } from 'react-redux';
Notify.init({ position: 'center-top' });

export default function App() {
  const contacts = useSelector(state => state.contacts);

  return (
    <Phonebook>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      {contacts.length > 0 && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
      <GlobalStyle />
    </Phonebook>
  );
}
