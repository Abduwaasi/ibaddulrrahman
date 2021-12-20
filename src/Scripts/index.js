const mobileMenu = document.querySelector(".mobile-menu");
const navToggle = document.querySelector(".bar-icon");
console.log("hello")



navToggle.addEventListener("click", function(){
    if(mobileMenu.classList.contains("show-mobile-menu")){
        mobileMenu.classList.remove("show-mobile-menu")
        navToggle.querySelector("div").innerHTML = "<i class='fas fa-bars fa-2x '></i>";
    }else{
        mobileMenu.classList.add("show-mobile-menu")
        navToggle.querySelector("div").innerHTML = "<i class='fas fa-times fa-2x'></i>";
         
    }
    
});

mobileMenu.addEventListener("click",function(){
    mobileMenu.classList.remove("show-mobile-menu")
})