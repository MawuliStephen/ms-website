const menuLinks = document.querySelectorAll(".menu-link");


// Get Modal
var modal = document.getElementById('myModal');

//This button calls the modal when clicked
const modalBtn = document.getElementById('myBtn');

// Get the <span> element to close Modal
var closeModal = document.getElementsByClassName("close")[0];



// JavaScript statement menu

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menuLinks.forEach((link) => {
            link.classList.remove("is-active");
        });
        link.classList.add("is-active");
    });
});



// JavaScript statement for modal Menu


// When user clicks button, open Modal
modalBtn.onclick = function () {
    modal.style.display = "block";
    
};

closeModal.onclick = function () {
    modal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}