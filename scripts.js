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

function addBookToLibrary() {
    console.log('test');
      //takes the users input and creates a new Book object 
      //and adds it to the myLibrary array
      
      let title = document.getElementById('title').value;
      let author = document.getElementById('author').value;
      let pages = document.getElementById('pages').value;
      let read = document.getElementById('newBook').elements[3].value;
      
      if (title && author && pages) {
        x = new Book(title, author, pages, read);
        myLibrary.unshift(x);
        console.table(myLibrary);  
        addBookEntry();
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
    bookAuthor.textContent = myLibrary[0].author;
    bookPages.textContent = myLibrary[0].pages;
    newBookEntry.appendChild(bookTitle);
    newBookEntry.appendChild(bookAuthor);
    newBookEntry.appendChild(bookPages);
    test.appendChild(newBookEntry);
  }