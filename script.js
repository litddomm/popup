let myButton = document.querySelector(".myButton");
let secondLayer = document.querySelector(".secondLayer");
let modalSpan = document.querySelector(".modalSpan")


myButton.addEventListener("click", invokeModal);

function invokeModal(){
    secondLayer.classList.add("active");
    
}


modalSpan.addEventListener("click", closeModal)

function closeModal(){
    secondLayer.classList.remove("active");
}