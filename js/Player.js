class Player{
    constructor(id, name, color, active = false) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);

    }

    createTokens(num) {
        const tokens = [];
        for (i = 0, i < num, i++){
            let token = new Token(i, this);
            tokens.push(token);
        }
        return tokens;
    }
}


//player ID
//player color
//box of player pieces
//player turn