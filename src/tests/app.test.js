import React from 'react';
import App from '../App';
import Header from '../components/header/header.component';
import {render, fireEvent, cleanup} from '@testing-library/react';

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

    resizeWindow(654);

    expect(queryByTestId('hdr-arrow-back')).toBeNull();

    fireEvent.click(getByTestId('hdr-resp-srch-btn'));

    expect(queryByTestId('hdr-arrow-back')).toBeTruthy();

});

const resizeWindow = (width) => {
    window.innerWidth = width;
    window.dispatchEvent(new Event('resize'));
}