const prevBtn = document.querySelector('.left-btn') , 
           nextBtn = document.querySelector('.right-btn'), 
           slides = document.querySelectorAll('.slider__item') ,
           dots = document.querySelectorAll('.dot ')
let index = 0 
nextBtn.addEventListener('click',nextSlide)
prevBtn.addEventListener('click',prevSlide)
document.onkeydown = function(e){
    if(e.keyCode == 39 ){
        nextSlide()
    }else if(e.keyCode == 37){
        prevSlide()
    }
}
function activeSlide(n){
        for(slide of slides) {
            slide.classList.remove('show')
        }
        slides[n].classList.add('show')
}
function activeDot(n){
    for(dot of dots){
        dot.classList.remove('this')
    }
    dots[n].classList.add('this')
}
function greet(ind){
    activeSlide(ind) 
    activeDot(ind)
}

function nextSlide(){
    if(index == slides.length - 1){
        index = 0 ;
       greet(index)
    }else {
        index++; 
        greet(index)
    }
}
function prevSlide(){
    if(index == 0){
        index = slides.length - 1        
        greet(index)
    }else {
        index--; 
        greet(index)
    }
}
dots.forEach((item,indexDot) =>{
    item.addEventListener('click', function(){
        index = indexDot
        greet(index)
    })
})
setInterval(nextSlide , 5000)