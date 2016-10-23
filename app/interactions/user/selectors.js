const selectToken = (state) =>
  state.getIn(['user', 'token']);

const selectUsername = (state) =>
  state.getIn(['user', 'username']);


export { selectToken, selectUsername };
