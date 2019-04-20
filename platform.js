function platform(){
this.x = 0;
this.y = h-250;
this.show = function(){
fill(color('green'));
image(grass,this.x, this.y, w, 200);
}
}