document.getElementById("wrapper").innerHTML = `
<h2 id="hello1">Hello World</h2>
<ol>
    <li id="hello2">Hello World</li>
</ol>
<button onclick="alert('Hello World')">Clique-me</button>

<ul>
<li>H</li>
<li>E</li>
<li>L</li>
<li>L</li>
<li>O</li>
<li>W</li>
<li>O</li>
<li>R</li>
<li>L</li>
<li>D</li>
</ul>
`;

const printHello = () => {
    console.log("Hello World");
}
printHello()

function customPrint(text) {
    console.log(text);
  }
customPrint("Hello World");

console.info("Hello World");

document.write("Hello World");

window.alert("Hello World");

for (let i = 0; i < 5; i++) {
    console.log(`Hello World ${i + 1}`);
  }