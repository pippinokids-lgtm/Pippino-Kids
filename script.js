/* ==========================
PIPPINO WEBSITE
script.js
========================== */

/* ==========================
PIPPINO FOLLOWS CURSOR
========================== */

const pippino =
document.querySelector(".hero-pippino");

document.addEventListener("mousemove",(e)=>{

    if(!pippino) return;

    const x =
    (e.clientX/window.innerWidth - 0.5) * 20;

    const y =
    (e.clientY/window.innerHeight - 0.5) * 20;

    pippino.style.transform =
    `translate(${x}px, ${y}px)`;

});

/* ==========================
PIPPINO BLINK
========================== */

const eyes =
document.querySelector(".pippino-eyes");

function blink(){

    if(!eyes) return;

    eyes.classList.add("blink");

    setTimeout(()=>{

        eyes.classList.remove("blink");

    },150);

}

setInterval(()=>{

    const randomTime =
    3000 + Math.random()*5000;

    setTimeout(blink,randomTime);

},8000);

/* ==========================
SPEECH BUBBLE
========================== */

const bubble =
document.querySelector(".speech-bubble");

window.addEventListener("load",()=>{

    if(!bubble) return;

    setTimeout(()=>{

        bubble.classList.add("visible");

    },1200);

});

/* ==========================
RANDOM PHRASES
========================== */

const phrases = [

    "Let's explore!",

    "Adventure awaits!",

    "Did you know?",

    "I found something!",

    "Want to discover a secret?",

    "Follow me!",

    "Curiosity is magic!",

    "Let's learn together!"

];

if(pippino){

    pippino.addEventListener("click",()=>{

        const randomPhrase =

        phrases[
            Math.floor(
                Math.random()*phrases.length
            )
        ];

        bubble.innerHTML =
        randomPhrase;

        bubble.classList.add("visible");

    });

}

/* ==========================
FLOATING STARS
========================== */

const starsContainer =
document.getElementById("stars-container");

function createStar(){

    if(!starsContainer) return;

const star =
document.createElement("img");

star.src =
"images/star.svg";

star.classList.add("star");

    star.style.left =
    Math.random()*100 + "vw";

    star.style.width =
    4 + Math.random()*8 + "px";

    star.style.height =
    star.style.width;

    star.style.animationDuration =
    5 + Math.random()*8 + "s";

    starsContainer.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },12000);

}

setInterval(createStar,1200);

/* ==========================
SCROLL REVEAL
========================== */

const revealElements =
document.querySelectorAll(

".value-card, .product, .meet-content, .creator, .club"

);

function revealOnScroll(){

    revealElements.forEach(element=>{

        const top =
        element.getBoundingClientRect().top;

        const screen =
        window.innerHeight;

        if(top < screen - 120){

            element.classList.add("show");

        }

    });

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

/* ==========================
SECRET STARS
========================== */

let discoveries = 0;

const secrets =
document.querySelectorAll(".secret");

function foundSecret(){

    this.remove();

    discoveries++;

    bubble.innerHTML =
    `⭐ Secret found! ${discoveries}/5`;

    bubble.classList.add("visible");

    if(discoveries === 5){

        setTimeout(()=>{

            bubble.innerHTML =

            "🎉 You discovered all Pippino secrets!";

        },500);

    }

}

secrets.forEach(secret=>{

    secret.addEventListener(
    "click",
    foundSecret
    );

});

/* ==========================
PRODUCT HOVER SOUND
(OPTIONAL)
========================== */

/*

const sound =
new Audio("audio/pop.mp3");

document
.querySelectorAll(".product")
.forEach(product=>{

product.addEventListener("mouseenter",()=>{

sound.currentTime=0;

sound.play();

});

});

*/

/* ==========================
ADVENTURE MODE
========================== */

function toggleAdventureMode(){

    document.body.classList.toggle(
    "adventure"
    );

}

/* ==========================
WELCOME MESSAGES
========================== */

const welcomeMessages = [

"Welcome explorer!",

"Ready for an adventure?",

"Today is a great day to discover something new!",

"Let's learn while we play!"

];

window.addEventListener("load",()=>{

    setTimeout(()=>{

        const message =

        welcomeMessages[
            Math.floor(
            Math.random()*
            welcomeMessages.length
            )
        ];

        bubble.innerHTML =
        message;

    },3000);

});

/* ==========================
EASTER EGG
DOUBLE CLICK PIPPINO
========================== */

if(pippino){

    pippino.addEventListener(
    "dblclick",
    ()=>{

        bubble.innerHTML =

        "🦕 Dino Mode Activated!";

        pippino.style.transform +=
        " scale(1.15)";

        setTimeout(()=>{

            pippino.style.transform =
            "";

        },1000);

    }
);
}

/* ==========================
END
========================== */