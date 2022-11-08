let operacion = prompt("Que operacion quiere realizar? (+, -, / o *)")
let n1 = parseInt(prompt("Ingrese un numero"));
let n2 = parseInt(prompt("Ingrese otro numero"));
let resultado;

if (n1===Number && n2===numbrer){
switch(operacion){ 
    case "+": resultado=n1+n2;
    alert("El resultado de tu operacion es: " + resultado);
        break;
    case "-": resultado=n1-n2;
    alert("El resultado de tu operacion es: " + resultado);
        break;
    case "/":
        if(n2!=0){resultado=n1/n2;
    alert("El resultado de tu operacion es: " + resultado);}
        else {alert ("No se puede dividir por Cero")}
        break;
    case "*": resultado=n1*n2;
    alert("El resultado de tu operacion es: " + resultado);
        break;
    default: alert ("Ingrese una operacion admitida");
}
}
else{
    alert("Ingresa valores NUMERICOS")
}


