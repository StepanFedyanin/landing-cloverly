import React from 'react'
import SwiperComponent from '../swiper/SwiperComponent';
import './IntegrationApi.scss'
import slide1 from '../../resources/image/slide1.png'
import slide2 from '../../resources/image/slide2.png'
import slide3 from '../../resources/image/slide3.png'
import slide4 from '../../resources/image/slide4.png'
import slide5 from '../../resources/image/slide5.png'
import slide6 from '../../resources/image/slide6.png'
import ButtonFirstContent from '../UI/Button/ButtonFirstContent/ButtonFirstContent';
import ButtonGreen from '../UI/Button/ButtonGreen/ButtonGreen';
import ButtonWhite from '../UI/Button/ButtonWhite/ButtonWhite';
function IntegrationApi() {
	const charImg = [
		{
			'photo': slide1,
			'description': 'Curl'

		},
		{
			'photo': slide2,
			'description': 'Ruby'

		}, {
			'photo': slide3,
			'description': 'Node'

		}, {
			'photo': slide4,
			'description': 'Go'

		}, {
			'photo': slide5,
			'description': 'Python'

		},
		{
			'photo': slide6,
			'description': 'PHP'
		}
	]
	return (
		<div className='IntegrationApi'>
			<div className="IntegrationApi__container">
				<div className="IntegrationApi__content">
					<div className='IntegrationApi__content--letter'>
						<div className="IntegrationApi__content--for">
							<p className='IntegrationApi__for--text'>For Developers, By Developers</p>
						</div>
						<div className="IntegrationApi__content--title">
							<h2 className='IntegrationApi__title--text'>Simple Integration. <br />RESTful API.</h2>
						</div>
					</div>
					<div className="IntegrationApi__content--description">
						<p className='IntegrationApi__description--text'>
							The Cloverly API calculates and offsets carbon emissions on a per-transaction basis. We can determine the amount of carbon emitted and offset that quantity by purchasing carbon offsets in real time. Explore our developer docs to find the right endpoints for your application, and sign up for free to get the Cloverly sandbox keys.
						</p>
					</div>
					<div className="IntegrationApi__content--btn">
						<ButtonGreen>Get API Keys</ButtonGreen>
						<ButtonWhite>Developer Docs</ButtonWhite>
					</div>
				</div>
				<div className="IntegrationApi__show">
					<SwiperComponent ContentArray={charImg} />
				</div>
				<div className="IntegrationApi__container IntegrationApi__letter">
					<div className="IntegrationApi__content">
						<div className="IntegrationApi__content--for">
							<p className='IntegrationApi__for--text'>For Developers, By Developers</p>
						</div>
						<div className="IntegrationApi__content--title">
							<h2 className='IntegrationApi__title--text'>Simple Integration. <br />RESTful API.</h2>
						</div>
					</div>
					<div />
				</div>
			</div>
		</div>


	)
}

export default IntegrationApi
