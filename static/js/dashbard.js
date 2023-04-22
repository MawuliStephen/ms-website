const Bar = document.getElementById("menu");
const main = document.getElementById("main");
let phonesNTablets = window.matchMedia("(max-width: 800px)");

Bar.addEventListener("click", () => {
    return main.classList.toggle("close");

});

// tabs
function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


document.querySelector("input").focus();
console.log(document.activeElement.tagName);
// → INPUT
document.querySelector("input").blur();
console.log(document.activeElement.tagName);
//  → BODY
