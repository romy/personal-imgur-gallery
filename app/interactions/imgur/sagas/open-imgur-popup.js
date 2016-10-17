const clientId = process.env.CLIENT_ID;
const url = `https://api.imgur.com/oauth2/authorize?client_id=${clientId}&response_type=token`;
const popupName = 'imgur';

const calculatePopupSize = () => {
  const height = 600;
  const width = 600;

  const left = (window.innerWidth / 2) - (width / 2);
  const top = (window.innerHeight / 2) - (height / 2.5);

  return `left=${left},top=${top},height=${height},width=${width}`;
};

const openImgurPopup = () =>
  window.open(url, popupName, calculatePopupSize());


export default openImgurPopup;
