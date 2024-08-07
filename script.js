const addBookButton = document.querySelector("[data-open-modal]");
const modal = document.querySelector("[data-modal]");
const closeModal = document.querySelector("[data-close-modal]");
const removeBook = document.querySelector("[data-remove-book]");
const toggleStatus = document.querySelector("[data-remove-book]");
const bookContainer = document.querySelector("[data-book-container]")


// Modal buttons
addBookButton.addEventListener('click', ()=>{
    modal.showModal();
})

closeModal.addEventListener('click', ()=>{
    modal.close();
})

function Book(title, author, pages, haveRead, favorite){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.favorite = favorite;
    this.info = function(){
        this.favorite === true ?  favoriteButton.appendChild(favoriteButtonSpan) : favoriteButton.appendChild(notFavoriteButtonSpan);
    };
}



function addReadBook(){
    
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
    

// create if statements for if a book is favorited or not;


}

addReadBook();


function toggleRead(){
    
}


// 


// if have read  = no, have toggle button
//if have read = yes, don't include toggle button