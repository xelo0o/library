const addBookButton = document.querySelector("[data-open-modal]");
const modal = document.querySelector("[data-modal]");
const closeModal = document.querySelector("[data-close-modal]");
const removeBook = document.querySelector("[data-remove-book]");
const toggleStatus = document.querySelector("[data-remove-book]");
const readContainer = document.querySelector("[data-read-container]")
const unreadContainer = document.querySelector("[data-unread-container]");


// Modal buttons
addBookButton.addEventListener('click', ()=>{
    modal.showModal();
})

closeModal.addEventListener('click', ()=>{
    modal.close();
})

function Book(title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}



function addReadBook(){
    
    const book = document.createElement("div");
    book.className = "article";    
    

    const bookInfo = document.createElement("div");
    bookInfo.className = "bookInfo";    
    
    
    const h1 = document.createElement("h1");
    h1.className = "article-title";
    h1.textContent = "byah";
    

    const author = document.createElement("p");
    author.setAttribute("id", "authorName");
    author.textContent = "Byah Byah";
    

    const pages = document.createElement("p");
    pages.setAttribute('id', 'numberOfPages');
    pages.textContent = '343';
    

    const bookStatus = document.createElement("p");
    bookStatus.setAttribute('id', 'bookStatus');
    bookStatus.textContent =  "Yes";

    const articleButtonsContainer = document.createElement("div");
    articleButtonsContainer.className = "article-buttons"

    const favoriteButton = document.createElement('button');
    favoriteButton.className = 'favorite-button';
    

    const favoriteButtonSpan = document.createElement('span');
    favoriteButtonSpan.className = "iconify";
    favoriteButtonSpan.setAttribute('data-icon','mdi-heart-outline');
    

    const articleButtons = document.createElement('div');
    
    
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove Book";
    

    const toggleStatus = document.createElement('button');
    toggleStatus.textContent = "Toggle Status";
    
    

    readContainer.appendChild(book);
    book.appendChild(bookInfo);
    bookInfo.appendChild(h1);
    bookInfo.appendChild(author);
    bookInfo.appendChild(pages);
    bookInfo.appendChild(bookStatus);
    book.appendChild(articleButtonsContainer);
    articleButtonsContainer.appendChild(favoriteButton);
    favoriteButton.appendChild(favoriteButtonSpan);
    articleButtonsContainer.appendChild(articleButtons);
    articleButtons.appendChild(removeButton);
    articleButtons.appendChild(toggleStatus);




}

addReadBook();


function toggleRead(){
    
}




// if have read  = no, have toggle button
//if have read = yes, don't include toggle button