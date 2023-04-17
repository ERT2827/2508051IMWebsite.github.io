const closebutton = document.querySelector(".close-btn");
const togglebutton = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");

closebutton.addEventListener("click", function() {
    sidebar.classList.remove("show-sidebar");
});

togglebutton.addEventListener("click", function (){
    sidebar.classList.toggle("show-sidebar");
});