import {FocusLock} from '../utils/focus-lock';
import {ScrollLock} from '../utils/scroll-lock';

const focusLock = new FocusLock();
const scrollLock = new ScrollLock();

export const initMenu = function () {
  const menu = document.querySelector('[data-menu]');
  const menuBtn = document.querySelector('[data-menu-button]');
  const menuLink = document.querySelectorAll('.header__site-menu a[href^="#"]');


  const onMenuEscKeydown = (evt) => {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      closeMenu();
    }
  };

  const overlayClose = (evt) => {
    const target = evt.target;
    if (!target.closest('.is-open .header__nav')) {
      closeMenu();
    }
  };

  function openMenu() {
    menu.classList.add('is-open');
    focusLock.lock('.header');
    scrollLock.disableScrolling();
    document.addEventListener('keydown', onMenuEscKeydown);
    document.addEventListener('click', overlayClose);
  }

  function closeMenu() {
    menu.classList.remove('is-open');
    focusLock.unlock();
    scrollLock.enableScrolling();
    document.removeEventListener('keydown', onMenuEscKeydown);
    document.removeEventListener('click', overlayClose);
  }

  function initmenu() {
    if (menu.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }


  menuBtn.addEventListener('click', initmenu);
  menuLink.forEach((closer) => closer.addEventListener('click', closeMenu));
};
