/*jshint esversion: 6 */

var button = document.querySelector('.button');
var body = document.body, header = document.querySelector('header'), main = document.querySelector('main'), footer = document.querySelector('footer');

button.addEventListener("click", toggleTheme);

function toggleTheme(){
    body.classList.toggle("dark-theme");
    body.classList.toggle("white-theme");

    header.classList.toggle("dark-theme");
    header.classList.toggle("white-theme");

    main.classList.toggle("dark-theme");
    main.classList.toggle("white-theme");

    footer.classList.toggle("dark-theme");
    footer.classList.toggle("white-theme");
}