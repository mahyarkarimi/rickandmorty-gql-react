import * as React from 'react';
const Footer = ({
    className,
    style
}) => {
    return (
        <nav style={style} className={`uk-background-muted ${className}`}>
            <div style={{ padding: '8px 16px 32px 16px' }} className="uk-grid-small uk-child-width-1-2@m uk-grid-match" data-uk-grid>
                <div className="uk-margin-auto">
                    <h4>Links</h4>
                    <ul className="uk-list uk-list-disc uk-list-emphasis">
                        <li><a href='https://rickandmortyapi.com/graphql'>API Link</a></li>
                        <li><a href='https://reactjs.org/'>React JS</a></li>
                        <li><a href='https://getuikit.com/'>UIKit</a></li>
                    </ul>
                </div>
                <div className="uk-margin-auto">
                    <h4>Contact Us</h4>
                    <ul className="uk-list uk-list-disc uk-list-primary">
                        <li>Phone: <a onClick={() => window.open('tel:+1 (555) 555 55555')}>+1 (555) 555 55555</a></li>
                        <li>Email: <a onClick={() => window.open('mailto:info@support.com')}>info@support.com</a></li>
                        <li>Address: lorem, ipsum, dolor</li>

                    </ul>
                </div>
            </div>
            <p style={{ letterSpacing:'4px'}} className='uk-text-center'>Social Accounts</p>
            <div className='uk-flex uk-align-center uk-width-medium uk-flex-between'>
                
                {['facebook', 'instagram', 'twitter', 'discord', 'whatsapp'].map(i => (
                    <span style={{padding:'0 4px 4px 4px'}} className='uk-button uk-button-text' data-uk-icon={i}></span>
                ))}
            </div>
            <div className='uk-background-secondary uk-text-muted uk-text-center'>
                MKi
            </div>
        </nav>
    )
}

export default Footer;