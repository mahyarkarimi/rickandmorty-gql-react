import React from 'react';

const Error = () => (
    <div className='uk-width-1-1 uk-height-1-1' style={{ flex: 1 }} data-uk-scrollspy="cls: uk-animation-fade; target: .error; delay: 100">
        <div class="uk-text-center error">
            <span style={{ padding: '16px', borderRadius: '50%', backgroundColor:'#55555555'}} data-uk-icon="icon: warning; ratio: 3.5"></span>
            <h2>Sorry, an error occured <span>&#128549;</span></h2>
            <p>Try again later</p>
        </div>
    </div>
)
export default Error;