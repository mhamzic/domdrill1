// *** DOM DRILL Tasks 1-8
const header = document.createElement("div");
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const h3 = document.createElement("h3");
const h4 = document.createElement("h4");
const h5 = document.createElement("h5");
const h6 = document.createElement("h6");

header.className = "header-container";
h1.innerHTML = "This is an H1";
h2.innerText = "This is an H2";
h3.innerText = "This is an H3";
h4.innerText = "This is an H4";
h5.innerText = "This is an H5";
h6.innerText = "This is an H6";
h1.className = "h1 title";
h2.className = "h2 title";
h3.className = "h3 title";
h4.className = "h4 title";
h5.className = "h5 title";
h6.className = "h6 title";

header.appendChild(h1);
header.appendChild(h2);
header.appendChild(h3);
header.appendChild(h4);
header.appendChild(h5);
header.appendChild(h6);

document.body.appendChild(header); // add the header to the document body

colors = ["green", "blue", "orange", "darkgreen", "black", "brown"];

headerChange = document.querySelectorAll(".title");

let i = 0;
headerChange.forEach(title => {
  title.addEventListener("dblclick", () => {
    title.style.color = colors[i];
    console.log(i);
    i++;
    if (i >= 6) {
      i = 0;
    }
  });
});

// End Tasks 1-8

// Task 8-14
let counter = 1;
const ul = document.createElement("ul");
const button = document.querySelector(".button");
button.addEventListener("click", insertLiItem);
document.body.appendChild(ul);

function insertLiItem(e) {
  let li = document.createElement("li");
  li.innerText = "This is list item " + counter;
  li.className = "list";
  ul.appendChild(li);
  counter++;

  li.addEventListener("click", () => {
    li.style.color = colors[i];
    i++;
    if (i >= 6) {
      i = 0;
    }
  });

  li.addEventListener("dblclick", () => {
    li.parentNode.removeChild(li);
  });
}
