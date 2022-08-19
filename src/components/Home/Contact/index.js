import React from 'react';
import { css } from '@emotion/react';
import * as styles from  './styles';
import * as sharedstyles from  '../../shared/styles';

const Contact = () => {
  return (
    <div css={styles.contactContainerClass}>
      <div css={styles.textClass}>
        Get in touch
      </div>
      <div css={styles.buttonContainerClass}>
        <a css={styles.buttonClass} role="button" href="/contact">
          Contact us
        </a>
        <a css={styles.buttonClass} role="button" href="/jobs">
          Looking for a job?
        </a>
      </div>
    </div>
  );
};

export default Contact;