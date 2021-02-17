function policzDelte() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var delta = Math.pow(b, 2) - 4 * a * c;
    document.getElementById('delta').value = delta;
    document.getElementById('brakRozwiazan').value = "";
    if (delta < 0) {
        document.getElementById('brakRozwiazan').value = "To nie ma rozwiazania";
    }
    if (delta == 0) {
        x0 = -b / 2 * a;
        document.getElementById('x0').value = x0;
    }
    if (delta > 0) {
        x1 = (-b - Math.sqrt(delta)) / (2 * a);
        x2 = (-Number(b) + Math.sqrt(delta)) / (2 * a);
        document.getElementById('x1').value = Number(x1).toFixed(2);
        document.getElementById('x2').value = Number(x2).toFixed(2);
    }
}

function policzPierwiastekDelty() {
    var delta = document.getElementById('delta').value;
    document.getElementById('pierwiastekDelta').value = Math.sqrt(delta).toFixed(2);
}