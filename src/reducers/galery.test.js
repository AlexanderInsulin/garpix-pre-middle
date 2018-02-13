import galery from './galery';
import actions from '../actions';
import { v4 } from 'uuid';

jest.mock('uuid', () => {
  return {
      v4: jest.fn(() => 1)
  };
});

describe('album reducer', () => {

  it('should add album to galery', () => {
    let albumName = 'album name';
    expect(galery(undefined, actions.album.addAlbum(albumName))).toEqual([
      {
        uuid: v4(),
        name: albumName,
        photos: []
      }
    ])
  });
})
