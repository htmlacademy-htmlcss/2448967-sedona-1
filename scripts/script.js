const searchButton = document.querySelector(".search-button");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");

if (searchButton) {
    searchButton.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.remove("modal-close");

    })

    closeButton.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("modal-close");
})
}
