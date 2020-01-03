document.querySelector(".container-pop-up-list .list-btn").onclick = function(){
    var list_items = document.querySelector(".container-pop-up-list .list-items");
    list_items.style.display = (list_items.style.display == "none" || list_items.style.display == "") ? "flex" : "none";
}
