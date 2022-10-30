const txtOp1 = document.getElementById("op1")
const txtOp2 = document.getElementById("op2")
const txtOp3 = document.getElementById("op3")
const btnCalcular = document.getElementById("button")
const pResult = document.getElementById("result")

btnCalcular.addEventListener('click',calcular)

function calcular(){
    const operador = txtOp3.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

    if ((operador == "+" || operador == "-"|| operador =="/" ||
     operador == "*") && !isNaN(op1) && !isNaN(op2)) {
        let result;
        switch (operador) {
            case "+":
                result =op1 + op2
                break;
            case "-":
                result = op1 - op2
                break;
            case "/":
                result = op1 / op2
                break;
            case "*":
                result = op1 * op2
                break;       
        }
        pResult.innerText= "El Resultado es = " + result  
    }else{
        pResult.innerText=("caculo imposible")
    }
}