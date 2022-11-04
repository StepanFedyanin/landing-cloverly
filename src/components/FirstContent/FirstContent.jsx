import React from 'react'
import './FirstContent.scss';
import ButtonTransparent from '../UI/Button/ButtonTransparent/ButtonTransparent';
import ButtonWhite from '../UI/Button/ButtonWhite/ButtonWhite';
import ButtonDark from '../UI/Button/ButtonDark/ButtonDark';
import imgSponsor from '../../resources/image/sponsor.png'

function FirstContent() {
	return (
		<div className='FirstContent'>
			<div className="FirstContent__container">
				<div className='FirstContent__help'>
					<div className='help__btntop'>
						<ButtonTransparent>Sustainability on Demand</ButtonTransparent>
					</div>
					<div className='help__content'>
						<div className='help__content--title'>
							<h1>Helping the World<br />Go Carbon Neutral</h1>
						</div>
						<div className='help__content--text'>
							<p>Our Sustainability-as-a-Service platform calculates and purchases carbon offsets to neutralize the environmental impact of everyday activities like ecommerce deliveries, ridesharing, flights, and more.</p>
						</div>
					</div>
					<div className='help__btnbottom'>
						<div className="help__btnbottom--item">
							<ButtonWhite>Get Started</ButtonWhite>
						</div>
						<div className="help__btnbottom--item">
							<ButtonDark>Let's Talk</ButtonDark>
						</div>
					</div>
				</div>

				<div className='help__sponsor'>
					<img src={imgSponsor} alt="" />
				</div>
			</div>

		</div>
	)
}

export default FirstContent