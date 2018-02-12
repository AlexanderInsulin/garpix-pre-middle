import { ADD_PHOTO } from './types';
import { addPhoto, renamePhoto, deletePhoto } from './photoActions';

export const addPhotoToAlbum = (albumUuid, photoName, photoURL) => ({
  albumUuid: albumUuid,
  ...addPhoto(photoName, photoURL)
})

export const renamePhotoInAlbum = (albumUuid, photoUuid, newName) => ({
  albumUuid: albumUuid,
  ...renamePhoto(photoUuid, newName)
})

export const deletePhotoFromAlbum = (albumUuid, photoUuid) => ({
  albumUuid: albumUuid,
  ...deletePhoto(photoUuid)
})
