let nav_toggleStatus = false;

let nav_toggleBtn = function () {
    let getSidebar = document.querySelector(".nav_sidebar");
    let getSidebarUl = document.querySelector(".nav_sidebar ul");
    let getSidebarTitle = document.querySelector(".nav_sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav_sidebar a");


    if (nav_toggleStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "272px";
    getSidebar.style.backgroundColor = "black";
    getSidebarTitle.style.opacity = "0.5"

    let arrayLength = getSidebarLinks.length;
        for(let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        nav_toggleStatus = true;
    }

    else if (nav_toggleStatus === true) {
        getSidebar.style.width = "60px";
        getSidebarTitle.style.opacity = "0"

        let arrayLength = getSidebarLinks.length;
            for(let i = 0; i < arrayLength; i++) {
                getSidebarLinks[i].style.opacity = "0";
            }

            getSidebarUl.style.visibility = "hidden";
            getSidebar.style.backgroundColor = "white";

            nav_toggleStatus = false;
        }
}
