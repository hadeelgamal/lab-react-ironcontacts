import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";
function App() {
  const firstFive = contactsData.slice(0, 5);
  const [contacts, setContacts] = useState(firstFive);

  const randomContact = (contacts) => {
    const randomContact =
      contactsData[Math.floor(Math.random() * contactsData.length)];
    const updatedContactList = [...contacts, randomContact];
    setContacts(updatedContactList);
  };

  const sortContactName = (contacts) => {
    const sortedContacts = [...contacts.sort((a, b) => (a.name > b.name ? 1 : -1))];
  
    setContacts(sortedContacts); 
  };
 
  const deleteContact = contactId => {
    const filteredContacts = contacts.filter(contact => {
      return contact.id !== contactId;
    });
 
    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      <button onClick={() => randomContact(contacts)}>
        Add random contact
      </button>
      <button onClick={() => sortContactName(contacts)}>
        Sort contacts by name
      </button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        {contacts.map((contact) => {
          return (
            <tr>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt="picutre"
                  height="100"
                  width="100"
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td> {contact.wonOscar ? "🏆" : ""}</td>
              <td> {contact.wonEmmy ? "🏆" : ""}</td>
              <button onClick={() => deleteContact(contact.id)} className="btn-delete">
                 Delete 
            </button>
            </tr>
            
          );
        })}
      </table>
    </div>
  );
}
export default App;
