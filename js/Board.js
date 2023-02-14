class Board{
    constructor(rows = 6,columns = 7){
        this.rows = rows;
        this.columns = columns;
        this.spaces = this.createSpaces();
    }

    createSpaces(){
        const spaces = [];
        for (let x = 0; x < this.columns; x++){ // we're going to create the columns
            const column = [];

            for (let y = 0; y < this.rows; y++){ // which need to be made of row spaces
                const space = new Space(x, y);
                column.push(space);
            }

            spaces.push(column);
        }
        return spaces;
    }

    drawHTMLBoard() {
        for (const column of this.spaces){
            for (const space of column){
                space.drawSVGSpace();
            }
        }
    }
}