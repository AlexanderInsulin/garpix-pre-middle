import { addPhoto, renamePhoto, deletePhoto } from './photoActions';
import {
  addPhotoToAlbum,
  renamePhotoInAlbum,
  deletePhotoFromAlbum
} from './albumActions';


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

  it('should delete photo from album', () => {
    let albumUuid = 1;
    let photoUuid = 10;
    expect(deletePhotoFromAlbum(albumUuid, photoUuid)).toEqual({
      albumUuid: albumUuid,
      ...deletePhoto(photoUuid)
    })
  });
});
