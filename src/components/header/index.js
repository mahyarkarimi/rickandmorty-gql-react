import * as React from 'react';
import { Link } from 'react-router-dom';
const Header = ({
    className,
    style,
}) => {
    return (
        <nav className={`uk-navbar-container uk-margin ${className}`} style={style} data-uk-navbar>
            <div className="uk-navbar">
            <a className="uk-navbar-item uk-logo">Rick And Morty</a>
                <div className="uk-navbar-center-right"><div>
                    <ul className="uk-navbar-nav">
                        <li className="uk-active"><Link to="/">Home</Link></li>
                        <li>
                            <a href="#">More</a>
                            <div className="uk-navbar-dropdown">
                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                    <li className="uk-active"><a >More</a></li>
                                    <li><a >About</a></li>
                                    <li><a >Contact Us</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div></div>

            </div>
        </nav>
    )
}

export default Header;