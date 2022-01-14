import React from 'react';
import { Link } from 'react-router-dom';

const Empty = () => (
    <div className='uk-width-1-1 uk-height-1-1' style={{ flex: 1 }} data-uk-scrollspy="cls: uk-animation-fade; target: .empty; delay: 100">
        <div class="uk-text-center empty">
            <span style={{ padding: '16px', borderRadius: '50%', backgroundColor:'#55555555'}} data-uk-icon="icon: folder; ratio: 3.5"></span>
            <h2>No Result found</h2>
            <p>Try another page or <Link to={'/'} className='uk-button uk-button-secondary'>Go to Home</Link></p>
        </div>
    </div>
)
export default Empty;