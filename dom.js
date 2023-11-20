var buttons=document.querySelectorAll(".btn");


buttons.forEach(function(e){
    var toast_container=e.nextElementSibling;
    e.addEventListener("click",function(){
        toast_container.classList.add("output1")
    })
})
var icons=document.querySelectorAll(".icon");
icons.forEach(function(e){
    var icon=e.parentNode.parentNode;
    e.addEventListener("click",function(){
        icon.classList.remove("output1");
    })
})


 