
 // the input fields

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const submitBtn = document.getElementById('submitBtn');
const bookCase = document.querySelector('.bookcase')

let myLibrary = [];

  // book constructor (details needed for a book)

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

  let newBook = new Book(title, author, pages);

  myLibrary.push(newBook);
  formReset();
  createBook();

}

 // the main submit button

submitBtn.addEventListener('click', addBookToLibrary);

 // resetting the form

const formReset = () => {
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
};

 // creating a new book 

const createBook = (item) => {
  const div = document.createElement('div');
  const newBookTitle = document.createElement('h3');

  div.className = "bookcase-book";
  bookCase.appendChild(div);

  

};

console.log(myLibrary)
