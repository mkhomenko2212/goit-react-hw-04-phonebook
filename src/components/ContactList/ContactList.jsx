import React from 'react';
import PropTypes from 'prop-types';
import { ContactListStyled, ContactItem, BtnDelete } from './ContactList.styled';



const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ContactListStyled>
            {contacts.map(({id, name, number}) => (
                <ContactItem key={id}>
                {name}: {number}
                <BtnDelete type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </BtnDelete>
    
    </ContactItem>))}
    
    </ContactListStyled>)
};

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