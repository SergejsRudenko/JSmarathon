const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

let player1 = {
    player: 1,
    name: "Scorpion",
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Kunai', 'Fists'],
    changeHP: changeHP,
    elHP: elHP,
    renderHP: renderHP,
    attack: attack,
}

let player2 = {
    player: 2,
    name: "Subzero",
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Frost', 'Fists'],
    changeHP: changeHP,
    elHP: elHP,
    renderHP: renderHP,
    attack: attack,
}
function attack() {
    return this.name + ' Fight...';
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag
}

function createPlayer(playerObject) {
    const $player = createElement('div', 'player' + playerObject.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = playerObject.hp +'%';
    $name.innerText = playerObject.name;
    $img.src = playerObject.img;

    $progressbar.appendChild($name);
    $progressbar.appendChild($life);

    $character.appendChild($img);

    $player.append($progressbar, $character);

    return $player;
}

function getRandom(number) {
    return Math.floor(Math.random() * number);
}

function changeHP(damage) {
    this.hp -= damage;
    if (this.hp <= 0) {
        this.hp = 0;
    }
    return this.hp
}

function elHP() {
    return document.querySelector('.player' + this.player + ' .life');
}

function renderHP() {
    this.elHP().style.width = this.hp + '%';
}

function playerWins(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    if (name) {
        $loseTitle.innerText = name + ' Win';
        $randomButton.disabled = true;

    } else {
        $loseTitle.innerText = 'Draw';
        $randomButton.disabled = true;
    }
    return $loseTitle;
}
function createReloadButton() {
    const $reloadWrap = createElement('div', 'reloadWrap');
    const $reloadButton = createElement('button', 'button')

    $reloadButton.innerText = 'Restart';
    $reloadButton.addEventListener('click', function() {
        window.location.reload();
    })
    $reloadWrap.appendChild($reloadButton);
    return $reloadWrap;
}

$randomButton.addEventListener('click', function () {
    player1.changeHP(getRandom(20));
    player2.changeHP(getRandom(20));

    player1.renderHP();
    player2.renderHP();

  

    if (player1.hp > 0 && player2.hp === 0) {
        $arenas.appendChild(playerWins(player1.name));
        $arenas.appendChild(createReloadButton());
        
    } else if (player1.hp === 0 && player2.hp > 0) {
        $arenas.appendChild(playerWins(player2.name));
        $arenas.appendChild(createReloadButton());

    } else if (player1.hp === 0 && player2.hp === 0) {
        $arenas.appendChild(playerWins());
        $arenas.appendChild(createReloadButton());

    }

})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));