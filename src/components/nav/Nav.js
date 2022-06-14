import './nav-css.css'
import logo from '../../images/logo.svg'

function Navbar() {
    return <ul className='navbar'>
        <li className='logoImage'><img src={logo} alt="" /></li>
        <div className='rightNav'>
            <li className='rightLink'><a href="http://" target="_blank" rel="noopener noreferrer"> Our Work </a></li>
            <li className='rightLink'><a href="http://" target="_blank" rel="noopener noreferrer"> About Us </a></li>
            <li className='rightLink'><a href="http://" target="_blank" rel="noopener noreferrer"> Contact </a></li>
        </div>
    </ul>
}
export default Navbar