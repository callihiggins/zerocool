import React from 'react';
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
			<ParallaxProvider>
        <NavLite />
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
				<div css={styles.containerClass}>
					<div css={styles.logoBlockClass}>
						<Parallax speed={-30}>
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
							</button>
							<div css={styles.downArrowsClass}>
								<FontAwesomeIcon icon={faChevronDown}/>
							</div>
						</Parallax>
					</div>
					<div css={styles.videoOverlayClass} />
					<video width="640" height="320" autoPlay muted loop css={[styles.videoPlayerClass, sharedstyles.hideMobile]}>
						<source src={introVideo}/>
					</video>
				</div>
				</ParallaxProvider>
			</>
			// </Page>
		)
	}

	
}

export default Home;