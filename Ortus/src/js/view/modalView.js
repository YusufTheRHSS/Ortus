import {elements} from './base';
 
export const openModal = () => {
    elements.modalBack.style.display = 'flex';
    elements.modalContent.style.display = 'block';
};

export const closeModal = () => {    elements.modalBack.style.display = 'none';
    elements.modalContent.style.display = 'none';
};

export const clickOutside = e => {    
    if(e.target == elements.modalBack){
        elements.modalBack.style.display = 'none';
        elements.modalContent.style.display = 'none';
    };

};
