import React from 'react';
import './screen.styles.scss';
import Navigation from '../navigation/navigation.component';
import Content from '../content/content.component';


function Screen() {
    return (
        <div className='screen'>
            <Navigation />
            <Content />
        </div>
    )
}

export default Screen;