function createNewChild() {
    var wrapperDiv = document.getElementById('wrapper');  
    var count = parseInt(document.getElementById("counter").value);
    while (count){
        var r=Math.floor(Math.random() * (256));
        var g=Math.floor(Math.random() * (256));
        var b=Math.floor(Math.random() * (256));
        var color='#' + r.toString(16) + g.toString(16) + b.toString(16);
        
        var childDiv = document.createElement('div');
        wrapperDiv.appendChild(childDiv);
        
        childDiv.className = "wrapper__insider";
        childDiv.innerHTML = "DIV №"+count;
        childDiv.style.backgroundColor = color;
        
        count--;
    }
}
function resetDivs() {
    var myNode = document.getElementById("wrapper");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild); 
    }
}