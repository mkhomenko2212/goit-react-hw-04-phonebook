import React from 'react';
import PropTypes from 'prop-types';
import { ContactListStyled, } from './ContactList.styled';
import ContactElement from './ContactElement/ContactElement';



const ContactList = ({ contacts, onDeleteContact }) =>  (
        <ContactListStyled>
            {contacts.map(({id, name, number}) => (
              <ContactElement
                key={id}
                contact={{ id, name, number }}
                onDeleteContact={onDeleteContact}/>
     ))}
    </ContactListStyled>)


export default ContactList;


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};