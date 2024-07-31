const eKey = document.querySelector('.card.key p:last-child')
const eLocation = document.querySelector('.card.location p:last-child')
const eWhich = document.querySelector('.card.which p:last-child')
const eCode = document.querySelector('.card.code p:last-child')


document.addEventListener('keydown', (e) => {
    document.querySelector('.box').style.display = 'block';
    document.querySelector('.alert').style.display='none';

    document.querySelector('.result').innerText=e.code
    eKey.innerText=e.key 
    eLocation.innerText=e.location
    eWhich.innerText=e.which
    eCode.innerText=e.code
  });