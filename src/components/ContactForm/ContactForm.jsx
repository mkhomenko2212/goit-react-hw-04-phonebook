import React from 'react';
import PropTypes from 'prop-types';
import { Component } from "react";

import { FormLabel, FormButton, Input, Form } from './ContactForm.styled';





export class ContactForm extends Component  {
    state = {
        name: '',
        number: ''
  };
  
handelChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

handleSubmit =  e => {
   e.preventDefault();

    this.props.onAddContact(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };


    render() {
  
        return (
           
            //     <Formik
            //     initialValues={{
            //     name: '',
            //     number: '',
            //     }}
                
               
            // >
      <Form autoComplete="off" onSubmit={this.handleSubmit}>
        <FormLabel htmlFor="name">Name</FormLabel>
                        <Input
                        id="name"
                        name="name"
                        placeholder="Jane"
                        value={this.state.name}
                        onChange={this.handelChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required />

        <FormLabel htmlFor="number">Number</FormLabel>
                        <Input
                        id="number"
                        name="number"
                placeholder="number"
                value={this.state.number}
              onChange={this.handelChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        />
        <FormButton type="submit">Add Contact</FormButton>
      </Form>
    // </Formik>
            )
    };
};


ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};