import CarWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link} from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <h2>GRL-GNVG</h2>
            </Link>
            <div className="Categorias">
                <NavLink to={`/category/pantalones`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pantalones</NavLink>
                <NavLink to={`/category/remeras`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Remeras</NavLink>
                <NavLink to={`/category/accesorios`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
            </div>
            <CarWidget/>
        </nav>
    )
}
export default NavBar

