import { previewPhotoRequest, previewPhotoFailure } from './uploadPhotoActions';
import { PREVIEW_PHOTO_REQUEST, PREVIEW_PHOTO_FAILURE } from './types';

describe('test upload photo action creators', () => {

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
})
