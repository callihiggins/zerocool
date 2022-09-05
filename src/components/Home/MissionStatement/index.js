import React, { useState } from 'react';
import { css } from '@emotion/react'
import { cx } from '@emotion/css'
import TextTransition, { presets } from "react-text-transition";
import Modal from 'react-modal';
import 'react-responsive-modal/styles.css';
import * as styles from  './styles';
import { StrongText } from './styles';
import * as sharedstyles from  '../../shared/styles';
import { MissionElement } from './styles';
import logo from '../../../assets/images/logo.png';

import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min.js';

const MissionStatement = () => {

  const [showFootNotes, setShowFootNotes] = useState(false);
  const [footNotesIndex, setFootNotesIndex] = useState(0);

  const FOOTNOTES = [
    `<ul><li>Empathetic, sensitive, safe sets</li><li>Consistent bottom-up feedback from all employees</li><li>A culture of constant improvement</li></ul>`,
    `<ul>We go hard</ul>`,
    `<ul><li>A marketer launching a new podcast</li><li>An indie filmmaker dreaming up their first feature</li><li>A start-up looking for a splash video</li></ul>`
  ];

  const showFootNote = (index) => {
    if (!showFootNotes) setShowFootNotes(true);
    setFootNotesIndex(index)
  }

  return ( 
    <div id="js-sticky-parallax-container" className="uk-height-viewport-2">
      <div className="uk-height-viewport" uk-sticky="end: #js-sticky-parallax-container">
        <div uk-parallax="target: #js-sticky-parallax-container; easing: -1; start: 60vh; end: 100vh;">
          <div css={styles.missionContainerClass}  >
            <div css={styles.textClass} id="missionStatement">
              We create <StrongText onClick={() => showFootNote(0)} highlight={showFootNotes && footNotesIndex === 0}> emotionally intelligent production environments</StrongText><sup onClick={() => showFootNote(0)} >1</sup> that <StrongText onClick={() => showFootNote(1)} highlight={showFootNotes && footNotesIndex === 1}>champion</StrongText><sup onClick={() => showFootNote(1)}>2</sup> the work of <StrongText onClick={() => showFootNote(2)} highlight={showFootNotes && footNotesIndex === 2}>creatives in any medium</StrongText><sup onClick={() => showFootNote(2)}>3</sup>.
            </div>
            <div css={styles.footNotesContainerClass}>
              {showFootNotes && (
                <TextTransition springConfig={presets.wobbly} css={styles.textTransitionContainerClass}>
                  <div css={styles.footNotesTextClass}>
                    <sup>{footNotesIndex + 1}</sup>
                    <div css={styles.footNotesBulletClass} dangerouslySetInnerHTML={{__html: FOOTNOTES[footNotesIndex]}} />
                  </div>
                </TextTransition>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MissionStatement;
