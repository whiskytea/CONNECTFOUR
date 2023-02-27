class Token{
    constructor(index, player) {
        this.player = player;
        this.id = `token-${index}-${player.id}`;
        this.inPlay = false;
        this.columnLocation = 0;
    }

    drawHTMLToken(){
        const token = document.createElement('DIV');
        token.setAttribute('id', this.id);
        token.setAttribute('class', 'token');
        token.style.backgroundColor = this.player.color;
        document.getElementById('game-board-underlay').appendChild(token);
    }

    get htmlToken(){
        return document.getElementById(this.id);
    }

    get offsetLeft(){
        return this.htmlToken.offsetLeft;
    }

    moveLeft(){
        if (this.columnLocation !== 0){
            this.columnLocation -= 1;
            this.htmlToken.style.left = this.offsetLeft - 76;
        }
    }

    moveRight(){
        if (this.columnLocation < 6){
            this.columnLocation += 1;
            this.htmlToken.style.left = this.offsetLeft + 76;
        }
    }

    moveDown(space){
        this.htmlToken.style.top = `${1*space}px`;
    }
}

//token color
//token id
//belongs to player id
//token location
//token in play