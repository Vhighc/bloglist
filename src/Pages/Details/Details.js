import Nav from '../../Components/Nav/Nav.js'
import cssGrid from '../..//Assets///Images//cssGrid.svg'
import Cards from '../../Components/Cards/Cards.js'
import classes from './Details.module.css'

const Details = () => {
  return (
    <div>
        <div className={classes.heading}>
            <Nav />
            <div className={classes.start}>
              <span className={classes.ryan}>By Ryan Jackson</span>
              <span className={classes.month}>2 Month Ago </span>
            </div>
                <h2>Optimizing CSS for faster page loads</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Nunc non blandit massa enim. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat.
                Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Tellus elementum sagittis vitae et leo duis ut diam.
                Eget nullam non nisi est sit amet. Dignissim suspendisse in est ante in nibh mauris.
                Nec feugiat in fermentum posuere urna. Diam in arcu cursus euismod quis viverra. 
                Facilisis mauris sit amet massa vitae tortor condimentum lacinia.
                Diam quam nulla porttitor massa id neque aliquam vestibulum morbi.
                Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.
                Sed elementum tempus egestas sed sed risus pretium quam vulputate.
                Lacus sed turpis tincidunt id aliquet risus feugiat in ante.
                Viverra nibh cras pulvinar mattis nunc sed blandit libero.
                Morbi tincidunt augue interdum velit euismod in.
                Accumsan lacus vel facilisis volutpat est velit egestas dui.
                Erat pellentesque adipiscing commodo elit at imperdiet.
                Quis risus sed vulputate odio ut.
                Nulla aliquet enim tortor at auctor urna.</p>
                <div className={classes.picCont}>
                    <img src={cssGrid} alt={cssGrid} />
                </div>
                <p>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Nunc non blandit massa enim. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat.
                Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Tellus elementum sagittis vitae et leo duis ut diam.
                Eget nullam non nisi est sit amet. Dignissim suspendisse in est ante in nibh mauris.
                Nec feugiat in fermentum posuere urna. Diam in arcu cursus euismod quis viverra.
                Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi.
                Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Sed elementum tempus egestas sed sed risus pretium quam vulputate.
                Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Viverra nibh cras pulvinar mattis nunc sed blandit libero.
                Morbi tincidunt augue interdum velit euismod in. Accumsan lacus vel facilisis volutpat est velit egestas dui.
                Erat pellentesque adipiscing commodo elit at imperdiet. Quis risus sed vulputate odio ut.
                Nulla aliquet enim tortor at auctor urna.
                </p>
                <p> Proin fermentum leo vel orci porta non pulvinar neque.
                In egestas erat imperdiet sed euismod nisi porta lorem.
                Metus vulputate eu scelerisque felis imperdiet proin fermentum.
                Luctus venenatis lectus magna fringilla. Nunc scelerisque viverra mauris in aliquam.
                Et molestie ac feugiat sed lectus vestibulum mattis.
                Sem et tortor consequat id porta nibh venenatis cras sed.
                Sed felis eget velit aliquet sagittis id. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem.
                Tincidunt ornare massa eget egestas purus viverra accumsan in.
                Aliquet lectus proin nibh nisl condime.
                </p>
                <h3>More Articles</h3>
                <Cards />
        </div>
    </div>
  )
}

export default Details;