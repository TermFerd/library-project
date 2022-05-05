
let myLibrary = [];

function Book(title, author, pages, readYet) {
  this.title = title;
  this.auther = author;
  this.pages = pages;
  this.readYet = readYet;
  this.info = function() {
    return (title + " by " + author + ", " + pages + " pages, " + readYet + '.')
  }
}

function addBookToLibrary() {
  // do stuff here
}







/*code block

const theHobbit = new Book('Mist', 'J.R.R. Tolkien', '295', 'not read yet')

*/