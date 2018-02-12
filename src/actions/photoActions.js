import { ADD_PHOTO, RENAME_PHOTO } from './types';

export const addPhoto = (name, href) => ({
  type: ADD_PHOTO,
  photoName: name,
  photoURL: href,
})

export const renamePhoto = (uuid, newName) => ({
  type: RENAME_PHOTO,
  photoUuid: uuid,
  photoNewName: newName
})
