import { Contacto } from "./Contacto.js"
import {
    validateName,
    validateEmail,
    validateNumber,
    validateURL,
} from "./validators.js";

let contactos = [];

// const nombre = "esteban"
// const telefono ="12345555"
// const email = "esteban@mail.com"
// const url = "https://i.pinimg.com/736x/53/7b/ac/537bac365239e9fb406c83c66b6de02b.jpg";

// if(

//     validateString(nombre) &&
//     validateNumber(telefono) &&
//     validateEmail(email) &&
//     validateURL(url) 
// ){
//     const esteban = new Contacto(nombre,telefono,email,url,"");
//     console.log(esteban);
// }else{
//     console.log("Algun dato incorrecto");
// }

const formularioContacto = document.getElementById("formContacto");

const campoNombre = document.getElementById("nombreContacto");
const campoTelefono = document.getElementById("telefonoContacto");
const campoEmail = document.getElementById("emailContacto");
const campoImagen = document.getElementById("imagenContacto");
const campoNotas = document.getElementById("notasContacto");

let nombre = "";
let telefono = "";
let email = "";
let imagen = "";
let notas = "";

campoNombre.addEventListener("blur", (e) => {
  if (validateName(e.target.value,campoNombre)) {
    nombre = e.target.value;
  }
});

campoTelefono.addEventListener("blur", (e) => {
  if (validateNumber(e.target.value,campoTelefono)) {
    telefono = e.target.value;
  }
});

campoEmail.addEventListener("blur", (e) => {
  if (validateEmail(e.target.value,campoEmail)) {
    email = e.target.value;
  }
});

campoImagen.addEventListener("blur", (e) => {
  if (validateURL(e.target.value,campoImagen)) {
    imagen = e.target.value;
  }
});

campoNotas.addEventListener("blur", (e) => {
  notas = e.target.value;
});

const crearContacto = (contacto) => {
  const tbody = document.getElementById("tbody__admin");

  const tr = document.createElement("tr");


  // creacion de tables rows

  const td = document.createElement("td");

  td.innerText = contacto.codigo;
  tr.appendChild(td);

  const td2 = document.createElement("td");

  td2.innerText = contacto.nombre;
  tr.appendChild(td2);

  const td3 = document.createElement("td");

  td3.innerText = contacto.telefono;
  tr.appendChild(td3);

  const td4 = document.createElement("td");

  td4.innerText = contacto.email;
  tr.appendChild(td4);

  const td5 = document.createElement("td");

  td5.innerText = contacto.imagen;
  tr.appendChild(td5);

  const td6 = document.createElement("td");

  td6.innerText = contacto.notas;
  tr.appendChild(td6);

  // 

  tbody.appendChild(tr);

  // agrego contacto al array
  contactos.push(contacto);
  // console.log(contactos);

  const contactosJSON = JSON.stringify(contactos);
  // console.log(contactosJSON);
  localStorage.setItem("contactos", contactosJSON);
  
} 

formularioContacto.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    validateName(nombre,campoNombre) &&
    validateNumber(telefono,campoTelefono) &&
    validateEmail(email,campoEmail) &&
    validateURL(imagen,campoImagen)
  ) {
    const contacto = new Contacto(nombre, telefono, email, imagen, notas);
    // console.log(contacto);
    crearContacto(contacto);
    } else {
    console.log("Algun dato no es valido");
  }
});

