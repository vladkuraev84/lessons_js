function fun1() {
    var sel = document.getElementById('mySelect').selectedIndex;
    var options = document.getElementById('mySelect').options;
    alert('Выбрана опция ' + options[sel].text);
}

function fun2() {
    var rng = document.getElementById('r1');
    var p = document.getElementById('one');
    p.innerHTML = rng.value;
    var i1 = document.getElementById('i1');
    i1.value = rng.value;
    var div = document.getElementById('test');
    div.style.width = rng.value + 'px';
}