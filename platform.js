function platform(){
this.x = 0;
this.y = h-200;
this.show = function(){
fill(color('green'));
image(grass,this.x, this.y, w, 200);
}
}