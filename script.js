const addBookButton = document.querySelector("[data-open-modal]");
const modal = document.querySelector("[data-modal]");
const closeModal = document.querySelector("[data-close-modal]");
const removeBook = document.querySelector("[data-remove-book]");
const toggleStatus = document.querySelector("[data-remove-book]");
const readContainer = document.querySelector("[data-read-container]")
const unreadContainer = document.querySelector("[data-unread-container]");

function Book(title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

addBookButton.addEventListener('click', ()=>{
    modal.showModal();
})


closeModal.addEventListener('click', ()=>{
    modal.close();
})



function toggleRead(){
    
}


// if have read  = no, have toggle button
//if have read = yes, don't include toggle button