const getAlbums = () =>
  ({
    type: 'GET_ALBUMS',
  });

const getAlbumImages = (id) =>
  ({
    type: 'GET_ALBUM_IMAGES',
    payload: id,
  });


export { getAlbums, getAlbumImages };
