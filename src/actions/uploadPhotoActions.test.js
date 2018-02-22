import {
  previewPhotoRequest,
  previewPhotoFailure,
  previewPhotoSuccess
} from './uploadPhotoActions';
import {
  PREVIEW_PHOTO_REQUEST,
  PREVIEW_PHOTO_FAILURE,
  PREVIEW_PHOTO_SUCCESS
} from './types';

describe('test preview photo action creators', () => {

  test('should create preview photo request action', () => {
    expect(previewPhotoRequest()).toEqual({
      type: PREVIEW_PHOTO_REQUEST
    })
  })

  test('should create preview photo faulure action', () => {
    let error = 'some error';
    expect(previewPhotoFailure(error)).toEqual({
      type: PREVIEW_PHOTO_FAILURE,
      error: error
    })
  })

  test('should create preview photo success action', () => {
    let imageBase64 = 'data:image/png;base64,someImage';
    expect(previewPhotoSuccess(imageBase64)).toEqual({
      type: PREVIEW_PHOTO_SUCCESS,
      image: imageBase64
    })
  })
})
