let myTextarea = document.getElementById("myInput");
let mySpan = document.getElementById("mySpan");
myTextarea.oninput = function(){
    mySpan.innerHTML = `${50 - this.value.length}/50`;
    if(mySpan.innerHTML < 0){
        mySpan.style.color = "#f00" 
    }
}

