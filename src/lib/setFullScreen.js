const setFullScreen = (fullScreen) => {
  if (fullScreen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'inherit';
    document.body.style.overflowX = 'hidden';
  }
};

export default setFullScreen;
