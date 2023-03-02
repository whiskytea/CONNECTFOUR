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

    playToken(){
        //loop through the column spaces from furthest to closest
        let dropColumn = this.board.spaces[this.activePlayer.activeToken.columnLocation];
        //make sure the column isn't already full, and if not drop token, check game state, swap turns

        for (let x = dropColumn.length-1; x > 0; x--){ //goes through the column from bottom to
            let token = this.activePlayer.activeToken;
            if (dropColumn[x].token === null){
               dropColumn[x].token = token;
               //change the active token's location and state
                token.moveDown(x);

                //check game state
                //check vertical
                let collectIds = [];
                //check column
                for(let space of dropColumn){
                    // if (space.owner === owner){
                    //     tokenMatchCol.push(space)
                    // }
                    if(space.owner !== null){
                        collectIds.push(space.owner.id);
                    }

                }
                if (collectIds.length >= 4){
                    for(let i = 0; i < collectIds.length; i++){
                        console.log(collectIds);
                        if(collectIds[i] === collectIds[i+1]){
                            if(collectIds[i+1] === collectIds[i=2] && collectIds[i+2] !== 'undefined'){
                                if(collectIds[i+2] === collectIds[i+3] && collectIds[i+3] !== 'undefined'){
                                    if(collectIds[i+3] === collectIds[i+4] && collectIds[i+4] !== 'undefined') {
                                        console.log(collectIds[i+3]);
                                        console.log(collectIds[i+4]);
                                        alert(`player ${collectIds[i]} wins`);
                                    }
                                }
                            }
                        }
                    }
                }

                //swap active player
               this.players.forEach(player => {
                   if (player.active) {
                       player.active = false;
                   } else {
                       player.active = true;
                   }
               });
               //load up next token
               this.activePlayer.activeToken.drawHTMLToken();
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

}
