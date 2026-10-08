const gift = document.getElementById("gift");

const opening = document.getElementById("opening");

const birthday = document.getElementById("birthday");

const confetti = document.getElementById("confetti");


gift.addEventListener("click", function () {

    /* Gift lid animation */

    document.querySelector(".gift-lid").style.transform =
        "translateY(-40px) rotate(-8deg)";


    /* Wait for animation */

    setTimeout(function () {

        opening.style.display = "none";

        birthday.classList.add("show");

        createConfetti();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 700);

});



function createConfetti() {

    const colors = [
        "#e7c46d",
        "#ffffff",
        "#b88b32",
        "#f4d98a"
    ];


    for (let i = 0; i < 100; i++) {

        const piece = document.createElement("span");

        piece.style.position = "fixed";

        piece.style.width = "8px";

        piece.style.height = "14px";

        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top = "-20px";

        piece.style.zIndex = "9999";

        piece.style.pointerEvents = "none";

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        const duration =
            2 + Math.random() * 3;


        piece.style.transition =
            `top ${duration}s linear,
             transform ${duration}s linear`;


        confetti.appendChild(piece);


        setTimeout(() => {

            piece.style.top = "110vh";

            piece.style.transform =
                `rotate(${Math.random() * 1000}deg)`;

        }, 50);


        setTimeout(() => {

            piece.remove();

        }, duration * 1000 + 500);

    }

}