export const initNoJs = function () {
  if (document.querySelector('.no-js')) {
    document.querySelector('.no-js').classList.remove('no-js');
  }
};
