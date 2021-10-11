/*
    Author: Talib Khweled
*/

function Bigger(){
    document.getElementById("textAreaFancify").style.fontSize = "24pt";
};

function makeBoring(){
    document.getElementById("textAreaFancify").style.fontWeight = "normal";
    document.getElementById("textAreaFancify").style.color = "black";
    document.getElementById("textAreaFancify").style.textDecoration = "none"
};

function makeFancy(){
    document.getElementById("textAreaFancify").style.fontWeight = "bold";
    document.getElementById("textAreaFancify").style.color = "blue";
    document.getElementById("textAreaFancify").style.textDecoration = "underline"
};

function moo(){
    let text = document.getElementById("textAreaFancify").value
    text = text.toUpperCase()
    let parts = text.split(".")
    document.getElementById("textAreaFancify").value = parts.join("-Moo.")
};

function alertCall(){
    alert("Hello, World!")
};

const input = document.createElement("input");

input.setAttribute("type", "text");
document.body.appendChild(input);
