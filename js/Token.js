class Token{
    constructor(player) {
        this.player = player;
        this.id = `token-${index}-${owner.id}`;
        this.inPlay = false;

    }

    drawHTMLToken(){
        const div = document.createElement('DIV');
        div.setAttribute(ID, this.id);
        div.setAttribute(CLASS, 'token');
        div.style.backgroundColor = this.player.color;
        document.querySelector('game-board-overlay').appendChild(div);
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