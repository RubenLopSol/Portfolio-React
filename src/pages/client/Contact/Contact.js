import React from 'react';
import { useTranslation } from 'react-i18next';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Icon } from 'semantic-ui-react'

import { useContact } from '../../../hooks';

import './Contact.scss';

const validationSchema = Yup.object({
  name: Yup.string().required('Please enter your name.'),
  email: Yup.string().email('Invalid email address.').required('Please enter your email.'),
  message: Yup.string().required('Please enter a message.'),
});

export function Contact() {

  const { t } = useTranslation();

  const { postContact } = useContact();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await postContact(values);
      setSubmitting(false);
      toast.success('Information sent successfully. Thank you!');
      resetForm();
    } catch (error) {
      toast.error('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="contact">
      <div className="contact__title">
        <h1>{t("Contact Me")}</h1>
       
        <h3><Icon name='mail'/> &nbsp; <a href="mailto:rubenlopsol86@gmail.com">rubenlopsol86@gmail.com</a></h3>
        <h3><Icon name='phone'/> &nbsp; <a href="tel:662183203">662.183.203</a></h3>
       
      </div>
      <div className="contact__content">
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form style={{ textAlign: 'center' }}>
            <ErrorMessage name="name" component="p" style={{ color: 'red' }} />
            <Field type="text" name="name" placeholder={t("Name")} />
            <br />
            <ErrorMessage name="email" component="p" style={{ color: 'red' }} />
            <Field type="email" name="email" placeholder="Email" />
            <br />
            <ErrorMessage name="message" component="p" style={{ color: 'red' }} />
            <Field as="textarea" name="message" placeholder={t("Message")} />
            <br />
            <button type="submit">{t("Submit")}</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
