function calculator() {

    // Variables
    let inp = document.getElementsByName('trade');
    let selected = '';
    let result = 0;
    let deposite = document.getElementById("deposite").value;
    let openCon = document.getElementById('openC').value;
    let closeCon = document.getElementById('closeC').value;
    let node = document.getElementById('node-id');
    let node2 = document.getElementById('node-id2');
    let newNode = document.createElement('span');
    let newNode2 = document.createElement('span');
    let elements = document.querySelectorAll('.depo');
    let elements2 = document.querySelectorAll('.depo2');
    let laverage = document.getElementById('rs-range-line').value;
    let firstpart = 0;
    let semiResult = 0;
    let perc = 0;

    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            selected = inp[i].value;
            console.log(selected);
        }
    }

    if (elements.length > 0) {
        elements[0].remove();
    }

    if (elements2.length > 0) {
        elements2[0].remove();
    }

    newNode.setAttribute("class", "depo");
    newNode2.setAttribute("class", "depo2");

    firstpart = deposite * laverage;
    semiResult = (firstpart / openCon) * closeCon;
    result = semiResult - firstpart;
    perc = (result*100) / deposite;

    if (selected === 'short') {
        result *= (-1);
        perc *= (-1);
    }

    result = result.toFixed(2);
    perc = perc.toFixed(2);

    if (isNaN(result)) {
        result = 0;
    }

    if (isNaN(perc)) {
        perc = 0;
    }

    newNode.appendChild(document.createTextNode(result));
    node.appendChild(newNode);

    newNode2.appendChild(document.createTextNode(perc));
    node2.appendChild(newNode2);
}