import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './navbar.module.css'
import ToggleMenu from './Toggle/ToggleMenu'
import { ReactComponent as Close } from '../../assets/icons/close.svg'
import { Box } from '@mui/system'

const Navbar = () => {
	const [show, setShow] = useState(false)
	const activeStyle = ({ isActive }) => {
		return isActive ? { color: '#dca061' } : null
	}
	return (
		<header className={styles.header}>
			<Link className={styles.header__logo} to={'/'}>
				Sofia Mebel
			</Link>
			<nav>
				<NavLink
					style={activeStyle}
					className={styles.nav__item}
					to={'/category'}
				>
					Каталог
				</NavLink>
				<NavLink
					style={activeStyle}
					className={styles.nav__item}
					to={'/delivery'}
				>
					Доставка
				</NavLink>
				<NavLink style={activeStyle} className={styles.nav__item} to={'/about'}>
					О нас
				</NavLink>
			</nav>
			<Link className={styles.header__btn} to={'/contact'}>
				Контакты
			</Link>
			{!show ? (
				<div onClick={() => setShow(!show)} className={styles.header__toggle}>
					<div className={styles.header__toggle_item}></div>
					<div className={styles.header__toggle_item}></div>
				</div>
			) : (
				<Close
					onClick={() => setShow(false)}
					className={styles.header__toggle_close}
				/>
			)}
			{show && <ToggleMenu changeVisible={setShow} />}
		</header>
	)
}
export default Navbar
