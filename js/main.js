var go_btn = document.getElementById('go');
var restart_btn = document.getElementById('restart');
var goku = document.getElementById('goku');
var frieza = document.getElementById('frieza');
var laser = document.getElementById('laser');
var timer;

function startLaser () {
    laser.style.transition = 'all .7s linear'; 
    laser.style.marginLeft = '110%';
    timer = setTimeout (frieza_explosion, 600);
}

function restartLaser () {
    laser.src = 'img/energy.png';
    laser.style = 'display-block';
    laser.style.transition = 'none';
    frieza.src = 'img/frieza.png';
    clearTimeout(timer);
    
}

function frieza_explosion () {
    frieza.src = 'img/explosion.gif';
}




go_btn.onclick = startLaser;
restart_btn.onclick = restartLaser; 



