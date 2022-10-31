
console.log("your index.js is loading correctly!");

$('.navbar').on("click", function(){
    $('.cssChange').css("background-color","maroon"); 
}
colorLinks("#00FF00");

function colorLinks(hex)
{
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        if(links[i].href)
        {
            links[i].style.color = hex;  
        }
    }  
}