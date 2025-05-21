import { setupModal } from '../main.js';

setupModal({
  openSelector: "[data-menu-open-header]",
  closeSelector: "[data-menu-close-header]",
  modalSelector: "[data-menu]",
  closeOnLink: true,
});
