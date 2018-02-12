import { ADD_PHOTO } from './types';
import { addPhotoToAlbum, renamePhotoInAlbum } from './albumActions';
import { addPhoto, renamePhoto } from './photoActions';


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

  it('should rename photo in album', () => {
    let albumUuid = 1;
    let photoUuid = 10;
    let newName = 'new name';
    let photoURL = 'image';
    expect(renamePhotoInAlbum(albumUuid, photoUuid, newName)).toEqual({
      albumUuid: albumUuid,
      ...renamePhoto(photoUuid, newName)
    })
  });
});
