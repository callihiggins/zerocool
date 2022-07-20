import React from 'react';
import logo from '../../../assets/images/logo_with_black_text.jpg';
import * as styles from  './styles';
import * as sharedstyles from  '../styles';
import { default as theme } from '../../../theme';

const Footer = props => (
  <div css={styles.containerClass}>
    <div css={styles.horizontalLineClass} />
    <div css={styles.bottomContainerClass}>
      <div css={styles.leftSideClass}>
        <img src={logo} css={styles.logoClass} alt="Zero Cool Logo"/>
      </div>
      <div css={styles.rightSideClass}>
        <a href="mailto:info@zerocool.tv">info@zerocool.tv</a>
      </div>
    </div>
  </div>
)

export default Footer;