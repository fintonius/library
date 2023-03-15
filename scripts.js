let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    //takes the users input and creates a new Book object 
    //and adds it to the myLibrary array
    let x = document.getElementById('newBook').elements[0].value;
    document.getElementById('test').innerHTML = x;
}