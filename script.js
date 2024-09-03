const addBookButton = document.querySelector("[data-open-modal]");
const modal = document.querySelector("[data-modal]");
const closeModal = document.querySelector("[data-close-modal]");
const removeBook = document.querySelector("[data-remove-book]");
const toggleStatus = document.querySelector("[data-remove-book]");
const bookContainer = document.querySelector("[data-book-container]")
const newBookForm = document.querySelector("#new-book-form");

const myLibrary = [];

// Modal buttons
addBookButton.addEventListener('click', ()=>{
    modal.showModal();
})
closeModal.addEventListener('click', ()=>{
    modal.close();
})

//submit button
newBookForm.addEventListener("submit", e =>{
    e.preventDefault();
    bookContainer.textContent = '';
    addBookToLibrary();
    newBookForm.reset();
    modal.close();  
    console.log(myLibrary);  
    displayLibrary();
})

//Book Constructor 
function Book(title, author, pages, haveRead, favorite){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.favorite = favorite;
}


function addBookToLibrary(){
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const haveRead = document.querySelector("#complete-yes");
    const favorite = document.querySelector("#favorite");
    const book = new Book(title.value, author.value, pages.value, haveRead.checked, favorite.checked);
    myLibrary.push(book);
}

function displayLibrary(){
    myLibrary.forEach((element) =>{
        // create a card for each book.
        const book = document.createElement("div");
        book.className = "article";        

        const bookInfo = document.createElement("div");
        bookInfo.className = "bookInfo";        
        
        const h1 = document.createElement("h1");
        h1.className = "article-title";
        h1.textContent = `${element.title}`;    

        const author = document.createElement("p");
        author.setAttribute("id", "authorName");
        author.textContent = `Author: ${element.author}`;    

        const pages = document.createElement("p");
        pages.setAttribute('id', 'numberOfPages');
        pages.textContent = `Pages: ${element.pages}`;    

        const bookStatus = document.createElement("p");
        bookStatus.setAttribute('id', 'bookStatus');
        const haveReadBook = element.haveRead === true ? "Yes" : "No"
        bookStatus.textContent =  `Book Read: ${haveReadBook}`;

        const articleButtonsContainer = document.createElement("div");
        articleButtonsContainer.className = "article-buttons"

        const favoriteButtonSpan = document.createElement('span');
        favoriteButtonSpan.className = "iconify";
        favoriteButtonSpan.setAttribute('data-icon','mdi-heart');
        
        const notFavoriteButtonSpan = document.createElement('span');
        notFavoriteButtonSpan.className = "iconify";
        notFavoriteButtonSpan.setAttribute('data-icon','mdi-heart-outline'); 
        
        const favoriteButton = document.createElement('button');
        favoriteButton.className = 'favorite-button';
        //   

        const articleButtons = document.createElement('div');    
        
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove Book";    

        const toggleStatus = document.createElement('button');
        toggleStatus.textContent = "Toggle Status";

        bookContainer.appendChild(book);
        book.appendChild(bookInfo);
        bookInfo.appendChild(h1);
        bookInfo.appendChild(author);
        bookInfo.appendChild(pages);
        bookInfo.appendChild(bookStatus);
        book.appendChild(articleButtonsContainer);
        articleButtonsContainer.appendChild(favoriteButton);
        element.favorite === true ?  favoriteButton.appendChild(favoriteButtonSpan) : favoriteButton.appendChild(notFavoriteButtonSpan);
        articleButtonsContainer.appendChild(articleButtons);
        articleButtons.appendChild(toggleStatus);
        articleButtons.appendChild(removeButton);
    })
}










































/*
// Create card for added books
function displayLibrary(){
        
}

displayLibrary();



function toggleRead(){
    
}


// 


// if have read  = no, have toggle button
//if have read = yes, don't include toggle button

//

*/