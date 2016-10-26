const deselectAlbum = () =>
  ({
    type: 'DESELECT_ALBUM',
  });

const getAlbumImages = (id) =>
  ({
    type: 'GET_ALBUM_IMAGES',
    payload: { id },
  });


export { deselectAlbum, getAlbumImages };
