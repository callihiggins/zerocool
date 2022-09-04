import React from 'react';
import Nav from '../shared/Nav';
import Footer from '../shared/Footer';
import ReactPlayer from 'react-player';
import ReactFullpage from '@fullpage/react-fullpage';
import UninterruptedLogo from '../../assets/images/uninterrupted-logo-NAVY_x450.png';
import ABCorp from '../../assets/images/AB_CORP_NAVY.png';
import Spotify from '../../assets/images/Spotify_Logo_RGB_NAVY.png';
import Audible from '../../assets/images/audible-logo-NAVY-transparent.png';
import Bric from '../../assets/images/btv_NAVY_logo_.png';
import Loreal from '../../assets/images/loreal-logo-NAVY.png';
import Topic from '../../assets/images/topic+logo_NAVY.png';
import ScienceInteractive from '../../assets/images/SIG-stacked-type-primary_NAVY.png';
import Snackable from '../../assets/images/snackable_NAVY.png';
import * as styles from './styles.js'
import * as sharedstyles from '../shared/styles.js';

const Work = () => {

  return (
    <ReactFullpage
      licenseKey='GK22I-S3NSJ-X94H9-SKU07-MAEON'
      scrollBar
      responsiveWidth={800}
      credits={{ enabled: false }}
      render={() => (
        <>
          <Nav active="work"></Nav>
          <ReactFullpage.Wrapper>
            <div css={styles.workContainerClass} className='section'>
              <div css={styles.sectionContainerClass}>
                <div css={styles.titleClass}><div>Work</div></div>
                <div css={styles.trailerContainerClass}>
                  <ReactPlayer
                    url='https://vimeo.com/399360999'
                    style={{'margin': '0 auto'}}
                    width={'100%'}
                    height={'100%'}
                    className='react-player'
                    controls={false}
                  />
                </div>
              </div>
            </div>
            <div className='section' css={styles.laurelsSectionClass}>
              <div css={styles.clientsClass}>
                <div css={styles.headerClass}><div>Clients</div></div>
                <div css={styles.logosClass}>
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
                  <a href="https://www.snackable.ai/" target="_blank" rel="noopener noreferrer">
                    <img src={Snackable} alt="Snackable Logo" />
                  </a>
                </div>
              </div>
              <div css={styles.festivalsClass}>
              <div css={styles.headerClass}><div>Appearances</div></div>
                <div css={styles.logosClass}>
                  <a href="https://www.topic.com/" target="_blank" rel="noopener noreferrer">
                    <img src={Topic} alt="Topic Logo" />
                  </a>
                  <a href="https://www.scienceinteractive.com/" target="_blank" rel="noopener noreferrer">
                    <img src={ScienceInteractive} alt="Science Interactive Logo" />
                  </a>
                  <a href="https://www.uninterrupted.com/" target="_blank" rel="noopener noreferrer">
                    <img src={UninterruptedLogo} alt="Uninterrupted Logo" />
                  </a>
                  <a href="https://www.snackable.ai/" target="_blank" rel="noopener noreferrer">
                    <img src={Snackable} alt="Snackable Logo" />
                  </a>
                </div>

              </div>

            </div>
              
          </ReactFullpage.Wrapper>
          <Footer />
      </>
      )}
    />
  )
}

export default Work;
