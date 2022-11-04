import React from 'react'
import './Industry.scss';
import ButtonDark from '../UI/Button/ButtonDark/ButtonDark';
import ecommerce from '../../resources/image/ecommerce.svg'
import flights from '../../resources/image/flights.svg'
import energy from '../../resources/image/energy.svg'
import fintech from '../../resources/image/fintech.svg'
import rideshare from '../../resources/image/rideshare.svg'
import enterprise from '../../resources/image/enterprise.svg'
import supply from '../../resources/image/supply.svg'
import fleet from '../../resources/image/fleet.svg'

function Industry() {
	return (
		<div className="IndustryContainer">
			<div className="IndustryContent">
				<div className="IndustryInfo">
					<div className="IndustrySpan">
						<span>Use Cases</span>
					</div>
					<div className="IndustryTitle">
						<p>Used in Every Environment, to Save the Environment</p>
					</div>
					<div className="IndustryText">
						There are many sources of carbon emissions, including some that we don't typically associate with environmental impacts. For example, even cloud computing requires physical servers powered by electricity. Below are a few common use cases for carbon offsetting.
					</div>
				</div>

				<div className="IndustryItems">
					<div className="IndustryItem">
						<div className="IndustryItem--img">
							<img src={ecommerce} alt="" />
						</div>
						<div className="IndustryItem--info">
							<div className="IndustryItem--title">
								<p>Ecommerce</p>
							</div>
							<div className="IndustryItem--text">
								<p>See how Cloverly partners are offsetting ecommerce shipments through Shopify, BigCommerce, Magento, and custom integrations.</p>
							</div>
							<div className="IndustryItem--span">
								<span>Learn more</span>
							</div>
						</div>
					</div>
					<div className="IndustryItem">
						<div className="IndustryItem--img">
							<img src={rideshare} alt="" />
						</div>
						<div className="IndustryItem--info">
							<div className="IndustryItem--title">
								<p>Rideshare</p>
							</div>
							<div className="IndustryItem--text">
								<p>Miles traveled and carbon emitted can be easily calculated and offset in real time with Cloverly.</p>
							</div>
							<div className="IndustryItem--span">
								<span>Learn more</span>
							</div>
						</div>
					</div>
					<div className="IndustryItem">
						<div className="IndustryItem--img">
							<img src={flights} alt="" />
						</div>
						<div className="IndustryItem--info">
							<div className="IndustryItem--title">
								<p>Flights</p>
							</div>
							<div className="IndustryItem--text">
								<p>Take off the carbon impact of aviation. With the Cloverly API, calculate and offset miles flown and impact generated.</p>
							</div>
							<div className="IndustryItem--span">
								<span>Learn more</span>
							</div>
						</div>
					</div>
					<div className="IndustryItem">
						<div className="IndustryItem--img">
							<img src={enterprise} alt="" />
						</div>
						<div className="IndustryItem--info">
							<div className="IndustryItem--title">
								<p>Enterprise Resource Planning</p>
							</div>
							<div className="IndustryItem--text">
								<p>Learn how enterprise software companies are using the Cloverly integration to offset their environmental effects.</p>
							</div>
							<div className="IndustryItem--span">
								<span>Learn more</span>
							</div>
						</div>
					</div>
					<div className="IndustryItem">
						<div className="IndustryItem--img">
							<img src={energy} alt="" />
						</div>
						<div className="IndustryItem--info">
							<div className="IndustryItem--title">
								<p>Energy</p>
							</div>
							<div className="IndustryItem--text">
								<p>Find out how the energy industry is using carbon offsets to make a difference and create a more sustainable world.</p>
							</div>
							<div className="IndustryItem--span">
								<span>Learn more</span>
							</div>
						</div>
					</div>
					<div className="IndustryItem">
						<div className="IndustryItem--img">
							<img src={supply} alt="" />
						</div>
						<div className="IndustryItem--info">
							<div className="IndustryItem--title">
								<p>Supply Chain</p>
							</div>
							<div className="IndustryItem--text">
								<p>Calculate offsets based on your supply chain, make a difference, and see how others are doing it, too.</p>
							</div>
							<div className="IndustryItem--span">
								<span>Learn more</span>
							</div>
						</div>
					</div>
					<div className="IndustryItem">
						<div className="IndustryItem--img">
							<img src={fintech} alt="" />
						</div>
						<div className="IndustryItem--info">
							<div className="IndustryItem--title">
								<p>Fintech</p>
							</div>
							<div className="IndustryItem--text">
								<p>Cloverly can help identify carbon footprints based on financial transaction data and purchase the offsets needed to mitigate these effects.</p>
							</div>
							<div className="IndustryItem--span">
								<span>Learn more</span>
							</div>
						</div>
					</div>
					<div className="IndustryItem">
						<div className="IndustryItem--img">
							<img src={fleet} alt="" />
						</div>
						<div className="IndustryItem--info">
							<div className="IndustryItem--title">
								<p>Fleet</p>
							</div>
							<div className="IndustryItem--text">
								<p>You track mileage and fuel economy for your vehicle fleet. So you already have the data the Cloverly API needs to calculate and offset the carbon impact.</p>
							</div>
							<div className="IndustryItem--span">
								<span>Learn more</span>
							</div>
						</div>
					</div>
				</div>

				<div className="IndustryContact">
					<div className="IndustryContact--title">
						Don't See Your Industry?
					</div>
					<div className="IndustryContact--text">
						Cloverly can accommodate a variety of use cases for many different carbon-producing activities. Even if you don't see your industry here or you're not sure what activities to offset, we can help. Reach out to Cloverly and let us get you on the path to net-zero carbon emissions.
					</div>
					<div className="IndustryContact--button">
						<div className="IndustryContact--button_item">
							<ButtonDark>Contact Us</ButtonDark>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Industry