const getOpenBtn = document.querySelector('.button-main');
const getModel = document.querySelector('.model');
const iconCloseModal = document.querySelector(".model__header i");
const buttonCloseModal = document.querySelector(".model__footer button")

function openModal() {
    getModel.style.display = 'block';
}
function closeModal(){
    getModel.style.display = 'none';
}
buttonCloseModal.addEventListener('click',(e)=>{
    if (e.target == e.currentTarget) closeModal();
});
iconCloseModal.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
});
getModel.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
});
getOpenBtn.addEventListener('click', (e) => {
    if (e.target == e.currentTarget) openModal();
});
