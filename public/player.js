class Player{
    constructor(id,cellno,color){
        this.started=false;
        this.cellNo=cellno;
        this.id=id;
        this.win=false;
        this.color=color;
        this.x_off=(this.id%4)*20;
        this.y_off=(floor(this.id/4))*20;
        this.prevx=board.cells[board.cells.length-1].x+this.x_off;
        this.prevy=board.cells[board.cells.length-1].y+this.y_off;
        this.x=board.cells[board.cells.length-1].x+this.x_off;
        this.y=board.cells[board.cells.length-1].y+this.y_off;
        this.target=cellno;
    }
    show(){
        stroke(this.color[0],this.color[1],this.color[2]);
        fill(this.color[0],this.color[1],this.color[2],100); 
        rect(this.prevx,this.prevy,18,18);    
    }
    update(cells){
        // this.prevx=lerp(this.prevx,this.x,0.05);
        // this.prevy=lerp(this.prevy,this.y,0.05);
        if(this.cellNo!=this.target && this.prevx==this.x && this.prevy==this.y){
            if(this.cellNo+1<=100){
                this.cellNo+=1;
                if(this.cellNo==100)
                    this.win=true;
            }
        }
        for(var i in cells){
            if(cells[i].cellNo==this.cellNo){
                this.x=cells[i].x+this.x_off;
                this.y=cells[i].y+this.y_off;
            }
        }
        if(this.prevx<this.x)
            this.prevx+=4;
        if(this.prevx>this.x)
            this.prevx-=4;
        if(this.prevy>this.y)
            this.prevy-=4;
        if(this.prevy<this.y)
            this.prevy+=4;
    }
    checkLadderandSnake(board){
        if(this.cellNo==this.target && this.prevx==this.x && this.prevy==this.y){
            for(var i in board.ladders){
                if(board.ladders[i].source==this.cellNo){ 
                    this.cellNo=board.ladders[i].target;
                    this.target=board.ladders[i].target;
                }
            }
            for(var i in board.snakes){
                if(board.snakes[i].target==this.cellNo){ 
                    this.cellNo=board.snakes[i].source;
                    this.target=board.snakes[i].source;
                }
            }
        }
    }
    showLegend(temp_y){
        stroke(255);
        textSize(12);
        noFill();
        text("Player "+(parseInt(this.id)+1),810,temp_y+12);
        stroke(this.color[0],this.color[1],this.color[2]);
        fill(this.color[0],this.color[1],this.color[2],100); 
        rect(860,temp_y,18,18);
    }
}