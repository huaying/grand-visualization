const setFullScreen = (fullScreen) => {
  if (fullScreen) {
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.height = 'auto';
    document.body.style.overflow = 'inherit';
  }
};

export default setFullScreen;
