canvas= document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
background_image="racing.jpg";
car1_width= 120;
car1_height= 70;
car1_image="car1.png"
car1_x=10;
car1_y=10;

car2_width= 120;
car2_height= 70;
car2_image="car2.png"
car2_x=10;
car2_y=100;

function add(){
    background_imgTag= new Image();
    background_image.onload= uploadbackground;
    background_image.src= background_image;

    car1_imgTag= new Image();
    car1_image.onload= uploadcar1;
    car1_image.src= car1_image;

    
    car2_imgTag= new Image();
    car2_image.onload= uploadcar2;
    car2_image.src= car2_image;
}

function uploadbackground(){
    ctx.drawimage(background_imgTag, 0, 0, canvas.width, canvas.height);
    

}
   function uploadcar1(){
    ctx.drawimage(car1_imgTag, car1_x ,car1_y , car1_width, car1_height );
   }

   function uploadcar2(){
    ctx.drawimage(car2_imgTag, car2_x ,car2_y , car2_width, car2_height );
   }

   

window.addEventListener("keydown", my_keydown)

function my_keydown(e){
     keyPressed= e.keycode
     console.log= (keyPressed);

     if(keyPressed== '38')
     {
         car1_up()
         console.log("up arrow key");
     }

     
     if(keyPressed== '40')
     {
         car1_down()
         console.log("down arrow key");
     }

     
     if(keyPressed== '39')
     {
         car1_right()
         console.log("right arrow key");
     }

     
     if(keyPressed== '37')
     {
         car1_left()
         console.log("left arrow key");
     }

     
     if(keyPressed== '87')
     {
         car1_up()
         console.log("w key");
     }
}


function my_keydown(e){
    keypressed= e.keycode
    console.log= (keyPressed);

    if(keyPressed== '38')
    {
        car2_up()
        console.log("up arrow key");
    }

    
    if(keyPressed== '40')
    {
        car2_down()
        console.log("down arrow key");
    }

    
    if(keyPressed== '39')
    {
        car2_right()
        console.log("right arrow key");
    }

    
    if(keyPressed== '37')
    {
        car2_left()
        console.log("left arrow key");
    }

    
    if(keyPressed== '87')
    {
        car2_up()
        console.log("w key");
    }
}