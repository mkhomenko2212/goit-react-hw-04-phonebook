import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem, BtnDelete } from './ContactElement.styled';


const ContactElement = ({ contact, onDeleteContact }) => {
    const { id, number, name } = contact;
    return (
        <ContactItem>
            {name}: {number}
            <BtnDelete type="button" onClick={() => onDeleteContact(id)}>
                Delete </BtnDelete>
        </ContactItem>
    )
};

export default ContactElement;

ContactElement.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};