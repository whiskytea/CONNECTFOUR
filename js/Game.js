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

    playToken(){
        //loop through the column spaces from furthest to closest
        let dropColumn = this.board.spaces[this.activePlayer.activeToken.columnLocation];
        //make sure the column isn't already full, and if not drop token, check game state, swap turns
        for (let x = dropColumn.length-1; x >= 0; x--) { //goes through the column from bottom to top
            let token = this.activePlayer.activeToken;
            if (dropColumn[x].token === null) {
                dropColumn[x].token = token;

                token.moveDown(x);
                if(this.checkForWin(token)){
                    this.gameOver('win', token);
                }else if(this.activePlayer.checkTokens()){
                    this.gameOver('draw', token);
                }else{

                    //swap active player
                    this.players.forEach(player => {
                        player.active = player.active === true ? false : true; // ternary expressions are odd
                    });

                    //load up next token
                    this.activePlayer.activeToken.drawHTMLToken();
                }
                break;
            }

        }
    }


    // HANDLE KEY COMMANDS
    handleKeydown(e){
        if(this.ready){ //checks if the game is ready, then continues
            if(e.key === 'ArrowLeft'){
                //if there is an available left column, move left one
                this.activePlayer.activeToken.moveLeft();
            }else if(e.key === 'ArrowRight'){
                //if there is an available right column, move right one
                this.activePlayer.activeToken.moveRight();
            }else if(e.key === 'ArrowDown'){
                //if the column is not full, drop the token down to the lowest
                //available space
                this.playToken();
            }
        }
    }



    //I'm sad I didn't figure this out myself TT_TT

    checkForWin(target){
        const owner = target.player;
        let win = false;
        // vertical
        for (let x = 0; x < this.board.columns; x++ ){
            for (let y = 0; y < this.board.rows - 3; y++){
                if (this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x][y+1].owner === owner &&
                    this.board.spaces[x][y+2].owner === owner &&
                    this.board.spaces[x][y+3].owner === owner) {
                    win = true;
                }
            }
        }

        // horizontal
        for (let x = 0; x < this.board.columns - 3; x++ ){
            for (let y = 0; y < this.board.rows; y++){
                if (this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x+1][y].owner === owner &&
                    this.board.spaces[x+2][y].owner === owner &&
                    this.board.spaces[x+3][y].owner === owner) {
                    win = true;
                }
            }
        }

        // diagonal
        for (let x = 3; x < this.board.columns; x++ ){
            for (let y = 0; y < this.board.rows - 3; y++){
                if (this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x-1][y+1].owner === owner &&
                    this.board.spaces[x-2][y+2].owner === owner &&
                    this.board.spaces[x-3][y+3].owner === owner) {
                    win = true;
                }
            }
        }

        // diagonal
        for (let x = 3; x < this.board.columns; x++ ){
            for (let y = 3; y < this.board.rows; y++){
                if (this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x-1][y-1].owner === owner &&
                    this.board.spaces[x-2][y-2].owner === owner &&
                    this.board.spaces[x-3][y-3].owner === owner) {
                    win = true;
                }
            }
        }

        return win;
    }

    gameOver(check, target){
        this.ready = false;
        let player = target.player.name;
        let message;
        if (check === 'win'){
            message = `${player} Wins!`;
        }else{
            message = `${player} ran out of tokens. It's a draw.`
        }
        document.getElementById('game-over').style.display = 'block';
        document.getElementById('game-over').textContent = message;

    }

}
