import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, Formik, Field } from 'formik';
import { Component } from "react";
import * as yup from 'yup';
import { FormLabel, FormButton } from './ContactForm.styled';

const initialValues = {
   name: '',
    number: '',
};

export class ContactForm extends Component  {
    state = {
        name: '',
        number: ''
    };

    render() {
    const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
        };

        return (
           
                <Formik
                initialValues={{
                name: '',
                number: '',
                }}
                onSubmit={handleSubmit}
               
            >
      <Form autoComplete="off" >
        <FormLabel htmlFor="name">Name</FormLabel>
                        <Field
                        id="name"
                        name="name"
                        placeholder="Jane"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required />

        <FormLabel htmlFor="number">Number</FormLabel>
                        <Field
                        id="number"
                        name="number"
                        placeholder="number"
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


