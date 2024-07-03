document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("burger");
    const overlay = document.getElementById("overlay");
    const header = document.querySelector("header")

    burger.addEventListener("click", function() 
    {
        header.classList.toggle("open");
    })

    overlay.addEventListener("click", function() {
        header.classList.remove("open")
    })
})