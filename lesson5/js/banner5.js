function showbannerad() {
    var x = document.getElementById('bannerad');
    if(d.getDay()== 5) {
        x.style.display = 'block';
    }
    else {
        x.style.display = 'none';
    }
}