import React from 'react';
import './navigation-line.styles.scss';

function NavigationLine({iconName, lineText, fa = '', responsive = false, img='', alt}) {
    if(fa !== '') {
        return (
            <>  <div className={responsive ? 'navigation-line-responsive' : 'navigation-line'}>
                    <i className={fa}></i>
                    <p className={responsive ? '' : 'navigation-line-text'}>{lineText}</p>
                </div>
            </>
        )
    } else if(img !== '') {
        return (
            <>  <div className='navigation-line'>
                    <img src={require(`${img}`)} alt={alt} className='navigation-line-img'></img>
                    <p className='navigation-line-text'>{lineText}</p>
                </div>
            </>
        )
    } else {
        return(
            <>  <div className={responsive ? 'navigation-line-responsive' : 'navigation-line'}>
                    <i className="material-icons">{iconName}</i>
                    <p className={responsive ? '' : 'navigation-line-text'}>{lineText}</p>
                </div>
            </>
        )
    }

}

export default NavigationLine;