//game container
//class to handle pieces
//class to handle players
//way to place pieces and remember location
//way to handle turn rotation
//way to handle scoring victory
//way to reset game

class Game{
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    createPlayers(){
        const players = [];
        //player one
        const player1 = new Player('Player 1', '#E15258', 1, true);
        const player2 = new Player('Player 2', '#E59A13', 2, false);

        players.push(player1, player2);
        return players;

    }

    get activePlayer(){
        return this.players.find(player => player.active);
    }

    startGame(){
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }

    // HANDLE KEY COMMANDS
    handleKeydown(e){
        if(this.ready){ //checks if the game is ready, then continues
            if(e.key === 'ArrowLeft'){
                //if there is an available left column, move left one
                this.activePlayer.activeToken.moveLeft();
            }else if(e.key === 'ArrowRight'){
                //if there is an available right column, move right one
                this.activePlayer.activeToken.moveRight(this.board.columns);
            }else if(e.key === 'ArrowDown'){
                //if the column is not full, drop the token down to the lowest
                //available space
            }
        }

    }

}
