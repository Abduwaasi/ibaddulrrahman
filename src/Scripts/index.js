const mobileMenu = document.querySelector(".mobile-menu");
const navToggle = document.querySelector(".bar-icon");
console.log("hello")



navToggle.addEventListener("click", function(){
    if(mobileMenu.classList.contains("show-mobile-menu")&&mobileMenu.classList.contains("scale-in-center")){
        mobileMenu.classList.remove("show-mobile-menu")
        mobileMenu.classList.remove("scale-in-center")
        navToggle.querySelector("div").innerHTML = "<i class='fas fa-bars fa-2x '></i>";
    }else{
        mobileMenu.classList.add("show-mobile-menu")
        mobileMenu.classList.add("scale-in-center")
        navToggle.querySelector("div").innerHTML = "<i class='fas fa-times fa-2x'></i>";
         
    }
    
});

mobileMenu.addEventListener("click",function(){
    mobileMenu.classList.remove("show-mobile-menu")
    mobileMenu.classList.remove("scale-in-center")
    navToggle.querySelector("div").innerHTML = "<i class='fas fa-bars fa-2x '></i>";
})