// Propiedades para recorrer todos los nodos

//Para hallar el padre de un nodo
function findParent() {
 var father = document.getElementsByTagName("li")[0].parentNode;
 console.log(father);
}

//Para hallar los hijos de un nodo (childNode-devuelve lista de nodos hijos)
function findNodeChild() {
  var htmlElement = document.childNodes[1]; // document hijos --> [Doctype, html]
  var bodyElemnt = htmlElement.childNodes[2]; // html hijos--> [head,texto,body]
  var lista = bodyElemnt.childNodes[1]; // body hijos--> [text, ul#list.hobbies, text, script, text]
  var items = lista.childNodes; // items o lista hijos--> [text, li, text, li, text, li, text]
  console.log(items);
}

//Para  hallar al primer hijo-nodo de un nodo
function findFirsrtChild() {
  var htmlElement = document.childNodes[1]; // document hijos --> [Doctype, html]
  var bodyElemnt = htmlElement.childNodes[2]; // html hijos--> [head,texto,body]
  var lista = bodyElemnt.childNodes[1]; // body hijos--> [text, ul#list.hobbies, text, script, text]
  var first = lista.firstChild; // lista hijos--> [text, li, text, li, text, li, text]
  console.log(first);
}

//Para hallar el último hijo-nodo de un nodo
function findLastChild() {
  var htmlElement = document.childNodes[1]; // document hijos --> [Doctype, html]
  var bodyElemnt = htmlElement.childNodes[2]; // html hijos--> [head,texto,body]
  var lista = bodyElemnt.childNodes[1]; // body hijos--> [text, ul#list.hobbies, text, script, text]
  var last = lista.lastChild; // lista hijos--> [text, li, text, li, text, li, text]
  console.log(last);
}

//Para hallar nodo hermano siguiente
function findNextSibling() {
  var htmlElement = document.childNodes[1]; // document hijos --> [Doctype, html]
  var bodyElemnt = htmlElement.childNodes[2]; // html hijos--> [head,texto,body]
  var lista = bodyElemnt.childNodes[1]; // body hijos--> [text, ul#list.hobbies, text, script, text]
  var first = lista.firstChild; // lista hijos--> [text, li, text, li, text, li, text]
  var siblingNextNode =first.nextSibling; // hermano siguiente de first --> primer li
  console.log(siblingNextNode);
}

//Para hallar nodo hermano previo
function findPrevSibling() {
  var htmlElement = document.childNodes[1]; // document hijos --> [Doctype, html]
  var bodyElemnt = htmlElement.childNodes[2]; // html hijos--> [head,texto,body]
  var lista = bodyElemnt.childNodes[1]; // body hijos--> [text, ul#list.hobbies, text, script, text]
  var last = lista.lastChild; // lista hijos--> [text, li, text, li, text, li, text]
  var siblingPrevNode = last.previousSibling; // hermano previo del ultimo nodo hijo --> último li
  console.log(siblingPrevNode);
}

// -----------------------------------------------------------------------------------------------

//Propiedades para recorrer los nodos -solo de tipo elemento-


//Elemento padre
function findParentElement() {
 var fatherElement = document.getElementById('first').parentElement;
 console.log(fatherElement);
}

//Elementos Hijos
function findChildren() {
  var childrenElement = document.getElementById('list').children;
  console.log(childrenElement);
}

//Primer Elemento Hijo
function findFirstChildElement() {
  var firstChildElement = document.getElementById('list').firstElementChild;
  console.log(firstChildElement);
}

//Ultimo Elemento Hijo
function findLastChildElement() {
  var lastChildElement = document.getElementById('list').lastElementChild;
  console.log(lastChildElement);
}

//elemento Hermano siguiente
function nextSiblingElement() {
  var nextSiblingElem = document.getElementById('first').nextElementSibling;
  console.log(nextSiblingElem);
}

//elemento Hermano anterior
function prevSiblingElement() {
  var nextSiblingElem = document.getElementById('first').nextElementSibling;
  var previSiblingElem = nextSiblingElem.previousElementSibling;
  console.log(previSiblingElem);
}

// ---------------------------------------------------------------------------------------------------------

//Entrar de manera directa

var inBody = document.body;
var inHead = document.head;
