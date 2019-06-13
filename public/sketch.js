var board;
var players=[];
var no_of_players=0;
var colors=[[255,0,0],[0,255,0],[0,0,255],[255,187,0],[0,255,237],[255,255,0],[255,0,255]];
var turn=0;
var diceno=null;
function preload(){
    no_of_players=parseInt(prompt("Enter the number of players(1-7)"));
    while(no_of_players>7){
        no_of_players=parseInt(prompt("Enter the number of players(1-7)"));
    }
}
function setup(){
    createCanvas(900,900);
    background(0);
    board=new Board(10,10);
    for(var i=0;i<no_of_players;i++){
        this.players.push(new Player(i,1,colors[i]));
    }
}
function draw(){
    background(0);
    board.show();    
    var tempy=22;
    for(var i in players){
        if(players[i].started){    
            players[i].update(board.cells);
            players[i].show();
            players[i].checkLadderandSnake(board)
        }
        players[i].showLegend(tempy);
        tempy+=40;
    }
    stroke(255);
    noFill();
    textSize(15);
    text("Player "+(turn+1)+" Roll the Die",10,860);
    if(diceno!=null){
        stroke(255);
        noFill();
        rect(380,830,40,40);
        textSize(15);
        text(diceno,396,855)
    }
    stroke(255);
    noFill();
    rect(810,830,40,40);
    textSize(15);
    text("Roll",817,855)
}
// click space to throw a dice
function keyPressed(){
    if(keyCode==32){
        if(players[turn].cellNo==players[turn].target && players[turn].prevx==players[turn].x && players[turn].y==players[turn].prevy)
            roll();
    }
}
function roll(){
    diceno=floor(random(1,7));
    console.log(diceno);
    if(players[turn].started){
        if(players[turn].cellNo+diceno<=100){
            players[turn].target=players[turn].cellNo+diceno;
        }
        if(players[turn].cellNo==100){
            players[turn].win=true;
        }
    }
    else{
        if(diceno==6 ||diceno==1){
            players[turn].started=true;
        }
    }
    turn=(turn+1)%no_of_players;
    var count=0;
    while(players[turn].win && count<players.length){
        count++;
        turn=(turn+1)%no_of_players;                
    }
    if(count==players.length){
        alert("All Won!!");
    }
}
function mousePressed(){
    if(mouseX>=810 && mouseX<=850 && mouseY>=830 && mouseY<=870){
        // user clicked the roll button
        if(players[turn].cellNo==players[turn].target && players[turn].prevx==players[turn].x && players[turn].y==players[turn].prevy)
            roll();
    }
}