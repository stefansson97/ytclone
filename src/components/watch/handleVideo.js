export function handleVideoId(id) {
    return (id.substring('?v='.length));
}

//thanks to https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' likes';
}

export function formatDate(publishDate) {
    let date = new Date(publishDate);
    let month = '';
    switch(date.getMonth() + 1) {
        case 1:
            month = 'Jan';
            break;
        case 2:
            month = 'Feb'
            break;
        case 3:
            month = 'Mar';
            break;
        case 4:
            month = 'Apr'
            break;
        case 5:
            month = 'May';
            break;
        case 6:
            month = 'Jun'
            break;
        case 7:
            month = 'Jul';
            break;
        case 8:
            month = 'Aug'
            break;
        case 9:
            month = 'Sep';
            break;
        case 10:
            month = 'Oct'
            break;
        case 11:
            month = 'Nov';
            break;
        case 12:
            month = 'Dec'
            break;        
        default:
            break;
    }
    return (month + ' ' + date.getDate() + ', ' + date.getFullYear());
}

//wrote the function for views handling in components/homepage-video/views-and-date-calc
//replaced views with likes 

export const getLikesShorten = (likes) => {
    const len = likes.toString().length;
    if(len === 1 || len === 2 || len === 3) {
        return (likes);
    } else if(len === 4) {
        return Math.floor(likes / 100) / 10 + 'K';
    } else if(len === 5 || len === 6) {
        return Math.floor(likes / 1000) + 'K';
    } else if(len === 7 ) {
        return Math.floor(likes / 100000) / 10 + 'M'
    } else if(len === 8 || len === 9) {
        return Math.floor(likes / 1000000) + 'M';
    } else if(len === 10) {
        return Math.floor(likes / 100000000) / 10 + 'B';
    } else if (len === 11 || len === 12) {
        return Math.floor(likes / 1000000000) + 'B';
    }
}