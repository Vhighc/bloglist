import classes from './Footer.module.css'

const Footer = () => {
  return (
    <div className={classes.start}>
        <div className={classes.footerText}>
            <h2>Join our Team of Writers</h2>
            <p>On dasdas, writers earn a living doing what they love.</p>
            <p>Getting started is easy. Just pay a one time <span className={classes.dollar}>$25 fee</span> and everything is ready to go.</p>
            <button>JOIN US</button>
        </div>
    </div>
  )
}

export default Footer;