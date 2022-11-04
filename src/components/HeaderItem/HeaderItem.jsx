import ButtonWhite from '../UI/Button/ButtonWhite/ButtonWhite';
import './HeaderItem.scss';
import logo from '../../resources/image/Frame.svg'
import { useRef } from 'react';
const Header = () => {
	const header = useRef('*');
	const nav = useRef('*')

	const HeaderBurger = () => {
		header.current.classList.toggle("activeHeader")
		nav.current.classList.toggle("activeNav")
	}
	return (
		<header className='Header' ref={header}>
			<div className="Header__container">
				<div className="Header__info">
					<div className="Header__logo">
						<img src={logo} alt="" />
					</div>
					<nav className="nav" ref={nav}>
						<ul className="nav--list">
							<li className="nav__list--item"><a>Product</a></li>
							<li className="nav__list--item"><a>Use Cases</a></li>
							<li className="nav__list--item"><a>Developers</a></li>
							<li className="nav__list--item"><a>Pricing</a></li>
							<li className="nav__list--item"><a>About</a></li>
						</ul>
					</nav>
				</div>
				<div className="Login">
					<div className="Login__a">
						<a href="">Login</a>
					</div>
					<div className="Button__api">
						<ButtonWhite>Get API Keys</ButtonWhite>
					</div>
				</div>
				<div className="Burger" onClick={HeaderBurger}>
					<span></span>
				</div>
			</div>

		</header>
	)
}

export default Header;