function classificar() {


//pegar os campos
let lado1 = document.getElementById("lado1").value
let lado2 = document.getElementById("lado2").value
let lado3 = document.getElementById("lado3").value
//2ºclassificar
if(lado1 == lado2 && lado2 == lado3 && lado3 == lado1) {
    alert("Triângulo Equilatero")
} else if(lado1 != lado2 && lado2 != lado3  && lado3 != lado1) {
    alert("Triangulo Escaleno")
} else if(
(lado1 == lado2 && lado2 != lado3) 
|| 
(lado2 == lado3 && lado3 != lado1) 
||
(lado1 == lado3 && lado3 != lado2))
{
    alert("Triangulo Isóceles")
}
//3ºexibir resultado
}