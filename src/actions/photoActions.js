import { ADD_PHOTO } from './types';

export const addPhoto = (name, href) => ({
  type: ADD_PHOTO,
  photoName: name,
  photoURL: href,
})
