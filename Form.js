class Form {

  constructor() {
    
    this.button = createButton('Play');
   
    this.title = createElement('h2');
    
  }
  hide(){
    
    this.button.hide();
    
    this.title.hide();
  }

  display(){
    this.title.html("Good Doggos");
    this.title.position(displayWidth/2 - 50, 0);

    
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    


    this.button.mousePressed(()=>{
      
      this.button.hide();
      this.title.hide();
      gameState === 2;
     
      
    });

    
    
    

  }
}
