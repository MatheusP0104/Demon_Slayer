import { NavLink } from "react-router-dom"

function Navbar(){
    return(
        <nav className="navbar">
                <NavLink to="/" end >Início</NavLink>
                <NavLink to="/hashiras">Hashiras</NavLink>
                <NavLink to="/sobre">Sobre</NavLink>
        </nav>
    )
}

export default Navbar