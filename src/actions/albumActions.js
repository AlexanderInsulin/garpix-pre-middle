import { addPhoto, renamePhoto, deletePhoto } from './photoActions';
import { ADD_ALBUM } from './types';

export const addAlbum = (name) => ({
  type: ADD_ALBUM,
  albumName: name
})

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
