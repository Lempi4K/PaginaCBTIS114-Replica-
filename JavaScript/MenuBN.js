function MenuBN(){
    var op = document.getElementById("ListaBN");
    var url = op.options[op.selectedIndex].value;
    var web = "http://127.0.0.1:5500/";
    
    window.open(web + url, "_self");
}