function calculator() {
    let inp = document.getElementsByName('trade');
    let selected = '';
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            selected = inp[i].value;
        }
    }

    let result = 0;
    let deposite = document.getElementById("deposite").value;
    let openCon = document.getElementById('openC').value;
    let closeCon = document.getElementById('closeC').value;
    let node = document.getElementById('node-id');
    let newNode = document.createElement('span');
    let elements = document.querySelectorAll('.depo');
    let laverage = document.getElementById('laverage').value;

    if (elements.length > 0) {
        elements[0].remove();
    }
    newNode.setAttribute("class", "depo");
    let firstpart = 0;
    let semiResult = 0;
    if (selected === 'long') {
        firstpart = deposite * laverage;
        semiResult = (firstpart / openCon) * closeCon;
        result = semiResult - firstpart;
    } else {
        firstpart = deposite * laverage;
        semiResult = (firstpart / openCon) * closeCon;
        result = (semiResult - firstpart) * (-1);
    }
    newNode.appendChild(document.createTextNode(result));
    node.appendChild(newNode);

    if (elements.length > 1) {
        newNode.remove();
    }
}