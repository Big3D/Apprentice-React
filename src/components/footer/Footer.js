import './footer-css.css'
import logoFoot from '../../images/logo-white.svg'
import {ReactComponent as FbIcon} from '../../images/icon-facebook.svg'
import {ReactComponent as IgIcon} from '../../images/icon-instagram.svg'
import {ReactComponent as TwIcon} from '../../images/icon-twitter.svg'

function Footer(){
    return <ul className='footDiv'>
            <div className='leftFoot'>
            <li className='leftFootLink'>Our Work</li>
            <li className='leftFootLink'>About Us</li>
            <li className='leftFootLink'>Contact</li>
            </div>
            <li className='logoFoot'><img src={logoFoot} alt="Webber Ltd Logo" /></li>
            <div className='rightFoot'>
            <li className='rightFootLink'><FbIcon/></li>
            <li className='rightFootLink'><IgIcon/></li>
            <li className='rightFootLink'><TwIcon/></li>
            </div>
        </ul>
}

export default Footer