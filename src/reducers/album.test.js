import album from './album';
import actions from '../actions';
import { v4 } from 'uuid';

jest.mock('uuid', () => {
  return {
      v4: jest.fn(() => 1)
  };
});

describe('album reducer', () => {

  it('should create album', () => {
    let name = 'album name';
    expect(album(undefined, actions.album.addAlbum(name))).toEqual({
      uuid: v4(),
      name: name,
      photos: []
    });
  });

  it('should rename album', () => {
    let name = 'album name';
    let a = album(undefined, actions.album.addAlbum(name))
    let uuid = a.uuid;
    let newName = 'new album name';
    expect(album(a, actions.album.renameAlbum(uuid, newName))).toEqual({
      uuid: v4(),
      name: newName,
      photos: []
    });
  });
});

describe('album reducer actions with photos', () => {

  let a;
  beforeEach(() => {
    a = album(undefined, 'album name');
  });

  it('should add photo to album', () => {
    let photoName = 'photo name';
    let photoImage = 'photo image';
    expect(album(a,
      actions.album.addPhotoToAlbum(a.uuid, photoName, photoImage))).toEqual({
        uuid: a.uuid,
        name: a.name,
        photos: [
          {
            uuid: 1,
            name: photoName,
            imageURL: photoImage
          }
        ]
      });
  });
})
