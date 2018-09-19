import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';


class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <div className="contactListHeader">
                <h1 className="display-4 mb-2">
                  Contact List
              </h1>
              <Link to="/contacts/add">
                <i className="fas fa-plus" /> Add
              </Link>
              </div>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
