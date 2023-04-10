const myLibrary = [];
const test = document.getElementById("test");

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
  //and adds it to the myLibrary array

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
    console.log(myLibrary.indexOf(x));
    boxTicked.checked = false;
    document.getElementById("newBook").reset();
  }

  return;
}

//Creates a new 'card' for the user's new Book object
function addBookEntry() {
  //creates the HTML elements to add book info to
  const newBookEntry = document.createElement("div");
  const bookTitle = document.createElement("h1");
  const bookAuthor = document.createElement("p");
  const bookPages = document.createElement("p");
  const readBook = document.createElement("p");
  const bookNumber = document.createElement("p");
  const removeBook = document.createElement("button");  

  const haveRead = document.createElement("INPUT");
  haveRead.setAttribute("type", "checkbox");

  //loops through mytLibrary[] elements and adds the object members to
  //the relevant HTML elements.
  //I FEEL LIKE THIS IS A BIT OF A CHEAT: the foreach() loop goes over
  //all the array elements, passing all the info each time and it's only the
  //last element that gets added because it's the last one!
  //I don't know how to specify just the last element of the array but technically
  //here I don't need to :( 
  myLibrary.forEach((obj) => {
    // console.log(obj.title);
    bookTitle.textContent = obj.title;
    newBookEntry.dataset.index = myLibrary.indexOf(obj);
    bookNumber.textContent = myLibrary.indexOf(obj) + 1;
    bookAuthor.textContent = `${obj.title} was written by 
      ${obj.author}`;
    bookPages.textContent = `The book is ${obj.pages} pages long`;
    if (obj.read == "read") {
      readBook.textContent = "I have read this book.";
    } else {
      readBook.textContent = "I have not read this book yet.";
    }
  });

  removeBook.addEventListener('click', () => {
    let index = newBookEntry.dataset.index;
    myLibrary.splice(index, 1);
    console.table(myLibrary)
    myLibrary.forEach((obj) => {
      newBookEntry.dataset.index = myLibrary.indexOf(obj);
    })
    console.table(myLibrary)
  });

  newBookEntry.appendChild(bookTitle);
  newBookEntry.appendChild(bookAuthor);
  newBookEntry.appendChild(bookPages);
  newBookEntry.appendChild(readBook);
  newBookEntry.appendChild(removeBook);
  newBookEntry.appendChild(haveRead);
  newBookEntry.appendChild(bookNumber);
  test.appendChild(newBookEntry);
}

// function deleteBook(e) {
//  console.log(test);
// }

//Creates some example entries
const theHobbit = new Book("The Hobbit", "JRR Tolkein", "300", "read");
myLibrary.push(theHobbit);
addBookEntry();

const lOTR = new Book("The Lord of the Rings", "JRR Tolkein", "900", "read");
myLibrary.push(lOTR);
addBookEntry();


// console.table(myLibrary)

//Adds the example entries as cards
//finally realised I didn't need this and could just call addBookEntry()... :|
// function bookAdd() {
//   for (let i = 0; i <= myLibrary.length; i++) {
//     const newBookEntry = document.createElement("div");
//     const bookTitle = document.createElement("h1");
//     const bookAuthor = document.createElement("p");
//     const bookPages = document.createElement("p");
//     const readBook = document.createElement("p");

//     const remove = document.createElement("button");
//     remove.onclick = function () {
//       this.style.backgroundColor = "red";
//     };

//     const haveRead = document.createElement("INPUT");
//     haveRead.setAttribute("type", "checkbox");

//     bookTitle.textContent = myLibrary[i].title;
//     bookAuthor.textContent = `${myLibrary[i].title} was written by 
//    ${myLibrary[i].author}`;
//     bookPages.textContent = `The book is ${myLibrary[i].pages} pages long`;
//     if (myLibrary[i].read == "read") {
//       readBook.textContent = "I have read this book.";
//     } else {
//       readBook.textContent = "I have not read this book yet.";
//     }
//     newBookEntry.appendChild(bookTitle);
//     newBookEntry.appendChild(bookAuthor);
//     newBookEntry.appendChild(bookPages);
//     newBookEntry.appendChild(readBook);
//     newBookEntry.appendChild(remove);
//     newBookEntry.appendChild(haveRead);
//     test.appendChild(newBookEntry);
//   }
// }
// bookAdd();