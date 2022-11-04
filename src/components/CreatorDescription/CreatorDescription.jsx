import React from 'react'
import './CreatorDescription.scss'
import sponsorCreator from '../../resources/image/sponsorCreator.png'
import ButtonFirstContent from '../UI/Button/ButtonFirstContent/ButtonFirstContent'
import ButtonGreenBorder from '../UI/Button/ButtonGreenBorder/ButtonGreenBorder'
function CreatorDescription() {
	return (
		<div className='CreatorDescription'>
			<div className="CreatorDescription__container">
				<div className="CreatorDescription__container--content">
					<div className="CreatorDescription__content">
						<div className="CreatorDescription__content--for">
							<p className="CreatorDescription__for--text">Partner Spotlight</p>
						</div>
						<div className="CreatorDescription__content--conference">
							<p className='CreatorDescription__conference--text'>
								<span>
									At the JOIN data conference
								</span>
								, the team from Looker (now part of Google) used data provided by attendees to determine the carbon footprint of their travel to the conference and offset it with Cloverly.
							</p>
						</div>
						<div className="CreatorDescription__content--quotes">
							<p className='CreatorDescription__quotes--style'>“ ”</p>
						</div>
						<div className="CreatorDescription__content--ask">
							<p className='CreatorDescription__ask--text'>
								We built a little Javascript application to let you select how much of your carbon footprint you wanted to offset and then got an estimated price via Cloverly, which provides a simple API for purchasing Renewable Energy Certificates (RECs). Once we had the estimate from Cloverly, which helpfully tells you not just cost, but also where the RECs you're purchasing will come from, we approved the purchase and executed it via the API.
							</p>
						</div>

						<div className="CreatorDescription__content--askMore">
							<span className='CreatorDescription__askMore--text'>Read Full Story</span>
						</div>
						<div className="CreatorDescription__content--sponsor">
							<div className='CreatorDescription__sponsor--block'>
								<img src={sponsorCreator} alt="sponsorCreator" />
							</div>
							<div className="CreatorDescription__sponsor--block">
								<p className='CreatorDescription__block--text'>Daniel Mintz</p>
								<p className='CreatorDescription__block--text'>Chief Data Evangelist at Looker</p>
							</div>
						</div>
						<div className="CreatorDescription__content--sponsorMore">
							<ButtonGreenBorder>More Partners</ButtonGreenBorder>
						</div>
					</div>

				</div>
			</div>

		</div>
	)
}

export default CreatorDescription