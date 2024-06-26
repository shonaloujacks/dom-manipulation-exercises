const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.textContent = "Hey I'm red!";
paragraph.setAttribute("style", "color: red");

content.appendChild(paragraph);

const heading3 = document.createElement("h3");
heading3.classList.add("heading3");
heading3.textContent = "I'm a blue h3!";
heading3.setAttribute("style", "color: blue");

content.appendChild(heading3);

// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
