import { setupModal } from '../main.js';

setupModal({
  openSelector: "[data-menu1-open]",
  closeSelector: "[data-menu1-close]",
  modalSelector: "[data-menu1]",
  closeOnLink: true,
});