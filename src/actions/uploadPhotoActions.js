import {
  PREVIEW_PHOTO_REQUEST,
  PREVIEW_PHOTO_SUCCESS,
  PREVIEW_PHOTO_FAILURE,
  UPLOAD_PHOTO_REQUEST,
  UPLOAD_PHOTO_SUCCESS,
  UPLOAD_PHOTO_FAILURE,
} from './types';
import axios from 'axios';


export const previewPhotoRequest = () => ({
  type: PREVIEW_PHOTO_REQUEST
})

export const previewPhotoFailure = (error) => ({
  type: PREVIEW_PHOTO_FAILURE,
  error: error
})
