import { previewPhotoRequest, previewPhoto } from './uploadPhotoActions';
import { PREVIEW_PHOTO_REQUEST } from './types';

describe('test upload photo action creators', () => {

  test('should create preview photo request', () => {
    expect(previewPhotoRequest()).toEqual({
      type: PREVIEW_PHOTO_REQUEST
    })
  })
})
