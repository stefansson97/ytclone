import { numberWithCommas, formatDate, getLikesShorten } from '../handle-video';

it('Number of the views should be formatted with commas', () => {

    expect(numberWithCommas('2')).toBe('2 views');
    expect(numberWithCommas('22')).toBe('22 views');
    expect(numberWithCommas('222')).toBe('222 views');
    expect(numberWithCommas('2222')).toBe('2,222 views');
    expect(numberWithCommas('22222')).toBe('22,222 views');
    expect(numberWithCommas('222222')).toBe('222,222 views');
    expect(numberWithCommas('2222222')).toBe('2,222,222 views');
    expect(numberWithCommas('22222222')).toBe('22,222,222 views');
    expect(numberWithCommas('222222222')).toBe('222,222,222 views');
    expect(numberWithCommas('2222222222')).toBe('2,222,222,222 views');
    expect(numberWithCommas('22222222222')).toBe('22,222,222,222 views');
    expect(numberWithCommas('222222222222')).toBe('222,222,222,222 views');

});

it('Formatted date', () => {

    expect(formatDate('2020-01-31T08:13:44Z')).toBe('Jan 31, 2020');
    expect(formatDate('2019-02-28T08:13:44Z')).toBe('Feb 28, 2019');
    expect(formatDate('2018-03-26T08:13:44Z')).toBe('Mar 26, 2018');
    expect(formatDate('2017-04-24T08:13:44Z')).toBe('Apr 24, 2017');
    expect(formatDate('2016-05-21T08:13:44Z')).toBe('May 21, 2016');
    expect(formatDate('2015-06-20T08:13:44Z')).toBe('Jun 20, 2015');
    expect(formatDate('2014-07-16T08:13:44Z')).toBe('Jul 16, 2014');
    expect(formatDate('2013-08-13T08:13:44Z')).toBe('Aug 13, 2013');
    expect(formatDate('2012-09-11T08:13:44Z')).toBe('Sep 11, 2012');
    expect(formatDate('2011-10-10T08:13:44Z')).toBe('Oct 10, 2011');
    expect(formatDate('2010-11-07T08:13:44Z')).toBe('Nov 7, 2010');
    expect(formatDate('2009-12-04T08:13:44Z')).toBe('Dec 4, 2009');

});


it('Checking if the likes are formatted correctly', () => {

    expect(getLikesShorten(4)).toBe('4');
    expect(getLikesShorten(1000)).toBe('1K');
    expect(getLikesShorten(9999)).toBe('9.9K');
    expect(getLikesShorten(10000)).toBe('10K');
    expect(getLikesShorten(99999)).toBe('99K');
    expect(getLikesShorten(100000)).toBe('100K');
    expect(getLikesShorten(999999)).toBe('999K');
    expect(getLikesShorten(1000000)).toBe('1M');
    expect(getLikesShorten(1300000)).toBe('1.3M');
    expect(getLikesShorten(999999999)).toBe('999M');
    expect(getLikesShorten(1000000000)).toBe('1B');
    expect(getLikesShorten(1300000000)).toBe('1.3B');
    expect(getLikesShorten(999999999999)).toBe('999B');
    
});