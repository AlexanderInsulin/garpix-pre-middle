import actions from '../actions';
import album from './album';

const galery = (state = [], action) => {
  switch (action.type) {
    case actions.types.ADD_ALBUM:
      return [...state, album(undefined, action)]
    default:
      return state.map(a => album(a, action))
  }
}

export default galery;
