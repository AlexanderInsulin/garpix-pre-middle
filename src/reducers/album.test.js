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
