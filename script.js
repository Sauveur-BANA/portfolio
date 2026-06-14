const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

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

//Partie projets

