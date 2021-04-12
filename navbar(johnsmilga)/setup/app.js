// classList - shows/gets all classes
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// contains - checks classList for specific class
navToggle.addEventListener("click", function(){
    // add - add class
    // if(links.classList.contains("show-links")){
    //    // remove - remove class
    //     links.classList.remove("show-links");
    // }else{
    //     links.classList.add("show-links");
    // }
    // toggle - toggles class
    links.classList.toggle("show-links");
});



