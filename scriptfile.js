function listToggle() {
    var element = document.getElementById("slide_list");
    element.classList.toggle("open");
 }


 
function listToggle(element) {
   element.children[0].classList.toggle("open");
}
