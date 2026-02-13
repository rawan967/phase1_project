let menuIcon = document.getElementById("menuToggle");
let menu = document.querySelector(".mobile-menu");
let close_icon = document.getElementById("menutog");

menuIcon.addEventListener("click", function(){
       menu.style.display = "flex";

});



const link_pages = document.querySelectorAll(".home , .events , .team , .comm");

link_pages.forEach(link_pages =>{
    link_pages.addEventListener("click",()=>{
        
        let class_name = link_pages.className;
        let link = "";
        if(class_name === "home") link="../home-page/main.html";
        else if(class_name === "events") link = "../Events-page/events.html";
        else if(class_name === "team") link = "../Team-page/team.html";
        else if(class_name === "comm") link = "../commitees-page/comm.html";
    

        window.location.href = link;
        menu.style.display = "none";
    });
});
window.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname; 
   link_pages.forEach(link => {
        if (currentPath.toLowerCase().includes(link.classList[0])) {
            link.classList.add("active");
        }
    });
});


close_icon.addEventListener("click",()=>{
    menu.style.display = "none";
});
