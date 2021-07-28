var currentSlide = 1;

function showSlide(n){
    var slides = document.querySelectorAll('.slide');
    var container = document.querySelector('.slides-container');
    var indicator = document.querySelectorAll('.dot');

    for(let i = 0; i < slides.length; i++){
        indicator[i].classList.remove('active');
    }

    if(n > 3) n = 1;
    if(n < 1) n = slides.length;

    container.style.right = n-1 + '00%';
    indicator[n-1].classList.add('active');
    currentSlide = n;
};
function initCarousel(){
    var dots = document.querySelectorAll('.dot');
    for(let i = 0; i < dots.length ; i++){
        dots[i].addEventListener("click", function(){
            showSlide(i+1);
        });
    }
};

document.addEventListener('DOMContentLoaded', function() {
    initCarousel();
 }, false);

