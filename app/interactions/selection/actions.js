const deselectAlbum = () =>
  ({
    type: 'DESELECT_ALBUM',
  });

const selectAlbum = (id) =>
  ({
    type: 'SELECT_ALBUM',
    payload: { id },
  });


export { deselectAlbum, selectAlbum };
