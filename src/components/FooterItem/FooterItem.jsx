import React from 'react'
import ButtonFirstContent from '../UI/Button/ButtonFirstContent/ButtonFirstContent'
import './FooterItem.scss'
import logo from '../../resources/image/Frame.svg'
import { useState } from 'react'
import ButtonGreen from '../UI/Button/ButtonGreen/ButtonGreen'
function FooterItem() {
	const [isVisibleProduct, setIsVisibleProduct] = useState(true)
	const [isVisibleCases, setIsVisibleCases] = useState(true)
	const [isVisibleDevelopers, setIsVisibleDevelopers] = useState(true)
	const [isVisibleAbout, setIsVisibleAbout] = useState(true)

	const openListProduct = (e) => {
		if (isVisibleProduct) {
			setIsVisibleProduct(false)
			setIsVisibleCases(true)
			setIsVisibleDevelopers(true)
			setIsVisibleAbout(true)

		} else {
			setIsVisibleProduct(true)
		}
	}
	const openListCases = (e) => {
		if (isVisibleCases) {
			setIsVisibleProduct(true)
			setIsVisibleCases(false)
			setIsVisibleDevelopers(true)
			setIsVisibleAbout(true)
		} else {
			setIsVisibleCases(true)
		}
	}
	const openListDevelopers = (e) => {
		if (isVisibleDevelopers) {
			setIsVisibleProduct(true)
			setIsVisibleCases(true)
			setIsVisibleDevelopers(false)
			setIsVisibleAbout(true)
		} else {
			setIsVisibleDevelopers(true)
		}
	}
	const openListAbout = (e) => {
		if (isVisibleAbout) {
			setIsVisibleProduct(true)
			setIsVisibleCases(true)
			setIsVisibleDevelopers(true)
			setIsVisibleAbout(false)
		} else {
			setIsVisibleAbout(true)
		}
	}
	return (
		<div className='footer'>
			<div className="footer__container">
				<div className="footer__item footer__item--top">
					<div className="footer__item--logo">
						<img src={logo} alt="logo" />
					</div>
					<div className="footer__item--input">
						<div className="footer__input--element">
							<a href="#" className='footer__element--login'>Login</a>
						</div>
						<div className="footer__input--element">
							<ButtonGreen>
								Get API Keys
							</ButtonGreen>
						</div>
					</div>
				</div>
				<div className="footer__item">
					<nav className='footer__nav'>
						<div className="footer__nav--item">
							<div className="footer__nav--title" onClick={openListProduct}>
								<p className={isVisibleProduct ? 'footer__title--style' : 'footer__title--style color--change '}>Product</p>
							</div>
							<div className={isVisibleProduct ? 'footer__nav--list' : 'footer__nav--list active'}>
								<ul className='footer__list-items'>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>Emission Calculations</a>
									</li>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>Diverse Offset Portfolio</a>
									</li>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>Matching the Offset</a>
									</li>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>Transparent Reporting</a>
									</li>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>Flexible API Integration</a>
									</li>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>Verified Carbon Offsets</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="footer__nav--item">
							<div className="footer__nav--title" onClick={openListCases}>
								<p className={isVisibleCases ? 'footer__title--style' : 'footer__title--style color--change '}>Use Cases</p>
							</div>
							<div className={isVisibleCases ? 'footer__nav--list' : 'footer__nav--list active'}>
								<ul className='footer__list-items'>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>Ecommerce</a>
									</li>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>Rideshare</a>
									</li>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>Flights</a>
									</li>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>Enterprise Resource Planning</a>
									</li>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>Energy</a>
									</li>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>Supply Chain</a>
									</li>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>Fintech </a>
									</li>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>Fleet</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="footer__nav--item">
							<div className="footer__nav--title" onClick={openListDevelopers}>
								<p className={isVisibleDevelopers ? 'footer__title--style' : 'footer__title--style color--change '}>Developers</p>
							</div>
							<div className={isVisibleDevelopers ? 'footer__nav--list' : 'footer__nav--list active'}>
								<ul className='footer__list-items'>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>API Docs</a>
									</li>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>Ask Cloverly</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="footer__nav--item">
							<div className="footer__nav--title" onClick={openListAbout}>
								<p className={isVisibleAbout ? 'footer__title--style' : 'footer__title--style color--change '}>About</p>
							</div>
							<div className={isVisibleAbout ? 'footer__nav--list' : 'footer__nav--list active'}>
								<ul className='footer__list-items'>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>How It Works</a>
									</li>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>Offset Projects</a>
									</li>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>Partners</a>
									</li>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>About Us</a>
									</li>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>Blog</a>
									</li>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>News & Press</a>
									</li>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>Contact</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="footer__nav--item">
							<div className="footer__nav--title">
								<p className="footer__title--style"></p>
							</div>
							<div className="footer__nav--list">
								<ul className='footer__list-items'>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>FAQ</a>
									</li>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>Careers</a>
									</li>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>Terms of Service</a>
									</li>
									<li className='footer__list--item'>
										<a href="" className='footer__list--link'>Privacy Policy</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
				<div className="footer__item footer__item--bottom">
					<div className="footer__item--tag">
						<p className="footer__tag--text">© 2020 Cloverly</p>
					</div>
				</div>
			</div>

		</div>
	)
}

export default FooterItem