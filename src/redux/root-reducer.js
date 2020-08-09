import { combineReducers } from 'redux';

import navigationToggleReducer from './navigation-toggle/navigation-toggle.reducer';


const rootReducer = combineReducers({
  navigationToggle: navigationToggleReducer
});

export default rootReducer;