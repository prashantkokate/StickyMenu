menu1=document.getElementById('menu1')

window.addEventListener('scroll',()=>{
    if(window.pageYOffset >100){
        menu1.classList.add('sticky')
    }else(
        menu1.classList.remove('sticky')
    )
})