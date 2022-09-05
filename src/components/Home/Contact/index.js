import React from 'react';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
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
          <div css={styles.buttonLabelClass} >Contact us</div>
          <div css={styles.iconContainerClass}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </a>
        <a css={styles.buttonClass} role="button" href="/jobs">
          <div css={styles.buttonLabelClass} >Looking for a job?</div>
          <div css={styles.iconContainerClass}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;