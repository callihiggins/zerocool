import React from 'react';
import Slide from 'react-reveal/Slide';
import { css } from '@emotion/react';
import * as styles from  './styles';
import * as sharedstyles from  '../../shared/styles';
import UninterruptedLogo from '../../../assets/images/uninterrupted-logo-white_x450.png';
import ABCorp from '../../../assets/images/AB_CORP_WHITE.png';
import Spotify from '../../../assets/images/Spotify_Logo_RGB_White.png';
import Audible from '../../../assets/images/audible-logo-white-transparent.png';
import Bric from '../../../assets/images/btv_white_logo_.png';
import Loreal from '../../../assets/images/loreal-logo-white.png';
import Topic from '../../../assets/images/topic+logo.png';
import ScienceInteractive from '../../../assets/images/SIG-stacked-type-primary.png';
import DressForSuccess from '../../../assets/images/dress_for_success_white.png';
import Snackable from '../../../assets/images/snackable.png';

const Clients = () => {

  return (
    <Slide left duration={1500}>
      <>
      <div css={styles.clientsContainerClass}>
        <div css={styles.clientDetailsClass}>
          <div css={styles.headerClass}>
            Our clients
          </div>
          <div css={styles.clientDescriptionClass}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div css={styles.clientLogsClass}>
          <a href="https://www.alliancebernstein.com/corporate/en/home.html" target="_blank" rel="noopener">
            <img src={ABCorp} alt="Alliance Bernstein Logo" />
          </a>
          <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">
            <img src={Spotify} alt="Spotify Logo" />
          </a>
          <a href="https://www.audible.com/" target="_blank" rel="noopener noreferrer">
            <img src={Audible} alt="Audible Logo" />
          </a>
          <a href="https://www.bricartsmedia.org/" target="_blank" rel="noopener noreferrer">
            <img src={Bric} alt="Bric TV Logo" />
          </a>
          <a href="https://www.loreal.com/en/" target="_blank" rel="noopener noreferrer">
            <img src={Loreal} alt="Loreal Logo" />
          </a>
          <a href="https://www.topic.com/" target="_blank" rel="noopener noreferrer">
            <img src={Topic} alt="Topic Logo" />
          </a>
          <a href="https://www.scienceinteractive.com/" target="_blank" rel="noopener noreferrer">
            <img src={ScienceInteractive} alt="Science Interactive Logo" />
          </a>
          <a href="https://www.uninterrupted.com/" target="_blank" rel="noopener noreferrer">
            <img src={UninterruptedLogo} alt="Uninterrupted Logo" />
          </a>
          <a href="https://snackable.ai/" target="_blank" rel="noopener noreferrer">
            <img src={Snackable} alt="Snackable Logo" />
          </a>
          <a href="https://dressforsuccess.org/" target="_blank" rel="noopener noreferrer">
            <img src={DressForSuccess} alt="Dress For Success Logo" />
          </a>
        </div>
      </div>
      </>
    </Slide>

  )

}

export default Clients;