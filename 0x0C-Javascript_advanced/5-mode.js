
function changeMode(size, weight, transform, background, color) {
    return function () {
      document.body.style.fontSize = size;
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
    }
  }
  
  function main () {
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screemMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    // add paragraphe to HTML
    const para = document.createElement("p");
    para.innerText = "This is a paragraph";
    document.body.appendChild(para);

    // add 3 button to HTML
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let button3 = document.createElement("button");

    button1.innerText = "spooky";
    button2.innerText = "darkMode";
    button3.innerText = "screemMode";


    document.body.appendChild(button1);
    document.body.appendChild(button2);
    document.body.appendChild(button3);

    button1.addEventListener ("click", function () {spooky();});
    button2.addEventListener ("click", function () {darkMode();});
    button3.addEventListener ("click", function () {screemMode();});
  }
  main();