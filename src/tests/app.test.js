import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import Header from '../components/header/header.component';
import {render, cleanup, fireEvent} from '@testing-library/react';
import { getViewsShorten, getDateShorten } from '../components/homepage-video/views-and-date-calc';
import handleSearchQuery from '../components/results/handleSearchQuery';
import { getSubscribersShorten } from '../components/video-page-bottom-details/subscribers-and-description';
import { numberWithCommas, formatDate, getLikesShorten } from '../components/watch/handleVideo';

afterEach(cleanup);

it('Checking if toggling between two styles of side navbar works', () => {

    const { getByText, getByTestId, queryByText } = render(<App />);

    expect(getByText(/Gaming/i).textContent).toBe('Gaming'); //by default this button is shown

    fireEvent.click(getByTestId('hamb-btn'));

    expect(queryByText(/Gaming/i)).toBeNull(); // it's removed

    fireEvent.click(getByTestId('hamb-btn'));

    expect(getByText(/Gaming/i).textContent).toBe('Gaming'); // it's shown again

});

it('On change of width header input becomes responsive', () => {

    const { queryByTestId, getByTestId } = render(<Header />);

    const resizeWindow = (width) => {
        window.innerWidth = width;
        window.dispatchEvent(new Event('resize'));
    }

    resizeWindow(654);

    expect(queryByTestId('hdr-arrow-back')).toBeNull();

    fireEvent.click(getByTestId('hdr-resp-srch-btn'));

    expect(queryByTestId('hdr-arrow-back')).toBeTruthy();

});

it('Clicking on the logo in header directs to homepage', () => {

    const { getByAltText, getByText, getByTestId } = render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
    
    fireEvent.change(getByTestId('header-search-input'), {target: {value: 'Test' }});

    fireEvent.submit(getByTestId('header-search-form'));

    expect(getByText('FILTER').textContent).toBe('FILTER');

    fireEvent.click(getByAltText('header-logo-img'));

    expect(getByText(/Recommended/i).textContent).toBe('Recommended');
    
});

it('Checking if we can set only whitespaces as a search query', () => {

    const { getByText, getByTestId } = render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
    
    fireEvent.change(getByTestId('header-search-input'), {target: {value: ' ' }});

    fireEvent.submit(getByTestId('header-search-form'));

    expect(getByText(/Recommended/i).textContent).toBe('Recommended');
    
});

it('Making sure our search query is properly set from the URL', () => {

    expect(handleSearchQuery('?search_query=a+b+c')).toBe('a b c');

    //multiple whitespaces
    expect(handleSearchQuery('?search_query=+a+++b++c++')).toBe(' a   b  c  ');
    
});

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

it('On individual video page we are setting number of subscribers to be shorten', () => {

    expect(getSubscribersShorten('2')).toBe('2 subscribers');
    expect(getSubscribersShorten('22')).toBe('22 subscribers');
    expect(getSubscribersShorten('222')).toBe('222 subscribers');
    expect(getSubscribersShorten('2222')).toBe('2.22K subscribers');
    expect(getSubscribersShorten('22222')).toBe('22.2K subscribers');
    expect(getSubscribersShorten('222222')).toBe('222K subscribers');
    expect(getSubscribersShorten('2222222')).toBe('2.22M subscribers');
    expect(getSubscribersShorten('22222222')).toBe('22.2M subscribers');
    expect(getSubscribersShorten('222222222')).toBe('222M subscribers');
    expect(getSubscribersShorten('2222222222')).toBe('2.22B subscribers');
    expect(getSubscribersShorten('22222222222')).toBe('22.2B subscribers');
    expect(getSubscribersShorten('222222222222')).toBe('222B subscribers');

});

it('Number of views should be formatted with commas', () => {

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


it('Checking if likes are formatted correctly', () => {

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