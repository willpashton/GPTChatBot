const popup = document.querySelector('.chatwindow');
const btn = document.querySelector('.chatbtn');

btn.addEventListener('click', ()=>{
    popup.classList.toggle('show')
})