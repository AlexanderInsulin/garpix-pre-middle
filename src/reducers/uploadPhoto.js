import actions from '../actions';

const initialState = {
  albumUuid: '',
  name: '',
  imageBase64: '',
  imageURL: '',
  load: false,
  error: ''
}

const uploadPhoto = (state = initialState, action) => {
  switch (action.type) {
    case actions.types.PREVIEW_PHOTO_REQUEST:
      return {...state, load: true}
    case actions.types.PREVIEW_PHOTO_SUCCESS:
      return {...state, imageBase64: action.image, load: false}
    case actions.types.PREVIEW_PHOTO_FAILURE:
      return {...state, error: action.error, load: false}
    case actions.types.UPLOAD_PHOTO_REQUEST:
      return {...state, load: true}
    case actions.types.UPLOAD_PHOTO_SUCCESS:
      return {...state, imageURL: action.imageURL, load: false}
    case actions.types.UPLOAD_PHOTO_FAILURE:
      return {...state, error: action.error, load: false}
    default:
      return state;
  }
}

export default uploadPhoto;
