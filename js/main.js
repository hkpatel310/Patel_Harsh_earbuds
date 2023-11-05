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
    const frameCount = 450; //how many still frames do we have?
    const images = []; //array to hold all of our images

    //oject literal, that has a property of frame to hold the current frame
    const buds = {
        frame: 0
    }

    //run a for loop to populate our images array
    for(let i=0; i<frameCount; i++) {
        //console.log(i);
      const img = new Image();
      // string I am trying to create: images/explode_13.webp
    img.src = `images/explode_${(i+1)}.webp`;  
    images.push(img);
    }

    //console.table(images);

    //we are not actually animating a DOM element, but rather an object
    //which contains a frame count, as the user scrolls we increase the 
    //value by 1. We tell GreenSock there is a total of 449 frames to cycle
    //though,so it know when to stop. GreenSock scrolling uses decimals, so
    //we use "snap" to give us whole numbers 1 vs 0.0085.
    gsap.to(buds, {
        frame: 449,
        snap: "frame",
        scrollTrigger: {
            trigger: "#explode-view",
            pin: true,
            scrub: 1,
           
            start: "top top"
        },
        onUpdate: render
    })

    images[0].addEventListener("onload", render);

    function render() {
        console.log(buds.frame);
        console.log(images[buds.frame]);
        context.clearRect(0,0, canvas.width, canvas.height);
        context.drawImage(images[buds.frame],0,0);
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

