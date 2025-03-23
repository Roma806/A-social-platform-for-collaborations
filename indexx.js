const slides = document.querySelectorAll('.slide');

for(const slide of slides){
    slide.addEventListener('click', () =>{
        clear();
        slide.classList.add('arc');
    })
}

function clear(){
    for(const slide of slides){
        slide.classList.remove('arc');
    }
}