class Cell{
    constructor(x_,y_,no){
        this.width=80;
        this.height=80;
        this.x=x_;
        this.y=y_;
        this.cellNo=no;
    }
    show(){
        stroke(255);
        noFill();
        rect(this.x,this.y,this.width,this.height);
        textSize(20);
        text(this.cellNo,this.x+this.width/2-10,this.y+this.height/2+5);
    }
}