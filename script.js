let nomeUsuário = "";
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuário ==""){
    nomeUsuario = prompt("Qual o seu nome?");
}

if(nomeUsuário== null){
    elemento.textContent=`seja bem-vindo!'{
}else{
    elemento.textContent = nomeUsuário;
}


let linguagens = ["Javascript", "Python", "C"];
console.log(linguagens [0]);
console.log(linguagens [1]);
console.log(linguagens [2]);

const item = document.querySelector("#lista");
item.textContent = linguagens;

