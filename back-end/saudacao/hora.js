let data = new Date();

let hora = data.getHours();
let min = data.getMinutes();

let saudacao;
if(hora <= 12){
    saudacao = "Bom dia"
}else if(hora > 12 && hora < 17){
    saudacao = "Boa tarde"
}else{
    saudacao = "Boa noite"
}
console.log("ola" + saudacao)
console.log(`agora sao ${hora} horas e ${min} minutos.`)