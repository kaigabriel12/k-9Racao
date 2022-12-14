function addEvent() {    
  const items2 = document.querySelectorAll("[name='btn']");
  for (let i = 0; i < items2.length; i++) {
    if (items2[i].id == "plus") {
      items2[i].addEventListener("click", plus.bind(items2[i]));
    } else if (items2[i].id == "minus") {
      items2[i].addEventListener("click", minus.bind(items2[i]));
    }
  }
}

function plus(element) {
const elements = element.target.parentNode.childNodes;
for (let i = 0; i < elements.length; i++) {
  if (elements[i].id == "value") {
    elements[i].innerHTML = parseInt(elements[i].innerHTML) + 1;
    const total = elements[i].parentNode.parentNode.childNodes;
    for (let j = 0; j < total.length; j++) {
      const element = total[j];
      if (element.tagName == "P" && (element.id == "value" || element.name == 'value')) {
          element.innerHTML = parseFloat(
          parseInt(elements[i].innerHTML) *
          parseFloat(element.id.replace(",", "."))
        ).toFixed(2);
      }
    }
  }
}
updateTotal()
}

function minus(element) {
const elements = element.target.parentNode.childNodes;
for (let i = 0; i < elements.length; i++) {
  if (elements[i].id == "value") {
    let minus = parseInt(elements[i].innerHTML);
    if (!(minus - 1 <= 0)) {
      elements[i].innerHTML = minus - 1;
    }else{
      element.target.parentNode.parentNode.remove()
    }
    const total = elements[i].parentNode.parentNode.childNodes;
    for (let j = 0; j < total.length; j++) {
      const element = total[j];
      if (element.tagName == "P" &&  (element.id == "value" || element.name == 'value')) {
        element.innerHTML = parseFloat(
          parseInt(elements[i].innerHTML) *
            parseFloat(element.id.replace(",", "."))
        ).toFixed(2);
      }
    }
  }
}
updateTotal()
}

function updateTotal() {
  const total = document.querySelector('#total-venda')
  total.innerText = '0'
  const items2 = document.querySelectorAll('.item2')
  for (let i = 0; i<items2.length; i++) {
      total.innerText = parseFloat(total.innerText) + parseFloat(items2[i].childNodes[2].innerHTML)
  }
}


function moveSelected(element) {
const items2 = document.querySelector("#items2");
let item = document.createElement("div");
let nome = document.createElement("p");
let barra1 = document.createElement("div");
let barra2 = document.createElement("div");
let opt = document.createElement("div");
let plus = document.createElement("button");
let minus = document.createElement("button");
let value = document.createElement("p");
let iplus = document.createElement("i");
let iminus = document.createElement("i");
let valor = document.createElement("p")
iminus.className = "fa fa-minus";
iplus.className = "fa fa-plus";
value.className = "m-2";
value.id = "value";
value.innerHTML = '1';
minus.className = "btn";
plus.className = "btn";
plus.name = "btn";
minus.name = "btn";
plus.type = "button";
minus.type = "button";
minus.id = "minus";
plus.id = "plus";
opt.className = "opt";
opt.id = "opts";
barra1.className = "barra";
barra2.className = "barra";
valor.name = 'value'
valor.id = element.children[2].innerText.slice(3).trim().replace(",", ".");
valor.innerHTML = valor.id
nome.innerText = element.children[0].innerText;
item.className = "item2";
minus.append(iminus);
plus.append(iplus);
opt.append(plus, value, minus);
item.append(nome, barra1, valor, barra2, opt);
items2.append(item);
addEvent()
}


addEvent()