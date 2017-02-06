
function fun1() {
    var chbox;
    chbox=document.getElementById('one');
    if(chbox.checked){
        alert('Выбран');
    } else {
        alert('Не выбран')
    }
}

function fun2() {
    var rad1=document.getElementsByName('r1');
    for(var i = 0; i < rad1.length; i++){
        if (rad1[i].checked){
            alert('Выбран ' + i + ' элемент');
        }
    }
}
