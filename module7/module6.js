'use strict'

console.log(document);
console.dir(document);

const content = document.querySelector(".p")
console.log(content);
console.dir(content);
content.textContent = "Sup, how is it going man";

content.style.backgroundColor = "lightblue";
content.style.fontSize = "18px";


//.contains ------- checks for class
console.log(content.classList);
console.log(content.classList.contains("js-list_content"));
console.log(content.classList.contains("p"));


//.add --------- adds a class
content.classList.add("js-list_content");
console.log(content.classList.contains("js-list_content"));
console.log(content.classList);


//.remove -------- removes a class
content.classList.remove("js-list_content");
console.log(content.classList);


//.replace --------- (oldclass, newclass)
content.classList.replace("text", "jstext")
console.log(content.classList);


//.toggle -------- if class doesn't exist, adds it; if class exists, removes it
content.classList.toggle("jstext");
console.log(content.classList);
content.classList.toggle("text-8D")
console.log(content.classList);


const image = document.querySelector(".js-img");
console.dir(image);

image.alt = "picture";
image.width = image.width / 1.5;
image.height = image.height / 1.5;


//.setAttribute also sets oother attributes
image.setAttribute("alt", "item image");
image.setAttribute("src", "https://images.pexels.com/photos/3487630/pexels-photo-3487630.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
console.log(image.attributes);

image.name = "Beautiful";

// const button = document.querySelector(".js-btn");
const button = document.querySelector('button[data-action="action"]')
console.log(button.textContent);
button.textContent = "Aye.";
console.log(button.textContent);//Aye.  

function updateImage() {
    image.setAttribute("src", "https://images.pexels.com/photos/2868871/pexels-photo-2868871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
}

button.addEventListener('click', () => {
    updateImage();
}); 














