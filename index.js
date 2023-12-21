const readlineSync = require('readline-sync');
// Objetivo

console.log("=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
console.log("         Classificador de Nível de Herói");
console.log("=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, //

let nomeHeroi = readlineSync.question ("Digite o nome do seu Herói: ");
let xpHeroi = readlineSync.question ("Digite a quantidade de XP de " + nomeHeroi + ": " );

//  xpHeroi modificado de String para Inteiro

xpHeroi = parseInt(xpHeroi);

//Depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

let nivel;
if (xpHeroi < 1000){ 
    nivel = "Ferro";
}else if (xpHeroi >= 1001 && xpHeroi<= 2000) {
    nivel = "Bronze";
}else if (xpHeroi > 2000 && xpHeroi <= 5000) {
    nivel = "Prata";
}else if (xpHeroi > 5000 && xpHeroi <= 7000) {
    nivel = "Ouro";
}else if (xpHeroi > 7000 && xpHeroi <= 8000) {
    nivel = "Platina";
}else if (xpHeroi > 8000 && xpHeroi <= 9000) {
    nivel = "Ascendente";
}else if (xpHeroi > 9000 && xpHeroi <= 10000){
    nivel = "Imortal";
}else {
    nivel = "Radiante";
}



/*Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/
console.log(" O Herói de nome "+ nomeHeroi + " está no nível "+ nivel);

