import { addPhoto, renamePhoto, deletePhoto} from './photoActions';
import { ADD_PHOTO, RENAME_PHOTO, DELETE_PHOTO } from './types';

describe('test photo action creators', () => {

  test('should add photo', () => {
    let name = 'name';
    let href = 'http://www.text2image.com/user_images/text2image_F64329_20180209_034923.png';
    expect(addPhoto(name, href)).toEqual({
      type: ADD_PHOTO,
      photoName: name,
      photoURL: href
    })
  });

  test('should rename photo', () => {
    let uuid = 1;
    let newName = 'new name';
    expect(renamePhoto(uuid, newName)).toEqual({
      type: RENAME_PHOTO,
      photoUuid: uuid,
      photoNewName: newName
    })
  });

  test('should delete photo', () => {
    let uuid = 1;
    expect(deletePhoto(uuid)).toEqual({
      type: DELETE_PHOTO,
      photoUuid: uuid,
    })
  });
});
