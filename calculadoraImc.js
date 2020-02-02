const nome = 'Juan';
const peso = 104;
const altura = 1.75;
const sexo = 'masculino';

const imc = peso/(altura * altura);
 
if (imc >= 30){
    console.log(`${nome} está acima do peso`)
}else{
    console.log(`${nome} não está acima do peso`)
}
