import classes from './Opt.module.css'
import background from '../../Assets//Images/orangeBG.svg'
import arrow from '../../Assets//Images/arrow.svg'
import { Link } from 'react-router-dom';

const Opt = () => {
  return (
    <div className={classes.head}>
        <div className={classes.bgCont}>
            <img src={background} alt={background} />
        </div>
        <div className={classes.text}>
          <h6>Front-end . <span>1 Hour Ago</span></h6>
          <h4>Optimizing CSS for faster page loads </h4>
          <p>Not long ago I decided to improve the loading times of my website.
             It already loads pretty fast, but I knew there was still room for improvement and one of them was CSS loading.
             I will walk you through the process and show you how you can improve your load times as well.
          </p>
          <p>To see how CSS affects the load time of a webpage we first have to know
             how the browser converts an HTML document into a functional webpage...
          </p>
          <h5>3 Min Read</h5>
          <Link to="/details">
          <button>
            Read Full 
            <img src={arrow} alt={arrow} />
          </button> 
          </Link>
        </div>
    </div>
  )
}

export default Opt;