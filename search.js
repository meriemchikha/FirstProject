
const searchInput = document.querySelector('#search');
const cardList = document.querySelectorAll('.card');


searchInput.addEventListener("keyup", (e) => {
    const searchFilter = e.target.value.toLowerCase().trim();
    cardList.forEach((card) => {
        card.textContent.includes(searchFilter) ? card.style.display = "block" : card.style.display = "none"
    })
});
