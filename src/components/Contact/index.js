import React from 'react';
import Nav from '../shared/Nav';
import Footer from '../shared/Footer';
import Form from './Form';
import * as styles from './styles.js'
import * as sharedstyles from '../shared/styles.js';

const Contact = () => {

  return (
    <>
      <Nav active="contact"></Nav>
      <div css={styles.contactContainerClass}>
        <div css={sharedstyles.titleBannerClass}>Contact Us</div>
        <div css={styles.subHeaderClass}>Fill out the form below and we'll get in touch</div>
        <Form />
      </div>
      <Footer />
    </>
  )
}

export default Contact;
