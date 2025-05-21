import { setupModal } from './main.js';

setupModal({
  openSelector: "[data-menu-open-header]",
  closeSelector: "[data-menu-close-header]",
  modalSelector: "[data-menu]",
  closeOnLink: true,
});

setupModal({
  openSelector: "[data-menu-open]",
  closeSelector: "[data-menu-close]",
  modalSelector: "[data-menu]",
  closeOnLink: true,
});

setupModal({
  openSelector: "[data-menu1-open]",
  closeSelector: "[data-menu1-close]",
  modalSelector: "[data-menu1]",
  closeOnLink: true,
});

setupModal({
  openSelector: "[data-menu2-open]",
  closeSelector: "[data-menu2-close]",
  modalSelector: "[data-menu2]",
  closeOnLink: true,
});

setupModal({
  openSelector: "[data-menu3-open]",
  closeSelector: "[data-menu3-close]",
  modalSelector: "[data-menu3]",
  closeOnLink: true,
});

setupModal({
  openSelector: "[data-menu-open-main]",
  closeSelector: "[data-menu-close-main]",
  modalSelector: "[data-menu-main]",
});
