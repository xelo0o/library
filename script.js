const addBookButton = document.querySelector("[data-open-modal]");
const modal = document.querySelector("[data-modal]");
const closeModal = document.querySelector("[data-close-modal]");
const removeBook = document.querySelector("[data-remove-book]");
const toggleStatus = document.querySelector("[data-toggle-status]");
const bookContainer = document.querySelector("[data-book-container]")
const newBookForm = document.querySelector("#new-book-form");
const myLibrary = [];

// Modal buttons
addBookButton.addEventListener('click', ()=>{
    modal.showModal();
})
closeModal.addEventListener('click', ()=>{
    newBookForm.reset();
    modal.close();
})

//submit button
newBookForm.addEventListener("submit", e =>{
    e.preventDefault();
    bookContainer.textContent = '';
    addBookToLibrary();
    newBookForm.reset();
    modal.close();  
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

Book.prototype.changeReadStatus = function(){
    this.haveRead = !this.haveRead;
}

Book.prototype.favoriteStatus = function(){
    this.favorite = !this.favorite;
}

Book.prototype.removeFromLibrary = function(){
    const index = myLibrary.indexOf(this);
    myLibrary.splice(index,1);
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

    bookContainer.textContent = '';

    myLibrary.forEach((element, index) =>{
        // create a card for each book.
        const book = document.createElement("div");
        book.className = "article";
        book.setAttribute('data-index', index)        

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
        const haveReadBook = element.haveRead === true ? "Read" : "Not Read"
        bookStatus.textContent =  `Status: ${haveReadBook}`;;

        const articleButtonsContainer = document.createElement("div");
        articleButtonsContainer.className = "article-buttons"

        const favoriteButtonSpan = document.createElement('span');
        favoriteButtonSpan.classList.add('iconify');
        favoriteButtonSpan.setAttribute('data-icon','mdi-book-heart');

        const toggleButtonSpan = document.createElement('span');
        toggleButtonSpan.classList.add('iconify');
        toggleButtonSpan.setAttribute('data-icon','mdi-book-check');
        

        const removeButtonSpan = document.createElement('span');
        removeButtonSpan.className = "iconify";
        removeButtonSpan.setAttribute('data-icon', 'mdi-delete');       
 
        const favoriteButton = document.createElement('button');
        favoriteButton.classList.add('favorite-button');
        
        const toggleButton = document.createElement('button');
        //toggleButton.textContent = 'Toggle Status';
        const removeButton =document.createElement('button');
        //removeButton.textContent = 'Remove';
        

        const toggleStatus = document.createElement('button');
        toggleStatus.setAttribute('data-icon', 'mdi-toggle-switch');

        toggleButton.addEventListener('click', ()=>{
            element.changeReadStatus();
            displayLibrary();
        });

        favoriteButton.addEventListener('click', ()=>{
            element.favoriteStatus();
            displayLibrary();
        });

        removeButton.addEventListener('click', ()=>{
            element.removeFromLibrary();
            displayLibrary();
        })

        
        bookContainer.appendChild(book);
        book.appendChild(bookInfo);
        bookInfo.appendChild(h1);
        bookInfo.appendChild(author);
        bookInfo.appendChild(pages);
        bookInfo.appendChild(bookStatus);
        book.appendChild(articleButtonsContainer);
        articleButtonsContainer.appendChild(favoriteButton);
        articleButtonsContainer.appendChild(toggleButton);
        articleButtonsContainer.appendChild(removeButton);
        if(element.favorite === true) {favoriteButtonSpan.classList.add('color-red')};
        if(element.haveRead === true) {toggleButtonSpan.classList.add('color-green')};
        favoriteButton.appendChild(favoriteButtonSpan);
        toggleButton.appendChild(toggleButtonSpan);
        removeButton.appendChild(removeButtonSpan);
    })
}

const book1 = new Book("Gardens of the Moon", "Steven Erikson", 712, true, true)
const book2 = new Book("Deadhouse Gates", "Steven Erikson", 943, true, true);
const book3 = new Book("Memories of Ice", "Steven Erikson", 1187, true, true);
const book4 = new Book("House of Chains", "Steven Erikson", 1036, true, true);
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);
console.log(myLibrary);

displayLibrary();
