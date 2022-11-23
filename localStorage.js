const En = document.querySelector(".en");
const Spa = document.querySelector(".spa");
const Modal = document.querySelector(".modal-overlay")

const setLanguage = () => {
  En.addEventListener("click", ()=>{
    localStorage.setItem("language","en");
    closeModal();
  })
  Spa.addEventListener("click", ()=>{
    localStorage.setItem("language","spa");
    closeModal();
  })
}

const closeModal = () => {
  Modal.style.animation = "none";
  setTimeout(()=> Modal.style.display = "none",1000);
}

const Language = localStorage.getItem("language");
if (Language === null) setLanguage();
else {
  console.log(`The language is: ${Language}`);
  Modal.style.display = "none";
}
