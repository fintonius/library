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

//Creates some example entries 
const theHobbit = new Book('The Hobbit', 'JRR Tolkein', '300', 'read');
myLibrary.unshift(theHobbit);
const lOTR = new Book('The Lord of the Rings', 'JRR Tolkein', '900', 'read');
myLibrary.unshift(lOTR);



//Adds the example entries as cards
function bookAdd() {
  for(let i=0; i <= myLibrary.length ; i++) {   
   const newBookEntry = document.createElement('div');
   const bookTitle = document.createElement('h1');
   const bookAuthor = document.createElement('p');
   const bookPages = document.createElement('p');
   const readBook = document.createElement('p');

   const remove = document.createElement('button');
   remove.onclick = function() {this.style.backgroundColor = 'red'};

   const haveRead = document.createElement('INPUT');
   haveRead.setAttribute('type', 'checkbox');

   bookTitle.textContent = myLibrary[i].title;
   bookAuthor.textContent = `${myLibrary[i].title} was written by 
   ${myLibrary[i].author}`;
   bookPages.textContent = `The book is ${myLibrary[i].pages} pages long`;
   if (myLibrary[i].read == 'read') {
    readBook.textContent = 'I have read this book.';
  } else {
    readBook.textContent = 'I have not read this book yet.';
  }
   newBookEntry.appendChild(bookTitle);
   newBookEntry.appendChild(bookAuthor);
   newBookEntry.appendChild(bookPages);
   newBookEntry.appendChild(readBook);
   newBookEntry.appendChild(remove);
   newBookEntry.appendChild(haveRead);
   test.appendChild(newBookEntry);
 }
}
bookAdd();

function addBookToLibrary() {
  //takes the users input and creates a new Book object 
  //and adds it to the myLibrary array
      
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let boxTicked = document.getElementById('read');
  let read = '';

  if (boxTicked.checked == true) {
    read = 'read';
  }

  if (title && author && pages) { //confirms user has input all info
    x = new Book(title, author, pages, read);
    myLibrary.unshift(x);
    addBookEntry();
    console.table(myLibrary);
    boxTicked.checked = false;
    document.getElementById("newBook").reset();
  }       
  return;
}

//Creates a new 'card' for the user's new Book object
function addBookEntry() {
    const newBookEntry = document.createElement('div');
    const bookTitle = document.createElement('h1');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const readBook = document.createElement('p');

    const remove = document.createElement('button');
    remove.onclick = function() {this.style.backgroundColor = 'red'};
 
    const haveRead = document.createElement('INPUT');
    haveRead.setAttribute('type', 'checkbox');
    
    bookTitle.textContent = myLibrary[0].title;
    bookAuthor.textContent = `${myLibrary[0].title} was written by 
    ${myLibrary[0].author}`;
    bookPages.textContent = `The book is ${myLibrary[0].pages} pages long`;
    if (myLibrary[0].read == 'read') {
      readBook.textContent = 'I have read this book.';
    } else {
      readBook.textContent = 'I have not read this book yet.';
    }
    newBookEntry.appendChild(bookTitle);
    newBookEntry.appendChild(bookAuthor);
    newBookEntry.appendChild(bookPages);
    newBookEntry.appendChild(readBook);
    newBookEntry.appendChild(remove);
    newBookEntry.appendChild(haveRead);
    test.appendChild(newBookEntry);
}