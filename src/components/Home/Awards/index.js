
  import React from 'react';
  import { css } from '@emotion/react'
  import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
  import * as styles from  './styles';
  import * as sharedstyles from  '../../shared/styles';
  import Aspen from '../../../assets/images/aspen.png';
  import HotDocs from '../../../assets/images/hotdocs.png';
  import PalmSprings from '../../../assets/images/palmsprings.png';
  import Tribecca from '../../../assets/images/tribecca.png';
  
  
  const Awards = () => {
    return (
      <div css={styles.awardsContainerClass}>
        <div css={styles.awardDetailsClass}>
          <div css={styles.headerClass}>
            Awards
          </div>
          <div css={styles.awardDescriptionClass}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div css={styles.awardLogsClass}>
          <a href="https://tribecafilm.com/" target="_blank" rel="noopener">
            <img src={Tribecca} alt="Tribecca Logo" />
          </a>
          <a href="https://www.psfilmfest.org/" target="_blank" rel="noopener noreferrer">
            <img src={PalmSprings} alt="Palm Springs Logo" />
          </a>
          <a href="https://hotdocs.ca/" target="_blank" rel="noopener noreferrer">
            <img src={HotDocs} alt="Hot Docs Logo" />
          </a>
          <a href="https://aspenfilm.org/" target="_blank" rel="noopener noreferrer">
            <img src={Aspen} alt="Aspen TV Logo" />
          </a>
          
        </div>
      </div>
    )
  }
  
  export default Awards;