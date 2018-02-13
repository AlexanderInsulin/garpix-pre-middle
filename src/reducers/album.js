import actions from '../actions';
import { v4 } from 'uuid';

const initialState = {
    uuid: 0,
    name: '',
    photos: []
}

const album = (state = initialState, action) => {
  switch (action.type) {
    case actions.types.ADD_ALBUM:
      return {
        uuid: v4(),
        name: action.albumName,
        photos: []
      }
    case actions.types.RENAME_ALBUM:
      return {...state, name: action.albumNewName}
    default:
      return state
  }
}

export default album;
