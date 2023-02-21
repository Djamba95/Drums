///BUTTON PRESS////
document.querySelectorAll(".drum").forEach(item=>{      ///using forEach function 
    item.addEventListener("click",function(){            // we want to detect clicking on elements with the class"drum" and then carry out the function

        var buttonInnerHTML = this.innerHTML            // this.innerHTML will return the text that was pressed on 

/////////////////////Another way of solving this is a for loop//////////////////////////////
//      var numberOfDrumButtons= document.querySelectorAll(".drum").length;
//      for (var i=0 ; i<numberOfDrumButtons ; i++){
//    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//             var buttonInnerHTML = this.innerHTML 

playSong(buttonInnerHTML);          ///calling the function to play song

buttonAnimation(buttonInnerHTML)

        
    })
})


///////KEY PRESS
document.addEventListener("keydown" , function(event){     ///  adding an event listener what will catck keyboard //instead of event can be anything
    var keyPressed = event.key                              ///creating a variable to katch the letter that was pressed   // instead of event needs to be same as a line up

    playSong(keyPressed)                                  // calling the function to play song
    
    buttonAnimation(keyPressed)
})


////Functions

//for playing audio:

var playSong= function(trigger){                       // created a function so it can be used for bot button and key press


    switch (trigger) {                              // when to activate
        case "w":                                           // if text was "w"
               var tom1 = new Audio("sounds/tom-1.mp3")      //adding the audio
                tom1.play()                                   //playing the audio
        break;                                             // tells the code to exit switch statement
        
        case "a":                                             // if text was "a"
                var tom2 = new Audio("sounds/tom-2.mp3")      
                tom2.play()
        break;
         
        case "s":                                             // if text was "s"
            var tom3 = new Audio("sounds/tom-3.mp3")      
            tom3.play()
        break;
    
        case "d":                                             // if text was "s"
            var tom4 = new Audio("sounds/tom-4.mp3")      
            tom4.play()
        break;
    
        case "j":                                             // if text was "s"
            var crash = new Audio("sounds/crash.mp3")      
            crash.play()
        break;
    
        case "k":                                             // if text was "s"
            var kick = new Audio("sounds/kick-bass.mp3")      
            kick.play()
        break;
        case "l":                                             // if text was "s"
            var snare = new Audio("sounds/snare.mp3")      
            snare.play()
        break;
    
        default:// console.log(trigger)                                              // similar to else statement , covers all other scenarios what were not secified
            }
}

// for button animation

function buttonAnimation(currentKey){       // a function what will take as an input the key or button that was pressed

   var activeButton = document.querySelector("." + currentKey)   //we select the element pressed by class  

   activeButton.classList.add("pressed")    //adding a new class to the element (and this class is styled in CSS already)
   
   setTimeout(function(){                          //set Timeout function 
    activeButton.classList.remove("pressed")       //what we want to happen

   }, 100)                                         // the time after we want the function to be executed (100 = 0.1 sec)
}