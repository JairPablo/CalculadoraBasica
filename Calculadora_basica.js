let operacion = prompt("Que operacion quiere realizar? (+, -, / o *)")
let n1 = parseInt(prompt("Ingrese un numero"));
let n2 = parseInt(prompt("Ingrese otro numero"));
let resultado;


switch(operacion){
    case "+": resultado=n1+n2;
    alert("El resultado de tu operacion es: " + resultado);
        break;
    case "-": resultado=n1-n2;
    alert("El resultado de tu operacion es: " + resultado);
        break;
    case "/": resultado=n1/n2;
    alert("El resultado de tu operacion es: " + resultado);
        break;
    case "*": resultado=n1*n2;
    alert("El resultado de tu operacion es: " + resultado);
        break;
    default: alert ("Ingrese una operacion admitida");
}



