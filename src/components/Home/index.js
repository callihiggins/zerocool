
import React, { useState } from 'react';
import { css } from '@emotion/react'
import { debounce } from 'lodash';
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from "react-transition-group";
import Nav from '../shared/Nav';
import VideoPanel from './VideoPanel';
import MissionStatement from './MissionStatement';
import * as styles from  './styles';
import * as sharedstyles from  '../shared/styles';

const Home = () => {
  const [activeMenu, updateActive] = useState('video');

  const updateActiveCallback = debounce(active => {
    if (activeMenu !== active) {
      updateActive(active);
    }
  }, 100); 

  const [videoRef, videoInView] = useInView({
    threshold: .5,
  })

  const [overlayRef, overlayInView] = useInView({
    threshold: .5,
  })

  if (videoInView) {
    updateActiveCallback('video')
  }

  if (overlayInView) {
    updateActiveCallback('overlay')
  }

  return (
    // <Page updateActive={this.props.updateActive} name="home">
    <>
      <CSSTransition
        in={activeMenu !== 'video'}
        timeout={1000}
        classNames="nav"
      >
        <Nav onHome={true}/>
    </CSSTransition>
      <div ref={videoRef}>
        <VideoPanel />
      </div>
      <div css={styles.scrollOverClass} ref={overlayRef}>
        <MissionStatement />
      </div>
    </>
    // </Page>
  )	
}

export default Home;