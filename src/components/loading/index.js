import React from 'react';
import './style.scss';

const Loading = (props) => (
    <div className='loading'>
        <div className='lds-grid'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
                <div style={{ background: props.color || '#555555' }}></div>
            ))}
        </div>
    </div>
)

export const LoadingPage = (props) => (
    <div style={{flex:1, display:'flex', justifyContent:'space-around', alignItems:'center'}}>
        <Loading color={props.color} />
    </div>
)

export default Loading;