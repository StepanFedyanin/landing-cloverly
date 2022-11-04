import React from 'react'
import './Connection.scss';
import ButtonGreenBorder from '../UI/Button/ButtonGreenBorder/ButtonGreenBorder';
import item1 from '../../resources/image/item1.svg'
import item2 from '../../resources/image/item2.svg'
import item3 from '../../resources/image/item3.svg'

function Connection() {
	return (
		<div className="ConnectionContainer">
			<div className="ConnectionContent">
				<div className="ConnectionLeft">
					<div className="ConnectionInfo">
						<div className="ConnectionSpan">
							<span>How It Works</span>
						</div>
						<div className="ConnectionTitle">
							<p>Connecting the Carbon Offset Infrastructure for a More Sustainable World</p>
						</div>
						<div className="ConnectionText">
							<p>Businesses and consumers count on Cloverly to offset their carbon footprint and create positive environmental change based on real-time business activities. Whether you implement our ready-to-use applications or install our API as part of a custom integration, Cloverly can help you go greener, faster.</p>
						</div>
					</div>

					<div className="ConnectionButton">
						<div className="ConnectionButton--item">
							<ButtonGreenBorder>Learn More</ButtonGreenBorder>
						</div>
					</div>
				</div>
				<div className="ConnectionRight">
					<div className="ConnectionItem">
						<div className="ConnectionItem--img">
							<img src={item1} alt="" />
						</div>
						<div className="ConnectionItem--title">
							<p>Matching the Offset</p>
						</div>
						<div className="ConnectionItem--text">
							<p>The Cloverly API can find and match the best offset per transaction. If your customer orders a product in California, for example, we might partner with an improved forest management project in California to keep the benefit local.</p>
						</div>
					</div>
					<div className="ConnectionItem">
						<div className="ConnectionItem--img">
							<img src={item2} alt="" />
						</div>
						<div className="ConnectionItem--title">
							<p>Transaction Transparency</p>
						</div>
						<div className="ConnectionItem--text">
							<p>We believe in transparency and fully validated transactions. That's why every time you (or your customers) choose to offset an emission-producing activity with Cloverly, we provide real-time transactional data to show the location, type, and amount of carbon offset.</p>
						</div>
					</div>
					<div className="ConnectionItem">
						<div className="ConnectionItem--img">
							<img src={item3} alt="" />
						</div>
						<div className="ConnectionItem--title">
							<p>Verified Sources</p>
						</div>
						<div className="ConnectionItem--text">
							<p>To effectively neutralize carbon emissions, we know that quality matters. That's why Cloverly works with reputable, internationally recognized suppliers who track and verify registered carbon offset projects.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Connection