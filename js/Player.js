class Player{
    constructor(name, color, id, active = false) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);

    }

    createTokens(num) {
        const tokens = [];
        for (let i = 0; i < num; i++){
            let token = new Token(i, this);
            tokens.push(token);
        }
        return tokens;
    }

    get unusedTokens(){
        return this.tokens.filter(token => !token.inPlay);
    }

    get activeToken(){
        return this.unusedTokens[0];
    }

    checkTokens(){
        if(this.unusedTokens.length === 0){
            return true;
        }
    }
}
