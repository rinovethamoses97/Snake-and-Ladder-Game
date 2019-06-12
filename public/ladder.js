class Ladder{
    constructor(s,t,isLadder){
        this.source=s;
        this.target=t;
        this.isLadder=isLadder;
    }
    show(cells){
        var x1,y1,x2,y2;
        for(var i in cells){
            if(cells[i].cellNo==this.source){
                x1=cells[i].x;
                y1=cells[i].y;
            }
            if(cells[i].cellNo==this.target){
                x2=cells[i].x;
                y2=cells[i].y;
            }
        }
        if(this.isLadder)
            stroke(color(0,255,0));
        else
            stroke(color(255,0,0));
        line(x1+40,y1+40,x2+40,y2+40);
    }
}