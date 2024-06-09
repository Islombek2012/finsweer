const bars = document.querySelector('.bars');
const resNav = document.querySelector('.menu');
const xx = document.querySelector('#tg')
const xx2 = document.querySelector('#tg2')
bars.addEventListener('click', ()=>{
      resNav.classList.toggle('active')
      bars.classList.toggle('active')
      xx.classList.toggle('tog')
      xx2.classList.toggle('tog')
})
const toTop = document.querySelector('.to-top')

window.addEventListener('scroll', ()=>{
      if(window.pageYOffset > 100){
            toTop.classList.add('active')
      }else{
            toTop.classList.remove('active')
      }
})