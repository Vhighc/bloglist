import classes from './Cards.module.css'
import grid from '../../Assets//Images/cssGrid.svg'
import arrow from '../../Assets//Images/arrow.svg'
import color from '../../Assets//Images/cssColor.svg'
import variable from '../../Assets//Images/cssVar.svg'
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <div className={classes.header}>
      {data.map((item, i) => (  
      <div>
        <img src={item.image} alt={grid} />
        <div className={classes.gridText}>
          <h6>{item.title}</h6>
          <h4>{item.subTitle}</h4>
          <p>{item.content}</p>
          <h5>{item.readTime}</h5>
          <Link to="/details">
          <button>
            Read Full 
            <img src={item.imageTwo} alt={arrow} />
          </button> 
          </Link>
        </div>
      </div>
       ))}
    </div>
  )
}

export default Cards;

   const data =[
    {
      title: 'Front-end . 1 month Ago',
      subTitle: 'Css Grid',
      image: grid,
      content: 'The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.',
      readTime: '12 Min Read',
      imageTwo: arrow
    },
    {
      title: 'Front-end . 2 month Ago',
      subTitle: 'Colors in Css',
      image: color,
      content: 'Colors play a vital role in making a web page usable or not. In CSS, we can control the foreground and background color of an element with the color and background properties.',
      readTime: '8 Min Read',
      imageTwo: arrow 
    },
    {
      title: 'Front-end . 2 month Ago',
      subTitle: 'Css Variables',
      image: variable,
      content: 'CSS variables are custom properties that cascade normally and even inherit. They start with a reserved -- prefix, and there are no real rules about their value.',
      readTime: '10 Min Read',
      imageTwo: arrow
    },
  ];