import classes from './Nav.module.css'
import logo from '../../Assets//Images/DasdasLogo.svg'
import twitter from '../../Assets//Images/twitter.svg'
import dot from '../../Assets//Images/Dot.svg'
import ball from '../../Assets//Images/dribbble.svg'
import figma from '../../Assets//Images/figma.svg'
import github from '../../Assets//Images/github.svg'

const Nav = () => {
  return (
    <div className={classes.main}>
        <div className={classes.logoCont}><img src={logo} alt={logo} /></div>
        <div className={classes.navImages}>
        <img src={twitter} alt={twitter} />
        <img className={classes.dot} src={dot} alt={dot} />
        <img src={ball} alt={ball} />
        <img className={classes.dot} src={dot} alt={dot} />
        <img src={figma} alt={figma} />
        <img className={classes.dot} src={dot} alt={dot} />
        <img src={github} alt={github} />
        </div>
    </div>
  )
}

export default Nav;