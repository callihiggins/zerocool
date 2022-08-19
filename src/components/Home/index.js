
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

const Home = () => {

  const [videoRef, videoInView] = useInView({
    threshold: .5,
  })

  const [overlayRef, overlayInView] = useInView({
    threshold: .1,
  })

  const [activeMenu, updateActive] = useState('video');

  console.log(activeMenu)

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
    // <Page updateActive={this.props.updateActive} name="home">
    <>
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
        <MissionStatement  />
        {/* <ParallaxProvider>
          <Parallax speed={-10}> */}
            <Clients />
            <Awards />
          {/* </Parallax>
        </ParallaxProvider> */}
        <Contact /> 
        <Footer darkMode={true}/>
      </div>
    </>
    // </Page>
  )	
}

export default Home;