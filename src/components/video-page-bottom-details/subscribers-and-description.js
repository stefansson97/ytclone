export const getSubscribersShorten = (subscribers) => {
    const len = subscribers.toString().length;
    if(len === 1 || len === 2 || len === 3) {
        return (subscribers + ' subscribers');
    } else if(len === 4) {
        return Math.round((subscribers / 100) / 10 * 100) / 100 + 'K subscribers';
    } else if(len === 5) {
        return Math.round((subscribers / 1000) * 10) / 10 + 'K subscribers';
    } else if(len === 6) {
        return Math.round(subscribers / 1000) + 'K subscribers';
    } else if(len === 7 ) {
        return Math.round((subscribers / 100000) / 10 * 100) / 100 + 'M subscribers'
    } else if(len === 8) {
        return Math.round((subscribers / 1000000) * 10) / 10 + 'M subscribers';
    } else if(len === 9) {
        return Math.round(subscribers / 1000000) + 'M subscribers';
    } else if(len === 10) {
        return Math.round((subscribers / 100000000) / 10 * 100) / 100 + 'B subscribers';
    } else if (len === 11) {
        return Math.round((subscribers / 1000000000) * 10) / 10 + 'B subscribers';
    } else if(len === 12) {
        return Math.round(subscribers / 1000000000) + 'B subscribers';
    }
}

export const handleVideoDescription = (description) => {

    //thanks to https://stackoverflow.com/questions/14480345/how-to-get-the-nth-occurrence-in-a-string

    function getPosition(string, subString, index) {
        return string.split(subString, index).join(subString).length;
    }
    
    return description.slice(0, getPosition(description, '\n', 3));
}