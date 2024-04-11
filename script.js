let barIcon = document.querySelector(".fa-bars");
let crossIcon = document.querySelector(".fa-xmark");
let menuList = document.querySelector(".menu-list");
let menuLinks = document.querySelector(".menu-links");

const openmenu = () => {
    menuList.style.height = "39vh";
    menuLinks.style.display = "flex";
    barIcon.style.display = "none";
    crossIcon.style.display = "block";
}

const closemenu = () => {
    menuList.style.height = "0vh";
    menuLinks.style.display = "none";
    crossIcon.style.display = "none";
    barIcon.style.display = "block";
}

barIcon.addEventListener("click", openmenu);
crossIcon.addEventListener("click", closemenu);

window.addEventListener("resize", () => {
    if(window.screen.width > 450){
        // console.log("hi");
        menuList.style.height = "0vh";
        menuLinks.style.display = "none";
        crossIcon.style.display = "none";
        barIcon.style.display = "block";
    }
})

// const toggleClass = (e) => {
//     e.classList.toggle("active");
//     console.log("clicked");
// }

let types = document.querySelectorAll(".type");
let items = document.querySelectorAll(".item");
console.log(types);
console.log(items);

let redNode = types[0];
let activeNode = items[0];


console.log(activeNode);
activeNode.classList.toggle("active");
redNode.style.color = "red";
console.log("hi");
// console.log(activeNode.classList.length);

for(let i = 0; i < items.length; i++){
    if(items[i].classList.length < 3){
        items[i].style.display = "none";
    }
    else{
        items[i].style.display = "grid";
    }
}

for(let i = 0; i < types.length; i++){
    types[i].addEventListener("click", function(e){
        // types[i].classList.toggle("active");
        let activeNodeId = e.target.getAttribute("href");
        activeNodeId = activeNodeId.substring(1);
        if(redNode === null && activeNode === null){
            redNode = e;
            
        }
        else{
            activeNode.classList.toggle("active");
            redNode.style.color = "black";
            redNode = e.target;
            activeNode = document.getElementById(activeNodeId);
            activeNode.classList.toggle("active");
            redNode.style.color = "red";
        }
        // e.target.classList.toggle("active");

        for(let i = 0; i < items.length; i++){
            if(items[i].classList.length < 3){
                items[i].style.display = "none";
            }
            else{
                items[i].style.display = "grid";
            }
        }
    });
    // console.log(i);
}

