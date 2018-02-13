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
});
