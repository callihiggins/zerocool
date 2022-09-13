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
        <div css={styles.headerClass}>
          <div css={styles.textClass}>Say<br />hello</div>
          <div css={styles.subHeaderClass}>We live by a simple phrase... A.B.P. – Always Be Producing, so reach out and let’s chat.</div>
        </div>
        <Form />
      </div>
      <Footer  darkMode={true}/>
    </>
  )
}

export default Contact;
