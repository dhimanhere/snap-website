const menu = document.querySelector('#hamburger');
const links = document.querySelector('.links');
const extraLink1 = document.querySelector('#extraLink1');
const extra1 = document.querySelector('#extra1');
const extra2 = document.querySelector('#extra2');
const extraLink2 = document.querySelector('#extraLink2');

menu.addEventListener("click", function(event){
	menu.classList.toggle("active");
	links.classList.toggle("active");
})
extra1.addEventListener("click", function(event){
	extraLink1.classList.toggle("active");
})
extra2.addEventListener("click", function(event){
	extraLink2.classList.toggle("active");
})