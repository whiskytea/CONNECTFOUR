const game = new Game();
document.getElementById('begin-game').addEventListener('click', function(){
    game.startGame();

    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';

})

const beginButton = document.querySelector('begin-game');
beginButton.addEventListener('click', function(){
    game.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});
