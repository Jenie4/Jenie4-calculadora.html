calculadora.js
class Calculadora {
    constructor() {
        let numero1=18;
        let numero2 = 5;
        let operacion=Number(prompt("1sumar 2restar 3multiplicar 4dividir"));
        function realizarOperacion(Num1, Num2, operacion){
            if(operacion>0 && operacion<5){
                switch(operacion){
                    case 1:
                        return this.sumar(Num1, Num2);
                    case 2:
                        return this.restar(Num1, Num2);
                    case 3:
                        return this.multiplicar(Num1, Num2);
                    case 4:
                        return this.dividir(Num1, Num2);
                }
                } else {
                    alert("la operación ingresada no es válida, ingrese un número entre 1 y 4");
                    this.resultado = 0;
                }

    sumar(a, b) {
        this.resultado = a + b;
        return this.resultado;
    }

    realizarOperacion(Num1, Num2, operacion) {
        if (operacion > 0 && operacion < 5) {
            switch (operacion) {
                case 1:
                    return this.sumar(Num1, Num2);
                case 2:
                    return this.restar(Num1, Num2);
                case 3:
                    return this.multiplicar(Num1, Num2);
                case 4:
                    return this.dividir(Num1, Num2);
            }
        } else {
            alert("la operación ingresada no es válida, ingrese un número entre 1 y 4");
            this.resultado = 0;
        }
    }

    restar(a, b) {
        this.resultado = a - b;
        return this.resultado;
    }

    multiplicar(a, b) {
        this.resultado = a * b;
        return this.resultado;
    }

    multiplicar(a, b) {
this.resultado = a * b;
return this.resultado;
}
    dividir(a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        this.resultado = a / b;
        return this.resultado;
    }

    obtenerResultado() {
        return this.resultado;
    }
}
const calculadora = new Calculadora();
console.log("Resultado de la operación:", calculadora.obtenerResultado());
function realizarOperacion(Num1, Num2, operacion){
} let resultado = realizarOperacion(numero1, numero2, operacion);
while((operacion < 1) || (operacion > 4)){
let resultado = calculadora.realizarOperacion(numero1, numero2, operacion);
numero2 = Number(prompt("ingrese el segundo número:"));
return resultado;
} 