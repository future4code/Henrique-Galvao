//Exercício 1

function inverteArray(array) {
  // implemente sua lógica aqui
      const invert = array.reverse()
      return invert
       
      //tentei com .sort() mas nada funcionou.

}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui
   let paresADois = array.filter((numero)=>{
      if(numero%2 === 0){
         return true
      }      
   })
   for (i = 0; i < paresADois.length; i++){
      paresADois[i] = paresADois[i]**2
   }
   return paresADois
}


//Exercício 3

function retornaNumerosPares (array) {
   // implemente sua lógica aqui
   let soPares = array.filter((pares)=>{
      if(pares%2 === 0){
         return true
      }
   })
   return soPares
   
}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
   let maiorNoArr = array[0]
   for(let numero of array){
      if(maiorNoArr < numero){
         maiorNoArr = numero
      }
   }
   return maiorNoArr
   }


//Exercício 5

function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
   const respostas = [false, false, true, true, true]
   return respostas
}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   // let array=[0]
   // for(i=0; i=n; i++){
   //    array.push[i]
   // }
   // return array
   //não sei se ta certo porque toda vez que vou no live server meu pc trava :(
  
}

// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
   if(a == b && b == c){
      return 'Equilátero'
   } else if(a != b && b != c && c != a){
      return 'Escaleno'
   } else {
      return 'Isósceles'
   }
}


// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
   let objeto = {
      maiorNumero: 0,
      maiorDivisivelporMenor:false,
      diferenca:0,
   }

   if(num1 > num2){
      objeto.maiorNumero = num1,
      objeto.maiorDivisivelporMenor =(num1 % num2 === 0),
      objeto.diferenca = num1 - num2
   } else{
      objeto.maiorNumero = num2,
      objeto.maiorDivisivelporMenor = (num2 % num1 === 0),
      objeto.diferenca = num2 - num1
   }
   return objeto
   }
   

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
   let novo=[]
   let arrays = array.sort(function(a, b){return a - b})
   novo.push(arrays[6], arrays[1])
   return novo
}


//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
  
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}