let player1 = {
    name: "Scorpion",
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Kunai', 'Fists'],
    attack: function() { 
        console.log(`${this.name} Fight`)
    }
}

let player2 = {
    name: "Subzero",
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Frost', 'Fists'],
    attack: function() { 
        console.log(`${this.name} Fight`)
    }
}
function createPlayer(name, object) {
    let arena = document.querySelector('.arenas');
    let $player = document.createElement('div');
    let $progressBar = document.createElement('div');
    let $character = document.createElement('div');
    let $life = document.createElement('div');
    let $name = document.createElement('div');
    let $img = document.createElement('img');

    $player.classList.add(name);
    $progressBar.classList.add('progressbar');
    $character.classList.add('character');
    $life.classList.add('life');
    $name.classList.add('name');

    $life.innerText = object.hp;
    $name.innerText = object.name;
    $img.src = object.img;

    $progressBar.appendChild($life);
    $progressBar.appendChild($name);
    $character.appendChild($img);
    $player.appendChild($progressBar);
    $player.appendChild($character);

    arena.appendChild($player);

}

createPlayer('player1', player1);
createPlayer('player2', player2);
