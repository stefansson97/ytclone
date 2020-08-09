import NavigationToggleActionTypes from './navigation-toggle.types';

export const setNavigationToggle = () => ({
    type: NavigationToggleActionTypes.SET_NAVIGATION_TOGGLE
});

export const navigatioToggleError = error => ({
    type: NavigationToggleActionTypes.NAVIGATION_TOGGLE_ERROR,
    payload: error
});