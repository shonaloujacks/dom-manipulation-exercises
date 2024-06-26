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

const content2 = document.createElement("div");
content2.classList.add("content2");
content2.setAttribute("style", "background: pink; border: black");

const heading1 = document.createElement("h1");
heading1.classList.add("heading1");
heading1.textContent = "I'm in a div";

content2.appendChild(heading1);

const paragraph2 = document.createElement("p");
paragraph2.classList.add("paragraph2");
paragraph2.textContent = "ME TOO!";

content2.appendChild(paragraph2);

container.appendChild(content2);

// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
