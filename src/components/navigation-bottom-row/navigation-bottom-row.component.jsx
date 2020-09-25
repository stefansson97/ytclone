import React from 'react';
import './navigation-bottom-row.styles.scss';

function NavigationBottom(props) {
    
    return (
        <div className='navigation-bottom'>
            {props.children}
        </div>
    )
}

NavigationBottom.Row = (props) => <div className='navigation-bottom-row'>{props.children}</div>

NavigationBottom.Row.OneLine = (props) => <a href="/">{props.children}</a>

export default NavigationBottom;
