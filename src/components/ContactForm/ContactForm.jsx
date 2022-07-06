import React from 'react';
import { Form, Formik, Field } from 'formik';
import { Component } from "react";
import * as Yup from 'yup';
import { FormLabel, FormButton } from './ContactForm.styled';


const validationSchema = Yup.object({
  name: Yup.string().required(),
  number: Yup.number().min(8).max(12).required(),
});


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
           
                <Formik
                initialValues={{
                name: '',
                number: '',
                }}
                validationSchema={validationSchema}
               
            >
      <Form autoComplete="off" onSubmit={this.handleSubmit}>
        <FormLabel htmlFor="name">Name</FormLabel>
                        <Field
                        id="name"
                        name="name"
                        placeholder="Jane"
                        value={this.state.name}
                        onChange={this.handelChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required />

        <FormLabel htmlFor="number">Number</FormLabel>
                        <Field
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
    </Formik>
            )
    };
};


