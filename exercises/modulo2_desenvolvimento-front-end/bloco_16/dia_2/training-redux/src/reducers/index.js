import { combineReducers } from 'react-redux';
import myReducer from './myReducer';

const rootReducer = combineReducers({
  myReducer,
});

export default rootReducer;