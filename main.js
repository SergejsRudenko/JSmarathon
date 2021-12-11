const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

let player1 = {
    player: 1,
    name: "Scorpion",
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Kunai', 'Fists'],
    attack: function() { 
        console.log(`${this.name} Fight`)
    }
}

let player2 = {
    player: 2,
    name: "Subzero",
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Frost', 'Fists'],
    attack: function() { 
        console.log(`${this.name} Fight`)
    }
}

function randomNumber() {
    return Math.floor(Math.random() * 20);
}
function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if(className) {
        $tag.classList.add(className)
    }
    return $tag;
}

function createPlayer(playerObject) {
    const $player = createElement('div', 'player'+playerObject.player);
    const $progressBar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = playerObject.hp + '%';
    $name.innerText = playerObject.name;
    $img.src = playerObject.img;

    $progressBar.appendChild($name);
    $progressBar.appendChild($life);

    $character.appendChild($img);

    $player.appendChild($progressBar);
    $player.appendChild($character);

    return $player;

}

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -=randomNumber();
    $playerLife.style.width = player.hp + '%';
    if(player.hp <= 0 ) {
        $playerLife.style.width = 0;
    }

    if(player1.hp < 0) {
        $arenas.appendChild(playerLose(player2.name));
        $randomButton.disabled = true;
    }
    if(player2.hp < 0) {
        $arenas.appendChild(playerLose(player1.name));
        $randomButton.disabled = true;
    }
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' Won';

    return $loseTitle;
}

$randomButton.addEventListener('click', function() {
    changeHP(player1);
    changeHP(player2);
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

