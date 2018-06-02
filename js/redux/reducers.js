import { combineReducers } from 'redux';
import favesReducer from './modules/Favourites';

export default combineReducers({
    faves: favesReducer
});
