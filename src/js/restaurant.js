import $ from "jquery";

let boton = $("#Responsive");
let target = boton.attr("data-target");

let Menu = $(".nav-menu");
let Attr = Menu.attr("aria-hidden");

boton.on("click", () =>{
  boton.classList.toggle("active");
  Altura();
  Atributo();
});

function Altura() {
  if (!Menu.css("max-height")) {

    Menu.css("max-height", "100vh");
  } else {
    Menu.css("max-height", null);
  }
}
function Atributo() {
  if (boton.hasClass("active")) {
    Menu.attr("aria-hidden", "false");
  } else {
    Menu.attr("aria-hidden", "true");
  }
}

