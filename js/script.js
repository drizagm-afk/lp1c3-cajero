let money = 100;
const saldo = document.getElementById("saldo");
function render() {
    saldo.textContent = "Saldo: " + money + "$";
}
render();

const input = document.getElementById("input");
function value() {
    const val = parseFloat(input.value);
    if (Number.isNaN(val))
        throw Error("El monto ingresado \"" + input.value + "\" no es un Numero");
    if (val < 0)
        throw Error("El monto ingresado \"" + input.value + "\" no puede ser Negativo");

    return val;
}

function depositar() {
    let val;
    try {
        val = value();
    } catch (e) {
        alert(e.message);
        return;
    }

    money += val;
    render();
}
function retirar() {
    let val;
    try {
        val = value();
        if (money < val) throw Error("Saldo insuficiente");
    } catch (e) {
        alert(e.message);
        return;
    }

    money -= val;
    render();
}