import { addPhoto } from './photoActions';
import { ADD_PHOTO } from './types';

describe('test photo actions', () => {

  test('should add photo', () => {
    let name = 'name';
    let href = 'http://www.text2image.com/user_images/text2image_F64329_20180209_034923.png';
    expect(addPhoto(name, href)).toEqual({
      type: ADD_PHOTO,
      photoName: name,
      photoURL: href
    })
  });
});
