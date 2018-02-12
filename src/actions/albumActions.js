import { addPhoto, renamePhoto, deletePhoto } from './photoActions';
import { ADD_ALBUM, RENAME_ALBUM, DELETE_ALBUM } from './types';

export const addAlbum = (name) => ({
  type: ADD_ALBUM,
  albumName: name
})

export const renameAlbum = (uuid, newName) => ({
  type: RENAME_ALBUM,
  albumUuid: uuid,
  albumNewName: newName
})

export const deleteAlbum = (uuid) => ({
  type: DELETE_ALBUM,
  albumUuid: uuid,
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
