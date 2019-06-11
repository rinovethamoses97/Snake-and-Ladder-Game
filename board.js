class Board{
    constructor(r,c){
        this.cells=[];
        this.ladders=[];
        this.snakes=[];
        this.rows=r;
        this.columns=c;
        var count=100;
        for(var i=0;i<this.rows;i++){
            if(i%2==0){
                for(var j=0;j<this.columns;j++){
                    this.cells.push(new Cell(j*80,i*80,count));
                    count--;
                }
            }
            else{
                for(var j=this.columns-1;j>=0;j--){
                    this.cells.push(new Cell(j*80,i*80,count));
                    count--;
                }
            }
        }
        var random_options=[];
        for(var i=0;i<99;i++){
            random_options.push(i+1);
        }
        // creating 5 ladders
        for(var i=0;i<5;i++){
            var r=floor(random(0,random_options.length-1));
            var s=random_options[r];
            random_options.splice(r,1);
            r=floor(random(r,random_options.length-1));
            var t=random_options[r];
            random_options.splice(r,1);
            this.ladders.push(new Ladder(s,t,true));
        }
        // create 5 snakes
        for(var i=0;i<5;i++){
            var r=floor(random(0,random_options.length-1));
            var s=random_options[r];
            random_options.splice(r,1);
            r=floor(random(r,random_options.length-1));
            var t=random_options[r];
            random_options.splice(r,1);
            this.snakes.push(new Ladder(s,t,false));
        }
    }
    show(){
        for(var i in this.cells){
            this.cells[i].show();
        }
        for(var i in this.ladders){
            this.ladders[i].show(this.cells);
        }
        for(var i in this.snakes){
            this.snakes[i].show(this.cells);
        }
    }    
    sort_ladders(){
        // bubble sort
        for(var i=0;i<this.ladders.length;i++){
            for(var j=0;j<this.ladders.length-i-1;j++){
                if(this.ladders[j].source>this.ladders[j+1].source){
                    var temp=this.ladders[j];
                    this.ladders[j]=this.ladders[j+1];
                    this.ladders[j+1]=temp;
                }
            }
        }
    }
    sort_snakes(){
        // bubble sort
        for(var i=0;i<this.snakes.length;i++){
            for(var j=0;j<this.snakes.length-i-1;j++){
                if(this.snakes[j].target<this.snakes[j+1].target){
                    var temp=this.snakes[j];
                    this.ladders[j]=this.ladders[j+1];
                    this.ladders[j+1]=temp;
                }
            }
        }
    }
}