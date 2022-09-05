
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react'
import { debounce } from 'lodash';
import { useInView } from 'react-intersection-observer';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { CSSTransition } from "react-transition-group";
import Nav from '../shared/Nav';
import Footer from '../shared/Footer';
import VideoPanel from './VideoPanel';
import MissionStatement from './MissionStatement';
import Clients from './Clients';
import Awards from './Awards';
import Contact from './Contact';
import * as styles from  './styles';
import * as sharedstyles from  '../shared/styles';

import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min.js';

const Home = () => {

  const [videoRef, videoInView] = useInView({
    threshold: .5,
  })

  const [overlayRef, overlayInView] = useInView({
    threshold: .1,
  })

  const [activeMenu, updateActive] = useState('video');

  useEffect(() => {

    const updateActiveCallback = debounce(active => {
      if (activeMenu !== active) {
        updateActive(active);
      }
    }, 100); 

    if (videoInView) {
      updateActiveCallback('video')
    }

    if (overlayInView) {
      updateActiveCallback('overlay')
    }
  }, [videoInView, overlayInView ]);



  return (
    <div css={styles.homeContainerClass}>
      <CSSTransition
        in={activeMenu !== 'video'}
        timeout={1000}
        classNames="nav"
      >
        <Nav isOnHome={true}/>
      </CSSTransition>
      <div ref={videoRef}>
        <VideoPanel />
      </div>
      <div css={styles.scrollOverClass} ref={overlayRef} >
        <MissionStatement />
        <div id="laurels-container" className="uk-height-viewport-2">
          <div className="uk-height-viewport" uk-sticky="start: -70xpx; end: #laurels-container">
              <>
                <Clients />
                <Awards />
              </>
          </div>
        </div>
        <ParallaxProvider>
          <Parallax speed={-10}>
            <Contact /> 
          </Parallax>
        </ParallaxProvider>
        <Footer darkMode={true}/>
      </div>
    </div>
  )	
}

export default Home;