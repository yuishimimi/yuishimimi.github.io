function jumper(){
        this.x = 500;
        this.y = h-230;
        this.gravity = 0.5; //the force of gravity is one;
        this.lift = -10;//opposing force actd on when key is pressed
        this.velocity = 0;//start speed of gravity
        this.width = 50;
        this.height = 50;
        this.show = function(){
          fill(color('red'));
          ellipse(this.x, this.y, this.width,this.height);
        }
        this.up = function(){
          if(jumpCount < 2){
           this.velocity += this.lift;
          }
          
        }
        this.update = function(){
          this.velocity += this.gravity;
          this.y += this.velocity;
          this.velocity *= 0.9;
          if(this.y > h-220){//stop on floor
            this.y= h-220;
            this.velocity = 0;//if this.velocity = -10, it can bounce
            jumpCount=0;
          }
          if(this.y<0){//stop on ceiling
            this.y = 0;
            this.velocity = 0;
          }
        }
        
      }
      function keyPressed(){
        if(keyCode === 32){
          jumper.up();
          jumpCount++;
        }
      }