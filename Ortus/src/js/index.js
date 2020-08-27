import {elements} from './view/base';
import * as modalView from './view/modalView';

//modal controllers
console.log(elements);
elements.modalBtn.addEventListener('click', modalView.openModal);
elements.closeBtn.addEventListener('click', modalView.closeModal);
window.addEventListener('click', modalView.clickOutside);

