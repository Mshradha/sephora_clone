var span = document.getElementsByTagName('span');
var div = document.getElementsByClassName('slide');
var l = 0;
span[1].onclick = () => {
    l++;
    for (var i of div) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-740px"; }
        if (l == 2) { i.style.left = "-1480px"; }
        if (l == 3) { i.style.left = "-2220px"; }
        if (l == 4) { i.style.left = "-2960px"; }
        if (l > 4) { l = 4 }


    }
}
span[0].onclick = () => {
    l--;
    for (var i of div) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-740px"; }
        if (l == 2) { i.style.left = "-1480px"; }
        if (l == 3) { i.style.left = "-2220px"; }

        if (l < 0) { l = 0 }


    }
}

// var span = document.getElementsByTagName('span');
// var div = document.getElementsByClassName('slide');
var m = 0;
span[4].onclick = () => {
    m++;
    for (var i of div) {
        if (m == 0) { i.style.left = "0px"; }
        if (m == 1) { i.style.left = "-740px"; }
        if (m == 2) { i.style.left = "-1480px"; }
        if (m == 3) { i.style.left = "-2220px"; }
        if (m == 4) { i.style.left = "-2960px"; }
        if (m > 4) { m = 4 }


    }
}
span[3].onclick = () => {
    m--;
    for (var i of div) {
        if (m == 0) { i.style.left = "0px"; }
        if (m == 1) { i.style.left = "-740px"; }
        if (m == 2) { i.style.left = "-1480px"; }
        if (m == 3) { i.style.left = "-2220px"; }

        if (m < 0) { m = 0 }


    }
}


// var span = document.getElementsByTagName('span');
// var div = document.getElementsByClassName('slide');
var l = 0;
span[6].onclick = () => {
    n++;
    for (var i of div) {
        if (n == 0) { i.style.left = "0px"; }
        if (n == 1) { i.style.left = "-740px"; }
        if (n == 2) { i.style.left = "-1480px"; }
        if (n == 3) { i.style.left = "-2220px"; }
        if (n == 4) { i.style.left = "-2960px"; }
        if (n > 4) { n = 4 }


    }
}
span[5].onclick = () => {
    n--;
    for (var i of div) {
        if (n == 0) { i.style.left = "0px"; }
        if (n == 1) { i.style.left = "-740px"; }
        if (n == 2) { i.style.left = "-1480px"; }
        if (n == 3) { i.style.left = "-2220px"; }

        if (n < 0) { l = 0 }


    }
}