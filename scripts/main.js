// Toggle & Responsive Navigation
const navSlide = () => {
    const burger = document.querySelector(".burger")
    const navLists = document.querySelector("nav")

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active")
        burger.classList.toggle("toggle-burger")
    })
}

navSlide()

// Clear from Before unload
window.onbeforeunload = () => {
    for (const from of decodeURIComponent.getElementsByTagName("form")) {
        from.reset(); // Reset form values to default on reload/close
    }
}

