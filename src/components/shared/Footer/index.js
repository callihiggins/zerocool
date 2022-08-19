import React from 'react';
import logoBlackText from '../../../assets/images/logo_with_black_text.png'
import logoWhiteText from '../../../assets/images/logo_with_white_text.png';
import * as styles from  './styles';
import { FooterContainer, HorizontalLine, BottomContainer } from './styles';
import * as sharedstyles from  '../styles';
import { default as theme } from '../../../theme';

const Footer = props => (
  <FooterContainer darkMode={props.darkMode}>
    <HorizontalLine darkMode={props.darkMode}/>
    <BottomContainer darkMode={props.darkMode} >
      <div css={styles.leftSideClass}>
        {props.darkMode ? 
          <img src={logoWhiteText} css={styles.logoClass} alt="Zero Cool Logo"/> : 
          <img src={logoBlackText} css={styles.logoClass} alt="Zero Cool Logo"/>
        }
      </div>
      <div css={styles.rightSideClass}>
        <a href="mailto:info@zerocool.tv">info@zerocool.tv</a>
        <span>Producing in New York & Los Angeles</span>
      </div>
    </BottomContainer>
  </FooterContainer>
)

export default Footer;