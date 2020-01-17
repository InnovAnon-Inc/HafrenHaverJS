"use strict";

const main_canvas  = document.getElementById('main-canvas');
const main_section = main_canvas.parentNode;
const message      = document.createElement('p');
message.innerText  = 'JavaScript modules allow for a more featureful experience.';
main_section.replaceChild(message, main_canvas)