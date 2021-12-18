import React from 'react'
import './navbar.css'

const NavBar = () => {
    return (
        <nav>
            <div class="nav-wrapper">
            <a href="#" class="brand-logo center"><h5 className="TitleText">SWINKYSWONKY HVA GÅR I NEBBET???</h5></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li className="NavBarText">Vanskelighetsgrad</li>
                <li className="NavBarText">Temaer</li>
            </ul>
            </div>
        </nav>
    )
}

export default NavBar


