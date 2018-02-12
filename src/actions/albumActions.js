import { ADD_PHOTO } from './types';
import { addPhoto } from './photoActions';

export const addPhotoToAlbum = (albumUuid, photoName, photoURL) => ({
  albumUuid: albumUuid,
  ...addPhoto(photoName, photoURL)
})
