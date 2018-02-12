import { ADD_PHOTO } from './types';
import { addPhotoToAlbum } from './albumActions';
import { addPhoto } from './photoActions';


describe('test galery action creators', () => {

  it('should add photo to album', () => {
    let uuid = 1;
    let photoName = 'name';
    let photoURL = 'image';
    expect(addPhotoToAlbum(uuid, photoName, photoURL)).toEqual({
      albumUuid: uuid,
      ...addPhoto(photoName, photoURL)
    })
  });
});
