import {
  previewPhotoRequest,
  previewPhotoFailure,
  previewPhotoSuccess,
  uploadPhotoRequest,
  uploadPhotoFailure,
  uploadPhotoSuccess
} from './uploadPhotoActions';
import {
  PREVIEW_PHOTO_REQUEST,
  PREVIEW_PHOTO_FAILURE,
  PREVIEW_PHOTO_SUCCESS,
  UPLOAD_PHOTO_REQUEST,
  UPLOAD_PHOTO_SUCCESS,
  UPLOAD_PHOTO_FAILURE,
} from './types';

describe('test preview photo action creators', () => {

  test('should create preview photo request action', () => {
    expect(previewPhotoRequest()).toEqual({
      type: PREVIEW_PHOTO_REQUEST
    })
  })

  test('should create preview photo success action', () => {
    let imageBase64 = 'data:image/png;base64,someImage';
    expect(previewPhotoSuccess(imageBase64)).toEqual({
      type: PREVIEW_PHOTO_SUCCESS,
      image: imageBase64
    })
  })

  test('should create preview photo faulure action', () => {
    let error = 'some error';
    expect(previewPhotoFailure(error)).toEqual({
      type: PREVIEW_PHOTO_FAILURE,
      error: error
    })
  })
})

describe('test upload photo action creators', () => {

  test('should create upload photo request action', () => {
    expect(uploadPhotoRequest()).toEqual({
      type: UPLOAD_PHOTO_REQUEST
    })
  })

  test('should create upload photo success action', () => {
    let imageURL = 'https://someurl.com';
    expect(uploadPhotoSuccess(imageURL)).toEqual({
      type: UPLOAD_PHOTO_SUCCESS,
      imageURL: imageURL
    })
  })

  test('should create upload photo faulure action', () => {
    let error = 'some error';
    expect(uploadPhotoFailure(error)).toEqual({
      type: UPLOAD_PHOTO_FAILURE,
      error: error
    })
  })
})
