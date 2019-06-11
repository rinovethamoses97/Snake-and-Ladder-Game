class Player{
    constructor(id,cellno,color){
        this.cellNo=cellno;
        this.id=id;
        this.win=false;
        this.color=color;
        this.x_off=(this.id%4)*20;
        this.y_off=(floor(this.id/4))*20;
        this.prevx=null;
        this.prevy=null;
        this.x=null;
        this.y=null;
    }
    show(){
        if(this.prevx==null && this.prevy==null){
            this.prevx=this.x;
            this.prevy=this.y;
        }
        this.prevx=lerp(this.prevx,this.x,0.05);
        this.prevy=lerp(this.prevy,this.y,0.05);
        stroke(this.color[0],this.color[1],this.color[2]);
        fill(this.color[0],this.color[1],this.color[2],100); 
        rect(this.prevx,this.prevy,18,18);    
    }
    update(cells){
        for(var i in cells){
            if(cells[i].cellNo==this.cellNo){
                this.x=cells[i].x+this.x_off;
                this.y=cells[i].y+this.y_off;
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