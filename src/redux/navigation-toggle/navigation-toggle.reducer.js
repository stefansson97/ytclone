
//using redux to handle clicking the hamburger button in the header
//it changes between two types of sidebar navigation style and few components depend on it 

import NavigationToggleActionTypes from './navigation-toggle.types';

const INITIAL_STATE = {
    navigationToggle: false,
    error: null
};

const navigationToggleReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case NavigationToggleActionTypes.SET_NAVIGATION_TOGGLE:
        return {
          ...state,
          navigationToggle: !state.navigationToggle,
          error: null
        };
      case NavigationToggleActionTypes.NAVIGATION_TOGGLE_ERROR:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default navigationToggleReducer;

