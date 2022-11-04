import React from 'react'
import './Map.scss';
import ButtonDark from '../UI/Button/ButtonDark/ButtonDark';
import ButtonGreen from '../UI/Button/ButtonGreen/ButtonGreen';
import map from '../../resources/image/map.svg'

function Map() {
	return (
		<div className="MapContent">
			<div className="MapInfo">
				<div className="MapSpan">
					<span>Cloverly API</span>
				</div>
				<div className="MapTitle">
					<p className='MapTitle__text'>Offset Your Carbon Footprint in Real Time</p>
				</div>
				<div className="MapText">
					<p className='MapText__text'>Cloverly's powerful API calculates the impact of common carbon-intensive activities in real time and uses verified, quality carbon offset projects to neutralize them. Ready to get started? Create an account to integrate the Cloverly API for free, or contact us for custom solutions.</p>
				</div>
			</div>
			<div className="MapButton">
				<div className="MapButton--item">
					<ButtonGreen>Get Started for Free</ButtonGreen>
				</div>
				<div className="MapButton--item">
					<ButtonDark>Let's Talk</ButtonDark>
				</div>
			</div>
			<div className="MapImage">
				<img src={map} alt="" />
			</div>
		</div>
	)
}

export default Map