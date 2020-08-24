
//get modal
var modalBack = document.getElementsByClassName('bg-modal')[0];
var modalContent = document.getElementsByClassName('modal-content')[0];
var modalBtn = document.getElementById('design-btn');
var closeBtn = document.getElementsByClassName('close')[0];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside)

function openModal(){
    modalBack.style.display = 'flex';
    modalContent.style.display = 'block';
};

function closeModal(){
    modalBack.style.display = 'none';
    modalContent.style.display = 'none';
};

function clickOutside(e){
    if(e.target == modalBack){
        modalBack.style.display = 'none';
        modalContent.style.display = 'none';
    };

};

