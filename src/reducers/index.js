import { combineReducers } from 'redux';
import galery from './galery';
import uploadPhoto from './uploadPhoto';

const reducers = combineReducers({
  galery,
  uploadPhoto
})

export default reducers;
