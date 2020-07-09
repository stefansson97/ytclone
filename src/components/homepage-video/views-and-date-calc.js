export const getViewsShorten = (views) => {
    const len = views.toString().length;
    if(len === 1 || len === 2 || len === 3) {
        return (views + ' views');
    } else if(len === 4) {
        return Math.floor(views / 100) / 10 + 'K views';
    } else if(len === 5 || len === 6) {
        return Math.floor(views / 1000) + 'K views';
    } else if(len === 7 ) {
        return Math.floor(views / 100000) / 10 + 'M views'
    } else if(len === 8 || len === 9) {
        return Math.floor(views / 1000000) + 'M views';
    } else if(len === 10) {
        return Math.floor(views / 100000000) / 10 + 'B views';
    } else if (len === 11 || len === 12) {
        return Math.floor(views / 1000000000) + 'B views';
    }
}

export const getDateShorten = (date) => {
    let date1 = new Date(date);
    let date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60)); 
    if (diffHours < 1) {
        const time = Math.floor(diffHours * 60);
        if (time === 1) {
            return time + ' minute ago'
        } else  {
            return time + ' minutes ago'
        }
    } else if(diffHours >= 1 &&diffHours < 24) {
       if (diffHours === 1) {
           return diffHours + ' hour ago'
       } else  {
           return diffHours + ' hours ago'
       }
    } else if(diffHours >= 24 && diffHours < 168) {
        const time = Math.floor(diffHours / 24);
        if(time === 1) {
            return time + ' day ago' 
        } else {
            return time + ' days ago'
        }  
    } else if(diffHours >= 168 && diffHours < 720) {
        const time = Math.floor(diffHours / 168);
        if(time === 1) {
            return time + ' week ago' 
        } else {
            return time + ' weeks ago'
        }
        
    } else if(diffHours >= 720 && diffHours < 8760) {
        const time = Math.floor(diffHours / 720);
        if(time === 1) {
            return time + ' month ago' 
        } else {
            return time + ' months ago'
        }
    } else {
        const time = Math.floor(diffHours / 8760);
        if(time === 1) {
            return time + ' year ago' 
        } else {
            return time + ' years ago'
        }
    }
}

export const getTitleShorten = (title) => {
    if(title.length <= 50) {
        return title;
    } else {
        return title.slice(0, 50) + '...';
    }
}