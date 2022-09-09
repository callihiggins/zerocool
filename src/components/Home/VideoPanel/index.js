import React, { useEffect, useState, useRef } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import NavLite from '../NavLite';
import { css } from '@emotion/react'
import * as styles from  './styles';
import * as sharedstyles from  '../../shared/styles';
import logo from '../../../assets/images/logo.png';
import { ReactComponent as PlayIcon } from '../../../assets/playIcon.svg';
import introVideo from '../../../assets/introVideo.mp4';
import ReactPlayer from 'react-player'

const Home = () => {

	const [modalIsOpen, setModalIsOpen] = useState(false);
  const vidRef = useRef(null);

	useEffect(() => {
		if (modalIsOpen) {
			vidRef.current.pause();
		} else {
			vidRef.current.play();
		}
	}, [modalIsOpen])

	const openModal = () => {
		setModalIsOpen(true)
	}

	const closeModal = () => {
		setModalIsOpen(false)
	}

	return (
		// <Page updateActive={this.props.updateActive} name="home">
		<>
		<ParallaxProvider>
			<NavLite />
			<Modal
					open={modalIsOpen}
					onClose={closeModal}
					styles={{
						modal: { 
							background: '#000',
							width: '95vw',
							height: '85vh',
							'maxWidth': 'initial',
						},
						closeIcon: {
							stroke: 'white',
							fill: 'white'
						},
					}}
					center
				>
					<ReactPlayer
						url='https://vimeo.com/399360999'
						playing
						controls
						style={{'margin': '0 auto'}}
						width={'auto'}
						height={'85vh'}
					/>
				</Modal>
			<div css={styles.containerClass}>
				<div css={styles.logoBlockClass}>
					<Parallax speed={-30}>
						<div css={styles.logoContainerClass}>
							<img src={logo} alt="Zero Cool logo" css={styles.logoClass}/>
						</div>
						<div css={styles.taglineClass}>
							A multidisciplinary production company
						</div>
						<button css={styles.trailerCTAClass} onClick={openModal}>
							<div css={styles.playerButtonClass}>
								<PlayIcon />
							</div>
						</button>
						<div css={styles.downArrowsClass}>
							<FontAwesomeIcon icon={faChevronDown}/>
						</div>
					</Parallax>
				</div>
				<div css={styles.videoOverlayClass} />
				<video ref={vidRef} width="640" height="320" autoPlay muted loop css={[styles.videoPlayerClass, sharedstyles.hideMobile]}>
					<source src={introVideo}/>
				</video>
			</div>
			</ParallaxProvider>
		</>
		// </Page>
	)
}

export default Home;