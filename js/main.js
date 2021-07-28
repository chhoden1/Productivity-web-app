/* MAIN JS FOR SIDEBAR AND BACKGROUND
* used between most html files
 */

/* For sidebar */
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let logoPlaceholder = document.querySelector("#logo-placeholder");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the icons class
   logoPlaceholder.classList.replace("bxs-square", "bx-check-circle");
   logoPlaceholder.style.color = "#2e6873";

 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu"); //replacing the icons class
   logoPlaceholder.classList.replace("bx-check-circle", "bxs-square");
   logoPlaceholder.style.color = "transparent";
 }
}