import {
  PREVIEW_PHOTO_REQUEST,
  PREVIEW_PHOTO_SUCCESS,
  PREVIEW_PHOTO_FAILURE,
  UPLOAD_PHOTO_REQUEST,
  UPLOAD_PHOTO_SUCCESS,
  UPLOAD_PHOTO_FAILURE,
} from './types';
import addPhotoToAlbum from './albumActions';
import axios from 'axios';

export const previewPhoto = (photoFile) => (dispatch) => {
  dispatch(previewPhotoRequest());
  let reader = new FileReader();
  reader.readAsDataURL(photoFile);
  reader.onload = () => {
    dispatch(previewPhotoSuccess(reader.result))
  }
  reader.onerror = (e) => {
    dispatch(previewPhotoFailure(e))
  }
}

export const previewPhotoRequest = () => ({
  type: PREVIEW_PHOTO_REQUEST
})

export const previewPhotoSuccess = (imageBase64) => ({
  type: PREVIEW_PHOTO_SUCCESS,
  image: imageBase64
})

export const previewPhotoFailure = (error) => ({
  type: PREVIEW_PHOTO_FAILURE,
  error: error
})

export const uploadPhoto = (albumUuid, photoName, imageBase64) => (dispatch) => {
  axios.post('https://api.imgur.com/3/image', {
    title: photoName,
    image: imageBase64
  }, {
    headers: { 'Authorization': 'Client-ID 6a5400948b3b376' },
  }).then((res) => {
    dispatch(uploadPhotoSuccess(albumUuid, photoName, res.data.data.link))
    dispatch(addPhotoToAlbum(albumUuid, photoName, res.data.data.link))
  })
    .catch((error) => uploadPhotoFailure(error))
}

export const uploadPhotoRequest = () => ({
  type: UPLOAD_PHOTO_REQUEST
})

export const uploadPhotoSuccess = (imageURL) => ({
  type: UPLOAD_PHOTO_SUCCESS,
  imageURL: imageURL
})

export const uploadPhotoFailure = (error) => ({
  type: UPLOAD_PHOTO_FAILURE,
  error: error
})
