
 // the input fields

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');
const submitBtn = document.getElementById('submitBtn');

let myLibrary = [];

  // book constructor

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

  // variable to add new book, display it & reset fields

const addBookToLibrary = function() {
  title = titleInput.value;
  author = authorInput.value;
  pages = pagesInput.value;
  status = readInput.checked;

  let newBook = new Book(title, author, pages, status);

  myLibrary.push(newBook);
  formReset();

}

 // the main submit button

submitBtn.addEventListener('click', addBookToLibrary);

 // the additional processes (that happen when you add a book)

const formReset = () => {
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  readInput.value = '';
};



console.log(myLibrary)
