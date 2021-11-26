//replace the fear of judge 


const panels = document.querySelectorAll(".panel");

//console.log(panels);

function toggleOpenFunction() {
   // console.log("hello");
    this.classList.toggle("open");
    //console.log(hello);
}

function toggleActive(e) {
   // console.log(e);


   if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active")
    }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpenFunction));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));