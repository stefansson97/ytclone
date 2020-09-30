import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import Watch from '../components/watch/watch.component';
import axiosMock from '../__mocks__/axios';
import {itemsForContentPage, itemsForWatchPage} from '../__mocks__/items';
import Header from '../components/header/header.component';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';

afterEach(cleanup);

it('Checking if toggling between two styles of the side navbar works', async () => {

    axiosMock.get.mockResolvedValue({ data: {items: itemsForContentPage} })

    const { getByText, getByTestId, queryByText, getAllByAltText } = render(<App />);

    expect(getByText(/Gaming/i).textContent).toBe('Gaming'); //by default this button is shown

    fireEvent.click(getByTestId('hamb-btn'));

    expect(queryByText(/Gaming/i)).toBeNull(); // it's removed

    fireEvent.click(getByTestId('hamb-btn'));

    expect(getByText(/Gaming/i).textContent).toBe('Gaming'); // it's shown again

    //to make sure test does not prematurely exit before component finished rendering
    await waitFor(() => expect(getAllByAltText('video-preview-img')[0]).toBeTruthy())
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

it('Clicking on the logo in the header directs to the homepage', async () => {

    axiosMock.get.mockResolvedValue({ data: {items: itemsForContentPage} })
    
    const  { getAllByAltText, getByTestId, getByText, getByAltText } = render(<MemoryRouter>
        <App />
    </MemoryRouter>);

    //to make sure test does not prematurely exit before component finished rendering
    await waitFor(() => expect(getAllByAltText('video-preview-img')[0]).toBeTruthy())

    fireEvent.change(getByTestId('header-search-input'), {target: {value: 'Test' }});

    fireEvent.submit(getByTestId('header-search-form'));

    expect(getByText('FILTER').textContent).toBe('FILTER');

    fireEvent.click(getByAltText('header-logo-img'))
    
    expect(getByText(/Recommended/i).textContent).toBe('Recommended');

    //to make sure test does not prematurely exit before component finished rendering
    //because we get back to the homepage by clicking the logo
    await waitFor(() => expect(getAllByAltText('video-preview-img')[0]).toBeTruthy())
});



it('Checking if we can set only whitespaces as a search query', async () => {

    axiosMock.get.mockResolvedValue({ data: {items: itemsForContentPage} })

    const { getByText, getByTestId, getAllByAltText } = render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
    
    fireEvent.change(getByTestId('header-search-input'), {target: {value: ' ' }});

    fireEvent.submit(getByTestId('header-search-form'));

    expect(getByText(/Recommended/i).textContent).toBe('Recommended');
    
    //to make sure test does not prematurely exit before component finished rendering
    await waitFor(() => expect(getAllByAltText('video-preview-img')[0]).toBeTruthy())
    
});

it('Checking the show more/show less button on /watch page', async () => {
    axiosMock.get.mockResolvedValue({ data: itemsForWatchPage })

    const { getByText, getByTestId} = render(
        <MemoryRouter>
            <Watch />
        </MemoryRouter>
    );

    await waitFor(() => expect(getByText(/SHOW MORE/i).textContent).toBe('SHOW MORE'));
    fireEvent.click(getByText(/SHOW MORE/i))
    expect(getByText(/SHOW LESS/i).textContent).toBe('SHOW LESS')

    //to make sure test does not prematurely exit before component finished rendering
    await waitFor(() => expect(getByTestId('embedded-video-test-id')).toBeTruthy())
});
