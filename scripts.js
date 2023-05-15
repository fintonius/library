const myLibrary = [];
const library = document.getElementById("library");
let cardArray;

let bookForm = document.getElementById('addBook');
let overlay = document.getElementById('overlay');

function showForm() {
  //creates 'pop-up' of data-form for new book entry
  if (bookForm.style.display === 'none') {
    bookForm.style.display = 'block';
    overlay.style.display = 'block';
  
  //adds a semi-transparent layer to the window to fade
  //out background & disable buttons in the library
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
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let boxTicked = document.getElementById('read');
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
    document.getElementById('newBook').reset();
  }
  return;
};

//Creates a new 'card' for the user's new Book object
function addBookEntry() {
  //creates the HTML elements to add book info to
  const newBookEntry = document.createElement('div');  
  newBookEntry.classList.add('card');
  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');
  const bookTitle = document.createElement('h1');
  bookTitle.classList.add( 'book-title');
  const bookInfo = document.createElement('p');
  bookInfo.classList.add( 'book-info');
  const readBook = document.createElement('div');
  readBook.classList.add( 'read-book');
  const readBookText = document.createElement('div');
  readBookText.classList.add('read-book-text');
  const yesNo = document.createElement('div');
  yesNo.classList.add( 'yes-or-no');
  const buttonWrap = document.createElement('div');
  buttonWrap.classList.add('button-wrap')
  const removeBook = document.createElement('button');  
  removeBook.classList.add('remove-book');
  let index = myLibrary.length -1; 
  newBookEntry.setAttribute('currentIndex', index); 

  const haveRead = document.createElement('INPUT');
  haveRead.setAttribute('type', 'checkbox');
  haveRead.addEventListener('click', () => {
    if (haveRead.checked == true) {
      yesNo.textContent = 'Yes';
      yesNo.style.backgroundColor = 'rgb(144, 238, 144)';
    } else {
      yesNo.textContent = 'No';
      yesNo.style.backgroundColor = 'rgb(255, 30, 30)';
    }
  });

  //creates the 'Yes/No' button for the 'read book' option
  const yesNoSwitch = document.createElement('label');
  const yesNoSlider = document.createElement('span');
  readBookText.textContent = "Have you read the book?";
  yesNoSwitch .appendChild(haveRead);
  yesNoSwitch .appendChild(yesNoSlider);

  yesNoSwitch .classList.add('switch');
  yesNoSlider.classList.add('slider');
  haveRead.classList.add('checkbox');
  
  bookTitle.textContent = myLibrary[index].title;
  bookInfo.textContent = `${bookTitle.textContent} was written by 
  ${myLibrary[index].author}. It is ${myLibrary[index].pages} pages long`;

  //to input the 'read book' info from the example entries as they bypass
  //the checkbox stage of the form completion process
  if (myLibrary[index].read == "read") {  
    yesNo.textContent = 'Yes';
    yesNo.style.backgroundColor = 'rgb(144, 238, 144)';
    haveRead.checked = 'check';
  } 

  removeBook.addEventListener('click', () => {
    myLibrary.splice(newBookEntry.getAttribute('currentIndex'), 1);
    library.removeChild(newBookEntry);
    const cards = document.querySelectorAll('.card');
    cardArray = Array.from(cards);
    updateIndexAttribute(cardArray);
    console.table(myLibrary);   
  });

  readBook.appendChild(readBookText);
  readBook.appendChild(yesNoSwitch);
  readBook.appendChild(yesNo);
  buttonWrap.appendChild(removeBook);
  cardContent.appendChild(bookTitle);
  cardContent.appendChild(bookInfo);
  cardContent.appendChild(readBook);
  newBookEntry.appendChild(buttonWrap);
  newBookEntry.appendChild(cardContent);
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