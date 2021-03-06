let toggleNavStatus = true;

let navToggle = function (){
    let sidebar = document.querySelector(".hamburger-nav");
    let topbar = document.querySelector(".hamburger-nav-top");
    let navTopBar = document.querySelectorAll(".hamburger-links-top li a");
    let screenWidth = window.innerWidth; 
    let arrayLength = navTopBar.length;

    if(toggleNavStatus === false && (screenWidth <= 768 && screenWidth > 400)){
        sidebar.style.width = "0";
        toggleNavStatus = true;  
    }
    else if(toggleNavStatus === true && (screenWidth <= 768 && screenWidth > 400)){
        sidebar.style.width = "200px";
        toggleNavStatus = false;
    }
    else if(toggleNavStatus === false && screenWidth <= 400){
        topbar.style.height = "0";
        for(var i = 0; i < arrayLength; i++){
            navTopBar[i].style.visibility = "hidden";
        }
        toggleNavStatus = true;  
    }
    else if(toggleNavStatus === true && screenWidth <= 400){
        topbar.style.height = "35vh";
        for(var i = 0; i < arrayLength; i++){
            navTopBar[i].style.visibility = "visible";
        }
        toggleNavStatus = false;
    }
}

let navClose = function (){
    let sidebar = document.querySelector(".hamburger-nav");
    let topbar = document.querySelector(".hamburger-nav-top");

    sidebar.style.width = "0";
    topbar.style.width = "0";

    toggleNavStatus = true;  

}
