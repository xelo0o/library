const addBookButton = document.querySelector("[data-open-modal]");
const addBookButton2 = document.querySelector("[data-open-modal2]");
const modal = document.querySelector("[data-modal]")
const closeModal = document.querySelector("[data-close-modal]")

function Book(title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

addBookButton.addEventListener('click', ()=>{
    modal.showModal();
})

addBookButton2.addEventListener('click', ()=>{
    modal.showModal();
})

closeModal.addEventListener('click', ()=>{
    modal.close();
})



function toggleRead(){
    
}


// if have read  = no, have toggle button
//if have read = yes, don't include toggle button