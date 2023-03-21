const myLibrary = [];
const test = document.getElementById('test');

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return(title, author, pages, read)
    }
}
const theHobbit = new Book('The Hobbit', 'JRR Tolkein', '300', 'read');
myLibrary.unshift(theHobbit);
const lOTR = new Book('The Hobbit', 'JRR Tolkein', '300', 'read');
myLibrary.unshift(theHobbit);

// function boxTicked() {
//   const checkBox = document.getElementById('read');
// }

function addBookToLibrary() {
  //takes the users input and creates a new Book object 
  //and adds it to the myLibrary array
      
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let boxTicked = document.getElementById('read');
  let read = 'test';
  if (boxTicked.checked == true) {
    read = 'blarnacles';
  };

  if (title && author && pages) {
    x = new Book(title, author, pages, read);
    myLibrary.unshift(x);
    addBookEntry();
    console.table(myLibrary);
    document.getElementById("newBook").reset();
  }       
  return;
}

function addBookEntry() {
    const newBookEntry = document.createElement('div');
    const bookTitle = document.createElement('h1');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    bookTitle.textContent = myLibrary[0].title;
    bookAuthor.textContent = `${myLibrary[0].title} was written by ${myLibrary[0].author}`;
    bookPages.textContent = `The book is ${myLibrary[0].pages} pages long`;
    newBookEntry.appendChild(bookTitle);
    newBookEntry.appendChild(bookAuthor);
    newBookEntry.appendChild(bookPages);
    test.appendChild(newBookEntry);
}

function bookAdd() {
   for(let i=0; i<=myLibrary.length; i++) {   
    const newBookEntry = document.createElement('div');
    const bookTitle = document.createElement('h1');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    bookTitle.textContent = myLibrary[i].title;
    bookAuthor.textContent = `${myLibrary[i].title} was written by ${myLibrary[i].author}`;
    bookPages.textContent = `The book is ${myLibrary[i].pages} pages long`;
    newBookEntry.appendChild(bookTitle);
    newBookEntry.appendChild(bookAuthor);
    newBookEntry.appendChild(bookPages);
    test.appendChild(newBookEntry);
  }
}

bookAdd();
