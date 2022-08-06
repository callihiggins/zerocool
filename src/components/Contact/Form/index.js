import React from 'react';
import { useForm, ValidationError } from '@formspree/react';  
import Recaptcha from 'react-recaptcha'
import * as styles from '../styles';

function ContactForm() {
  const [state, handleSubmit] = useForm("mwkygobo");
  if (state.succeeded) {
      return <p css={styles.successClass}>Thanks for your inquiry, we'll be in touch!</p>;
  }
  return (
    <div css={styles.formContainerClass}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name*
        </label>
        <input
          id="name"
          type="text" 
          name="name"
          required
        />
        <ValidationError 
          prefix="name" 
          field="name"
          errors={state.errors}
        />
        <label htmlFor="name">
          Company
        </label>
        <input
          id="company"
          type="text" 
          name="company"
        />
        <ValidationError 
          prefix="company" 
          field="company"
          errors={state.errors}
        />
         <label htmlFor="email">
          Email*
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="story">
          Message*
        </label>
        <textarea
          id="message"
          name="message"
          required
        />
        <ValidationError 
          prefix="message" 
          field="message"
          errors={state.errors}
        />
       
        <Recaptcha sitekey="6LemnAQhAAAAAIYMA30eXxUfttF95WnxXidRmwMB" />,        
        <button type="submit" disabled={state.submitting}>
          Send
        </button>
      </form>
    </div>
  );
}
export default ContactForm;