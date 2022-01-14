import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../modal';

const Header = ({
    className,
    style,
}) => {
    const [showLogin, setShowLogin] = useState(false);


    return (
        <nav className={`uk-navbar-container uk-margin ${className}`} style={style} data-uk-navbar>
            <a className="uk-navbar-item uk-logo">Rick And Morty</a>
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                    <li className="uk-active"><Link to="/">Home</Link></li>
                    <li ><Link to={'/episodes'}>Episodes</Link></li>
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
                        <button onClick={() => setShowLogin(true)} className='uk-icon-button uk-margin-right' data-uk-icon="user"></button>
                    </li>
                </ul>
            </div>

            <Modal style={{ width: '' }} title='Login' onClose={() => setShowLogin(false)} show={showLogin} footer={<button className='uk-button uk-align-center uk-button-primary' onClick={console.log}>Login</button>}>
                <form className='uk-form-stacked'>
                    <div className="uk-margin">
                        <label className='uk-form-label'>Username</label>
                        <div className="uk-inline uk-width-1-1">
                            <span className="uk-form-icon" data-uk-icon="icon: user"></span>
                            <input className="uk-input" type="text" />
                        </div>
                    </div>

                    <div className="uk-margin">
                        <label className='uk-form-label'>Passowrd</label>
                        <div className="uk-inline uk-width-1-1">
                            <span className="uk-form-icon" data-uk-icon="icon: lock"></span>
                            <input className="uk-input" type="password" />
                        </div>
                    </div>

                </form>
            </Modal>
        </nav>
    )
}

export default Header;