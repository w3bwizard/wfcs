window.onload = function () {
    let x = document.querySelector(".menu");
    document.querySelector("#menu__toogle").onclick = function () {
        x.classList.toggle('menu__popup');
    }
}
