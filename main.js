
var food=[];
function get_menu_list() {
    
    food.push(document.getElementById("foodz").value);
    food.sort();
    document.getElementById("menu_list").innerHTML=food;
    document.getElementById("foodz").value="";
}