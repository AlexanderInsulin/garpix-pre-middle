import actions from '../actions';
import { v4 } from 'uuid';

const initialState = {
  uuid: 0,
  name: '',
  imageURL: ''
}

export const photo = (state = initialState, action) => {
  switch (action.type) {
    case actions.types.ADD_PHOTO:
      return {
        uuid: v4(),
        name: action.photoName,
        imageURL: action.photoURL
      }
    case actions.types.RENAME_PHOTO:
      return {...state, name: action.photoNewName}
    default:
      return state;
  }
}

export default photo;
