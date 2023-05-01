const myLibrary = [];
const library = document.getElementById("library");
let cardArray;

let bookForm = document.getElementById('addBook');
let overlay = document.getElementById('overlay');

function showForm() {
  if (bookForm.style.display === 'none') {
    bookForm.style.display = 'block';
    overlay.style.display = 'block';

    overlay.addEventListener('click', () => {
      bookForm.style.display = 'none';
      overlay.style.display = 'none';
    })
  }
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return title, author, pages, read;
  };
}

function addBookToLibrary() {
  //takes the users input and creates a new Book object
  //and adds it to myLibrary[]
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let boxTicked = document.getElementById("read");
  let read = "";

  if (boxTicked.checked == true) {
    read = "read";
  }

  if (title && author && pages) {
    //only runs once user has input all info
    x = new Book(title, author, pages, read);
    myLibrary.push(x);
    addBookEntry();
    console.table(myLibrary);
    boxTicked.checked = false;
    document.getElementById("newBook").reset();
  }
  return;
};

//Creates a new 'card' for the user's new Book object
function addBookEntry() {
  //creates the HTML elements to add book info to
  const newBookEntry = document.createElement("div");  
  newBookEntry.classList.add('card');

  const bookTitle = document.createElement("h1");
  const bookAuthor = document.createElement("p");
  const bookPages = document.createElement("p");
  const readBook = document.createElement("p");
  const buttonWrap = document.createElement("span");
  const removeBook = document.createElement("button");  
  // removeBook.textContent = 'X'
  let index = myLibrary.length -1; 
  newBookEntry.setAttribute('currentIndex', index); 
  const haveRead = document.createElement("INPUT");
  haveRead.setAttribute("type", "checkbox");

  bookTitle.textContent = myLibrary[index].title;
  bookAuthor.textContent = `${bookTitle.textContent} was written by 
  ${myLibrary[index].author}`;
  bookPages.textContent = `The book is ${myLibrary[index].pages} pages long`;
  if (myLibrary[index].read == "read") {
    readBook.textContent = "I have read this book.";
  } else {
    readBook.textContent = "I have not read this book yet.";
  }

  removeBook.addEventListener('click', () => {
    myLibrary.splice(newBookEntry.getAttribute('currentIndex'), 1);
    library.removeChild(newBookEntry);
    const cards = document.querySelectorAll('.card');
    cardArray = Array.from(cards);
    updateIndexAttribute(cardArray);
    console.table(myLibrary);   
  });
  buttonWrap.appendChild(removeBook);
  newBookEntry.appendChild(buttonWrap);
  newBookEntry.appendChild(bookTitle);
  newBookEntry.appendChild(bookAuthor);
  newBookEntry.appendChild(bookPages);
  newBookEntry.appendChild(readBook);  
  newBookEntry.appendChild(haveRead);
  library.appendChild(newBookEntry);
  

  if(bookForm.style.display === 'block') {
    bookForm.style.display = 'none';
    overlay.style.display = 'none';
  }
}

//updates each remaining cards' data-set-attribute to be its current index
//in myLibrary[]
function updateIndexAttribute(data) {
  data.forEach(element => {
    element.setAttribute('currentIndex', data.indexOf(element));
  })
};

//Creates some example entries
const theHobbit = new Book("The Hobbit", "JRR Tolkein", "300", "read");
myLibrary.push(theHobbit);
addBookEntry();

const lOTR = new Book("The Lord of the Rings", "JRR Tolkein", "900", "read");
myLibrary.push(lOTR);
addBookEntry();
