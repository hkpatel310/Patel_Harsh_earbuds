console.log("js connect")
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-110%';
}

(() => {
    const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");
    canvas.width = 1920;
    canvas.height = 1080;
    const frameCount = 300; // Updated frame count
    const images = [];

    const buds = {
        frame: 0
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = `images/earbuds_scroll${(i + 1).toString().padStart(4, '0')}.jpg`;
        images.push(img);
    }

    gsap.to(buds, {
        frame: frameCount - 1, // Updated frame count
        snap: "frame",
        scrollTrigger: {
            trigger: "#explode-view",
            pin: true,
            scrub: 1,
            start: "top top",
            end: "+=8000" // Increase this value to extend the scroll distance
        },
        onUpdate: render
    });

    images[0].addEventListener("onload", render);

    function render() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[buds.frame], 0, 0);
    }

})();


(() => {
    //vaiables
    let imageCon = document.querySelector('#imageCon'),
        drag = document.querySelector('.image-drag'),
        left = document.querySelector('.image-left'),
        dragging = false,
        min = 0,
        max = imageCon.offsetWidth;


    function onDown() {
        dragging = true;
        console.log("on Down called")
    }

    function onUp() {
        dragging = false;
        console.log("on Up called")
    }

    function onMove() {
        if (dragging === true) {
            let x = event.clientX - imageCon.getBoundingClientRect().left;

            if (x < min) {
                x = min; //in other word zero
            } else if (x > max) {
                x = max-10;
            }

            drag.style.left = x + 'px';
            left.style.width = x + 'px';
        }

    }

    //event listeners

    drag.addEventListener('mousedown', onDown);
    document.body.addEventListener('mouseup', onUp);
    document.body.addEventListener('mousemove',onMove)


})();

(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animateFromLeft = (element) => {
        gsap.from(element, {
            x: -100, // start from left
            opacity: 0,
            scrollTrigger: {
                trigger: element,
                toggleActions: "restart pause resume pause"
            },
            duration: 1
        });
    };

    const animateFromRight = (element) => {
        gsap.from(element, {
            x: 100, // start from right
            opacity: 0,
            scrollTrigger: {
                trigger: element,
                toggleActions: "restart pause resume pause"
            },
            duration: 1
        });
    };

    const animateFromBottom = (element) => {
        gsap.from(element, {
            y: 100, // start from bottom
            opacity: 0,
            scrollTrigger: {
                trigger: element,
                toggleActions: "restart pause resume pause"
            },
            duration: 1
        });
    };

    // Apply the animations
    document.querySelectorAll('.left-side').forEach(animateFromLeft);
    document.querySelectorAll('.right-side').forEach(animateFromRight);
    document.querySelectorAll('.feature').forEach(animateFromBottom);
})();


document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const navLinks = document.querySelectorAll("#main-nav a");

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            let target = e.target.getAttribute('href');
            switch(target) {
                case '#features':
                    gsap.to(window, {duration: 1, scrollTo: {y: ".feature", offsetY: 60}});
                    break;
                case '#design':
                    gsap.to(window, {duration: 1, scrollTo: {y: "#x-ray", offsetY: 60}});
                    break;
                case '#reviews':
                    gsap.to(window, {duration: 1, scrollTo: {y: ".reviews-section", offsetY: 60}});
                    break;
                // Add more cases for other links if necessary
            }
        });
    });
});

