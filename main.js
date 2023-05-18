const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");

const popupContainerEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", ()=>{
    containerEl.classList.add("active");
    popupContainerEl.classList.remove("active");
    btnEl.disabled=true;
    console.log("clicked")
})

closeIconEl.addEventListener("click", ()=>{
    containerEl.classList.remove("active");
    popupContainerEl.classList.add("active");
    btnEl.disabled=false;
    console.log("clicked")
})