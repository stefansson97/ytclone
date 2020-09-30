import { getViewsShorten, getDateShorten } from '../views-and-date-calc';

it('Testing views and date', () => {

    expect(getViewsShorten(4)).toBe('4 views');
    expect(getViewsShorten(1000)).toBe('1K views');
    expect(getViewsShorten(9999)).toBe('9.9K views');
    expect(getViewsShorten(10000)).toBe('10K views');
    expect(getViewsShorten(99999)).toBe('99K views');
    expect(getViewsShorten(100000)).toBe('100K views');
    expect(getViewsShorten(999999)).toBe('999K views');
    expect(getViewsShorten(1000000)).toBe('1M views');
    expect(getViewsShorten(1300000)).toBe('1.3M views');
    expect(getViewsShorten(999999999)).toBe('999M views');
    expect(getViewsShorten(1000000000)).toBe('1B views');
    expect(getViewsShorten(1300000000)).toBe('1.3B views');
    expect(getViewsShorten(999999999999)).toBe('999B views');

    let date1, date2;
    date1 = '2020-07-06T12:00:00Z';

    date2 = '2020-07-06T11:59:00Z';

    expect(getDateShorten(new Date(date2), new Date(date1))).toBe('1 minute ago');

    date2 = '2020-07-06T11:55:00Z';

    expect(getDateShorten(new Date(date2), new Date(date1))).toBe('5 minutes ago');

    date2 = '2020-07-06T11:00:00Z';

    expect(getDateShorten(new Date(date2), new Date(date1))).toBe('1 hour ago');

    date2 = '2020-07-06T07:00:00Z';

    expect(getDateShorten(new Date(date2), new Date(date1))).toBe('5 hours ago');

    date2 = '2020-07-05T12:00:00Z';

    expect(getDateShorten(new Date(date2), new Date(date1))).toBe('1 day ago');

    date2 = '2020-07-01T12:00:00Z';

    expect(getDateShorten(new Date(date2), new Date(date1))).toBe('5 days ago');

    date2 = '2020-06-29T12:00:00Z';

    expect(getDateShorten(new Date(date2), new Date(date1))).toBe('1 week ago');

    date2 = '2020-06-20T12:00:00Z';

    expect(getDateShorten(new Date(date2), new Date(date1))).toBe('2 weeks ago');

    date2 = '2020-06-06T12:00:00Z';

    expect(getDateShorten(new Date(date2), new Date(date1))).toBe('1 month ago');

    date2 = '2020-02-06T12:00:00Z';

    expect(getDateShorten(new Date(date2), new Date(date1))).toBe('5 months ago');

    date2 = '2019-07-06T12:00:00Z';

    expect(getDateShorten(new Date(date2), new Date(date1))).toBe('1 year ago');

    date2 = '2015-07-06T12:00:00Z';

    expect(getDateShorten(new Date(date2), new Date(date1))).toBe('5 years ago');
    
});