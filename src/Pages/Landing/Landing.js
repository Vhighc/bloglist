import classes from  './Landing.module.css'
import Nav from '../../Components/Nav/Nav.js'
import Opt from '../../Components/Opt/Opt.js'
import Cards from '../../Components/Cards/Cards.js'
import Footer from '../../Components/Footer/Footer.js'

const Landing = () => {
  return (
    <div>
      <div className={classes.navigate}>
      <Nav />
      </div>
      <div className={classes.optimize}>
      <Opt />
      </div>
      <div className={classes.cssCards}>
      <Cards />
      </div>
      <Cards />
      <div className={classes.foot}>
        <Footer />
      </div>
    </div>
  )
}

export default Landing;