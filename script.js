/**
 * Created by sstienface on 03/12/2018.
 */

const holes = $('.hole');
const moles = $('.mole');
const scores = $('.score');
let temps;


function select_trou() {
        temps = setTimeout(select_trou, Math.random() * (1001 - 200) + 200);
        $(holes).removeClass('up');
        const trou = $(holes).get(Math.floor(Math.random() * holes.length));
        $(trou).addClass('up');
}

function afficher_score() {
    let point = 0;
    $(moles).click(function () {
        $(holes).removeClass('up');
        point++;
        $(scores).text(point);
    })
}

function startGame() {
    select_trou();
    afficher_score()
}

function arret_jeu() {
    window.clearTimeout(temps);
    $(holes).removeClass('up');
}

$('#startGame').click(function () {
    startGame();
    window.setInterval(arret_jeu, 10000)
});