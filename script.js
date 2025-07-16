let nomeUsuario = "";
let elemento = document.querySelector("#nome-usuario");

while(nomeUsuario ==""){
    nomeUsuario = prompt("Qual o seu nome?");
}

if(nomeUsuario==null){
    elemento.textContent="Seja bem-vindo!";
}else{
    elemento.textContent = nomeUsuario;
}


let linguagens = ["Javascript", "Python", "C"];
console.log(linguagens [0]);
console.log(linguagens [1]);
console.log(linguagens [2]);

const item = document.querySelector("#lista");
item.textContent = linguagens;

