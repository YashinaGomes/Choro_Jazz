document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in-up');

    function checkVisibility() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Verificar visibilidade inicial
});

// document.addEventListener('DOMContentLoaded', () => {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const menu = document.querySelector('.menu');

//     menuToggle.addEventListener('click', () => {
//         menu.classList.toggle('active');
//     });


    // const images = document.querySelectorAll('.section-home img:not(.logo_capa):not(.cultura)');

    // images.forEach(img => {
    //     img.classList.add('image-fall');
        
   
    //     const randomDelay = Math.floor(Math.random() * 3) + 2; 
    //     img.style.animationDelay = `${randomDelay}s`;


    //     const randomFallDuration = Math.floor(Math.random() * 4) + 2; 
    //     img.style.animationDuration = `${randomFallDuration}s`;

    //     img.addEventListener('animationend', () => {
    //         img.classList.remove('image-fall');
    //         img.classList.add('image-jump');
    //     });
    // });

    // const specialElements = document.querySelectorAll('.logo_capa, .cultura');

    // specialElements.forEach(element => {
    //     element.classList.add('no-jump');
        
    
    //     const randomDelay = Math.floor(Math.random() * 3) + 2; 
    //     element.style.animationDelay = `${randomDelay}s`;

    //     const randomFallDuration = Math.floor(Math.random() * 4) + 2;
    //     element.style.animationDuration = `${randomFallDuration}s`;
    // });
// });


