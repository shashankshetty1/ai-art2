var StyleType, OrderType;
var Arts = document.querySelectorAll("art");
function reOrganize(){
    var i=0;
    Arts.forEach(() =>{
        if(Arts[i].getAttribute("ArtStyle") == StyleType || StyleType == "all"){
            Arts[i].style.display = "block";
        }
        else{
            Arts[i].style.display = "none";
        }
        i++;
    }) 
    //pensar em um algoritimo!!

}

function changeStyle(){
    var style = document.getElementById("Selector01");
    StyleType = style.value;
    console.log(StyleType);
}
function changeOrder(){
    var order = document.getElementById("Selector02");
    OrderType = order.value;
    console.log(OrderType);
}




