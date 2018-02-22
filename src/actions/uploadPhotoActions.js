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

export const previewPhotoSuccess = (imageBase64) => ({
  type: PREVIEW_PHOTO_SUCCESS,
  image: imageBase64
})

export const previewPhotoFailure = (error) => ({
  type: PREVIEW_PHOTO_FAILURE,
  error: error
})

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
