class Token{
    constructor(index, player) {
        this.player = player;
        this.id = `token-${index}-${player.id}`;
        this.inPlay = false;

    }

    drawHTMLToken(){
        const token = document.createElement('DIV');
        token.setAttribute('id', this.id);
        token.setAttribute('class', 'token');
        token.style.backgroundColor = this.player.color;
        document.getElementById('game-board-underlay').appendChild(token);
    }

    get htmlToken(){
        return this.drawHTMLToken();
    }
}

//token color
//token id
//belongs to player id
//token location
//token in play