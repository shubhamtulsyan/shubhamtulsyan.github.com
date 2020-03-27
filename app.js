var count = 0;
var actualArr = [];
var nameArr = [];
var date;

function genNameRow(params) {
    var numPlayer = parseInt(document.getElementById("quantity").value);
    count = numPlayer;
    var createRow = document.getElementById("playersName");
    for (var i = 0; i < numPlayer; i++) {
        var eleId = "player-" + (i + 1);
        var newInput = document.createElement("input");
        var newLable = document.createElement("label");
        var lineBreak = document.createElement("br");
        newInput.setAttribute("type", "text");
        newInput.setAttribute("id", eleId);
        newLable.htmlFor = eleId;
        newLable.innerHTML = eleId;
        createRow.appendChild(newLable);
        createRow.appendChild(newInput);
        createRow.appendChild(lineBreak);
        createRow.appendChild(lineBreak);
    }
}

function genTicket() {
    playerCount = document.getElementById("quantity").value;
    playerName(playerCount);
    todayDate();
    var selectedCell = [];
    do {
        for (var i = 0; i < 3; i++) {
            var numSet = [];
            do {
                var newNum = generateRandomNum(9, 1)
                if (numSet.includes(newNum)) {
                    continue;
                } else {
                    numSet.push(newNum)
                }
            } while (numSet.length != 5)
            numSet.sort();
            selectedCell.push(numSet);
        }
        actualArr.push(getActualNum(selectedCell));
        selectedCell = [];
    } while (actualArr.length < playerCount);
    ticketTable(actualArr);
}

function getActualNum(selectedCell) {
    var newArr = [];
    var actualArr = [];
    for (var j = 0; j < selectedCell.length; j++) {
        newArr = newArr.concat(selectedCell[j]);
    }
    for (var i = 0; i < newArr.length; i++) {
        do {
            var temp = switchfunction(newArr[i]);
        } while (actualArr.includes(temp));
        actualArr.push(temp);
    }
    return actualArr;
}

function switchfunction(value) {
    switch (value) {
        case 1:
            return generateRandomNum(1, 9);
            break;
        case 2:
            return generateRandomNum(10, 19);
            break;
        case 3:
            return generateRandomNum(20, 29);
            break;
        case 4:
            return generateRandomNum(30, 39);
            break
        case 5:
            return generateRandomNum(40, 49);
            break;
        case 6:
            return generateRandomNum(50, 59);
            break;
        case 7:
            return generateRandomNum(60, 69);
            break;
        case 8:
            return generateRandomNum(70, 79);
            break;
        case 9:
            return generateRandomNum(80, 90);
            break;
    }
}

function generateRandomNum(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playerName(playerCount) {
    //player-1
    for (var i = 1; i <= playerCount; i++) {
        nameArr.push(document.getElementById("player-" + i).value);
    }
}

function ticketTable(actualArr) {
    var x = document.getElementById("ticket");
    for (var i = 0; i < actualArr.length; i++) {
        var d = document.createElement("div");
        d.setAttribute("id", nameArr[i] + "_id");
        x.appendChild(d);
        var n = document.createElement("h3");
        n.appendChild(document.createTextNode((nameArr[i]) + "_" + date));
        d.appendChild(n);
        var t = document.createElement("Table");
        t.setAttribute("id", nameArr[i]);
        d.appendChild(t);
        for (var j = 0; j < 3; j++) {
            var r = document.createElement("tr");
            t.appendChild(r);
            var c = 0;
            do {
                c = c + 1;
                var d = document.createElement("td");
                var n;
                switch (c) {
                    case 1:
                        if (actualArr[i][0] < 10) {
                            n = document.createTextNode(actualArr[i][0]);
                            actualArr[i].shift();
                        } else {
                            n = document.createTextNode("");
                        }
                        break;
                    case 2:
                        if (actualArr[i][0] >= 10 && actualArr[i][0] < 20) {
                            n = document.createTextNode(actualArr[i][0]);
                            actualArr[i].shift();
                        } else {
                            n = document.createTextNode("");
                        }
                        break;
                    case 3:
                        if (actualArr[i][0] >= 20 && actualArr[i][0] < 30) {
                            n = document.createTextNode(actualArr[i][0]);
                            actualArr[i].shift();
                        } else {
                            n = document.createTextNode("");
                        }
                        break;
                    case 4:
                        if (actualArr[i][0] >= 30 && actualArr[i][0] < 40) {
                            n = document.createTextNode(actualArr[i][0]);
                            actualArr[i].shift();
                        } else {
                            n = document.createTextNode("");
                        }
                        break;
                    case 5:
                        if (actualArr[i][0] >= 40 && actualArr[i][0] < 50) {
                            n = document.createTextNode(actualArr[i][0]);
                            actualArr[i].shift();
                        } else {
                            n = document.createTextNode("");
                        }
                        break;
                    case 6:
                        if (actualArr[i][0] >= 50 && actualArr[i][0] < 60) {
                            n = document.createTextNode(actualArr[i][0]);
                            actualArr[i].shift();
                        } else {
                            n = document.createTextNode("");
                        }
                        break;
                    case 7:
                        if (actualArr[i][0] >= 60 && actualArr[i][0] < 70) {
                            n = document.createTextNode(actualArr[i][0]);
                            actualArr[i].shift();
                        } else {
                            n = document.createTextNode("");
                        }
                        break;
                    case 8:
                        if (actualArr[i][0] >= 70 && actualArr[i][0] < 80) {
                            n = document.createTextNode(actualArr[i][0]);
                            actualArr[i].shift();
                        } else {
                            n = document.createTextNode("");
                        }
                        break;
                    case 9:
                        if (actualArr[i][0] >= 80 && actualArr[i][0] <= 90) {
                            n = document.createTextNode(actualArr[i][0]);
                            actualArr[i].shift();
                        } else {
                            n = document.createTextNode("");
                        }
                        break;
                }
                d.appendChild(n);
                r.appendChild(d);
            } while (c < 9);
        }
    }
}

function todayDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    date = mm + '/' + dd + '/' + yyyy;
}