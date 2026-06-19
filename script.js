fetch("header.html")
.then(response => response.text())
.then(data => {

    document.getElementById("header").innerHTML = data;

    initMenu();

});

//Page d'A propos

function showContent(section){

    document
    .querySelectorAll(".content")
    .forEach(content=>{

        content.classList.remove(
            "active-content"
        );

    });

    document
    .getElementById(section)
    .classList.add(
        "active-content"
    );

    document
    .querySelectorAll(".tab-btn")
    .forEach(btn=>{
        btn.classList.remove(
        "active"
        );
    });

    event.target.classList.add(
        "active"
    );

}

const accordionHeaders= document.querySelectorAll(
    ".accordion-header"
);


accordionHeaders.forEach(header=>{
    header.addEventListener(
    "click",()=>{
        const item= header.parentElement;

        item.classList.toggle(
            "active"
        );

        const icon= header.querySelector(
            "span"
        );

        icon.innerText= item.classList.contains(
            "active"
        )
        ? "-"
        : "+";

    });

});



function initMenu() {

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburger && navMenu) {

        hamburger.addEventListener("click", () => {

            console.log("CLICK");

            navMenu.classList.toggle("active");

        });

    }

}
