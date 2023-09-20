//  Nav Shadow------
window.addEventListener("scroll", () =>{
    let navbar = document.querySelector("nav");
    if(window.scrollY > 0 ){
        navbar.classList.add("navShadow")
    }
    else{
        navbar.classList.remove("navShadow");
    }
})

let allNavMenuItems = document.querySelectorAll(".navMenuItem");
let navLogo = document.querySelector(".navLogo a");
let hireMe = document.querySelector(".hireMe");

function activeClassFuntion(clickEle, addClassEle){
    clickEle.addEventListener("click", () =>{
        allNavMenuItems.forEach((e) =>{
            e.classList.remove("navActive");
        });
        addClassEle.classList.add("navActive");
    });
};

for(let i=0; i < allNavMenuItems.length; i++){
    activeClassFuntion(allNavMenuItems[i], allNavMenuItems[i]);
};
activeClassFuntion(navLogo, allNavMenuItems[0]);
activeClassFuntion(hireMe, allNavMenuItems[3]);

// -- hamburger Animation--
let hamburger = document.querySelectorAll(".humburger, .navMenu, header");
let body = document.querySelector("body");
function hamburgerAnimation(){
    hamburger[2].classList.toggle("hamburgerAnimation");
    hamburger[1].classList.toggle("navMenuAnimation");
    hamburger[0].classList.toggle("navMenuBackgroundAnimation");
    body.classList.toggle("scrollOff");
}

allNavMenuItems.forEach((e) =>{
    e.addEventListener("click", () =>{
        hamburger[2].classList.toggle("hamburgerAnimation");
        hamburger[1].classList.toggle("navMenuAnimation");
        hamburger[0].classList.toggle("navMenuBackgroundAnimation");
        body.classList.toggle("scrollOff");
    });
});















