import React from 'react';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import NavLite from './NavLite';
import { css } from '@emotion/react'
import * as styles from  './styles';
import * as sharedstyles from  '../shared/styles';
import logo from '../../assets/images/logo.png';
import { ReactComponent as PlayIcon } from '../../assets/playIcon.svg';
import UninterruptedLogo from '../../assets/images/uninterrupted-logo-white_x450.png';
import ABCorp from '../../assets/images/AB_CORP_WHITE.png';
import Spotify from '../../assets/images/Spotify_Logo_RGB_White.png';
import Audible from '../../assets/images/audible-logo-white-transparent.png';
import Bric from '../../assets/images/btv_white_logo_.png';
import Loreal from '../../assets/images/loreal-logo-white.png';
import Topic from '../../assets/images/topic+logo.png';
import ScienceInteractive from '../../assets/images/SIG-stacked-type-primary.png';
import introVideo from '../../assets/introVideo.mp4';
import ReactPlayer from 'react-player'

class Home extends React.Component {

	state = {
		modalIsOpen: false,
	}

	openModal = () => {
		this.setState({
			modalIsOpen: true,
		});
	}

	closeModal = () => {
		this.setState({
			modalIsOpen: false,
		});
	}

	render() {
		return (
			// <Page updateActive={this.props.updateActive} name="home">
			<>
        <NavLite />
				<div css={styles.containerClass}>
					<Modal
						open={this.state.modalIsOpen}
						onClose={this.closeModal}
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
					<div css={styles.logoBlockClass}>
						<div css={styles.logoContainerClass}>
							<img src={logo} alt="Zero Cool logo" css={styles.logoClass}/>
						</div>
						<div css={styles.taglineClass}>
              A multidisciplinary production company
						</div>
						<button css={styles.trailerCTAClass} onClick={this.openModal}>
							<div css={styles.playerButtonClass}>
								<PlayIcon />
							</div>
							Watch our reel
						</button>
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
						</div>
					</div>
					<div css={styles.videoOverlayClass} />
					<video width="640" height="320" autoPlay muted loop css={[styles.videoPlayerClass, sharedstyles.hideMobile]}>
						<source src={introVideo}/>
					</video>
				</div>
			</>
			// </Page>
		)
	}

	
}

export default Home;