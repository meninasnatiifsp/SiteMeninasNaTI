/*-| Header - Scroll |-*/

window.addEventListener("scroll", function () {
    let navBar = document.querySelector("header");
    navBar.classList.toggle("sticky", window.scrollY > 0);

    let btnBack = this.document.querySelector(".backTop");
    btnBack.classList.toggle("sticky", window.scrollY > 0);

    updateScreen();

    /*-| Header - Logo |-*/

    if (navBar.classList.contains("sticky")) {
        let logo = document.querySelector(".logo-container");
        logo.addEventListener('click', function () {
            window.location.href = "#";
        });
    }
});

/*-| Header - Responsive |-*/

function updateScreen() {
    headerButton = document.querySelector(".header-button");
    nav = document.querySelector("header > nav");

    let toggleHeader = () => {
        headerButton.classList.toggle("change");
    }

    let openNav = () => {
        nav.classList.toggle("onR");
    }

    if (window.innerWidth < 768 && window.scrollY > 0) {
        headerButton.addEventListener('click', function () {
            toggleHeader(this);
            openNav();
        });
    } else if (window.innerWidth < 768 && window.scrollY == 0) {
        headerButton.classList.remove("change");
        nav.classList.remove("onR");
    }
}