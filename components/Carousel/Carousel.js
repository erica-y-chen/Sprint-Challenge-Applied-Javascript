class Carousel {
    constructor(carousel){
        this.carousel=carousel; 
        this.left = left; 
        this.right=right;
    
        
        this.right.addEventListener('click', () => 
        images.style.display="block"
        );
    }
    
    //methods
    nextImage(){
        const image = document.querySelectorAll('.carousel img');
        
        this.images.style.display="block";
        
        // .forEach( function(img){
        //     images.style.display= "block";
        // });
           
    }
}

const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('.carousel img');
const left = document.querySelector('.left-button');
const right = document.querySelector('.right-button');

console.log('hello');

images.forEach( function(img){
    img.style.display= "block";
});

this.right.addEventListener('click', () => 
images.style.display="block"
);


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/