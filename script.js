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
newBookForm.addEventListener("submit", function(){
    event.preventDefault();
    addBookToLibrary();
    newBookForm.reset();
    modal.close();
    
})

//reset modal values


//Book Constructor 
function Book(title, author, pages, haveRead, favorite){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.favorite = favorite;
}

//Loop through array to display books in library

function addBookToLibrary(){
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let haveRead = document.querySelector("#complete-yes").checked;
    let haveNotRead = document.querySelector("#complete-no").checked;
    let favorite = document.querySelector("#favorite").checked;
    let newBook = new Book(title, author, pages, haveRead, favorite);
    myLibrary.push(newBook);
    console.log(myLibrary);
}




// Create card for added books
function displayLibrary(){
    
    const book = document.createElement("div");
    book.className = "article";        

    const bookInfo = document.createElement("div");
    bookInfo.className = "bookInfo";        
    
    const h1 = document.createElement("h1");
    h1.className = "article-title";
    h1.textContent = this.title;    

    const author = document.createElement("p");
    author.setAttribute("id", "authorName");
    author.textContent = `Author: ${this.author}`;    

    const pages = document.createElement("p");
    pages.setAttribute('id', 'numberOfPages');
    pages.textContent = `Pages: ${this.pages}`;    

    const bookStatus = document.createElement("p");
    bookStatus.setAttribute('id', 'bookStatus');
    bookStatus.textContent =  `Book Read: ${this.haveRead}`;

    const articleButtonsContainer = document.createElement("div");
    articleButtonsContainer.className = "article-buttons"

    const favoriteButton = document.createElement('button');
    favoriteButton.className = 'favorite-button';
    

    const favoriteButtonSpan = document.createElement('span');
    favoriteButtonSpan.className = "iconify";
    favoriteButtonSpan.setAttribute('data-icon','mdi-heart');

    const notFavoriteButtonSpan = document.createElement('span');
    notFavoriteButtonSpan.className = "iconify";
    notFavoriteButtonSpan.setAttribute('data-icon','mdi-heart-outline');    

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
    favoriteButton.appendChild(favoriteButtonSpan);
    articleButtonsContainer.appendChild(articleButtons);
    articleButtons.appendChild(toggleStatus);
    articleButtons.appendChild(removeButton);

}

displayLibrary();


function toggleRead(){
    
}


// 


// if have read  = no, have toggle button
//if have read = yes, don't include toggle button

//this.favorite === true ?  favoriteButton.appendChild(favoriteButtonSpan) : favoriteButton.appendChild(notFavoriteButtonSpan);