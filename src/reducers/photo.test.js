import photo from './photo';
import actions from '../actions';
import { v4 } from 'uuid';

jest.mock('uuid', () => {
  return {
      v4: jest.fn(() => 1)
  };
});

describe('photo reducer', () => {

  it('should create photo', () => {
    let name = 'photo name';
    let url = 'photo url';
    expect(photo(undefined, actions.photo.addPhoto(name, url))).toEqual({
      uuid: v4(),
      name: name,
      imageURL: url
    })
  });

  it('should rename photo', () => {
    let p = photo(undefined, actions.photo.addPhoto('name', 'url'));
    let uuid = p.uuid;
    let newName = 'new photo name';
    expect(photo(p, actions.photo.renamePhoto(uuid, newName))).toEqual({
      uuid: v4(),
      name: newName,
      imageURL: p.imageURL,
    })
  });
});
