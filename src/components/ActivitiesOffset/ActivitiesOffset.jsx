import React from 'react'
import './ActivitiesOffset.scss'
import ButtonFirstContent from '../UI/Button/ButtonFirstContent/ButtonFirstContent'
import ButtonGreen from '../UI/Button/ButtonGreen/ButtonGreen'
import ButtonGreenBorder from '../UI/Button/ButtonGreenBorder/ButtonGreenBorder'
function ActivitiesOffset() {
	return (
		<div className='ActivitiesOffset'>
			<div className="ActivitiesOffset__container">
				<div className="ActivitiesOffset__advertising">
					<div className="ActivitiesOffset__advertising--title">
						<h2 className='ActivitiesOffset__title--style'>What Activities Will You Offset?</h2>
					</div>
					<div className="ActivitiesOffset__advertising--info">
						<p className='ActivitiesOffset__info--text'>Neutralize your carbon footprint with the Cloverly API.</p>
					</div>
					<div className="ActivitiesOffset__advertising--btn">
						<ButtonGreen>Try Cloverly</ButtonGreen>
					</div>
				</div>
				<div className="ActivitiesOffset__news">
					<div className="ActivitiesOffset__news--for">
						<p className='ActivitiesOffset__for--text'>Cloverly Blog</p>
					</div>
					<div className="ActivitiesOffset__news--title">
						<h2 className='ActivitiesOffset__title--style'>The Latest in the World of Sustainability</h2>
					</div>
					<div className="ActivitiesOffset__news--btn">
						<ButtonGreenBorder>Read More</ButtonGreenBorder>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ActivitiesOffset