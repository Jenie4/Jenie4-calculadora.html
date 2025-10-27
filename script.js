alert("Hola Mundo 1"); 
console.log("Hola Mundo en la consola");    
document.write("<h2>Hola Mundo</h2>");
// Ejemplo de bucle for 
for (let i = 1; i <= 5; i++) {
    console.log("Número: " + i);
    for (let marianita = 1; marianita <= 5; marianita++) {
        console.log("Número: " + marianita);    
        console.log("fin del programa");
    } 
} // Closing brace for the outer for loop

//programa de suma  tabla del 7 

let n=parseInt(prompt("ingrese un numero para ver su tabla de multiplicar"));
console.log("tabla del numero " + n);
for (let i=1;i<=12;i++){
    let resultado=n*i;
    console.log(n + " x " + i + " = " + resultado);
}       
console.log("fin del programa de la tabla de multiplicar"); 

 //bucle while
 //programa que cuenta del 1 al 5
let contador=1;
while (contador <= 5){
    console.log("contador vale: " + contador);
    contador++;
}
console.log("fin del programa del bucle while");    

//programa que calcula el promedio entre dos notas
let nota1 = parseFloat(prompt("ingrese la primera nota: "));
while((nota1<0) || (nota1>5 )){
    nota1 = parseFloat(prompt("nota incorrecta, ingrese la primera nota nuevamente: "));
let nota2=parseFloat(prompt("ingrese la segunda nota: "));
while((nota2<0) || (nota2>5 )){
    nota2 = parseFloat(prompt("nota incorrecta, ingrese la segunda nota nuevamente: "));
}
promedio=(nota1+nota2)/ 2;
console.log("nota final:", promedio);
console.log("fin del programa del promedio");

//funciones 
//function declarativa
Tabnine | Edit | Explain | Document 
function Sumar() {
    sumar();}
    //Funcion con parametros 
    function producto(numero1, numero2){
        console.log("producto:" ,numero1*numero2);
    }  producto (2,5);  }
//funcion con valores de retorno
function resta (numero1, numero2){
    return numero1 - numero2;
}       
function potencia(base, exponente){
    return Math.pow(base, exponente);
    let resultado=base*exponente;   
    return resultado;
}  
let resResta=resta (10,5);   
let pot=potencia (2,3); 
console.log("resta:", resResta); 
console.log("potencia:", pot);

//function flecha   
const potenciaf = (base, exponente) => (base ** exponente);{
    return numero1 / numero2;
}
let resPotencia= potenciaf (4,2);
console.log("potencia flecha::", res);

//programa finalizado
console.log("fin del programa principal");  
