import CarWidget from "../CartWidget/CartWidget"
import { NavLink, Link} from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <h3>GNVG</h3>
            </Link>
            <div className="Categorias">
                <NavLink to={`/category/pantalones`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pantalones</NavLink>
                <NavLink to={`/categoy/remeras`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Remeras</NavLink>
                <NavLink to={`/category/accesorios`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
            </div>
            <CarWidget/>
        </nav>
    )
}
export default NavBar

