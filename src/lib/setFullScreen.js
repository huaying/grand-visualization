const preventDefault = (e) => e.preventDefault();

const setFullScreen = (fullScreen) => {
  if (fullScreen) {
    document.body.className = 'fullscreen';
    document.body.addEventListener('touchmove', preventDefault);
  } else {
    document.body.className = '';
    document.body.removeEventListener('touchmove', preventDefault);
  }
};

export default setFullScreen;
