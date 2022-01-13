import * as React from 'react';
import { Link } from 'react-router-dom';

const Header = ({
    className,
    style,
}) => {
    return (
        <nav className={`uk-navbar-container uk-margin ${className}`} style={style} data-uk-navbar>
            <a className="uk-navbar-item uk-logo">Rick And Morty</a>
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                    <li className="uk-active"><Link to="/">Home</Link></li>
                    <li ><a>Episodes</a></li>
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
            </div>
            <div className="uk-navbar-right">
                <ul className='uk-navbar-nav'>
                    <li>
                        <a><span className='uk-icon-button' data-uk-icon="user"></span></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;