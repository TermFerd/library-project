
 // the input fields

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const bookCase = document.querySelector('.bookcase');
const submitBtn = document.querySelector('#submitBtn');


// the modal add book popup button

const modalBtn = document.querySelector('#modalBtn');
const modalBg = document.querySelector('.modal-bg'); 
const modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', function(){
  modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click', function(){
  modalBg.classList.remove('bg-active');
});




// the big array of items

const myLibrary = [];

// book constructor (details needed for a book)

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = title.slice(0, 3).toUpperCase() + pages;
}

  // variable to add new book, display it & reset fields

const addBookToLibrary = () => {
  title = titleInput.value;
  author = authorInput.value;
  pages = pagesInput.value;
  id = this.id;

  let newBook = new Book(title, author, pages);

 
  if (title === '' && author === '' && pages === '') {
    alert('no input!')
  } else {
    myLibrary.push(newBook);
    createBook();
    formReset();
    submitClose();
  } 
}

// update books (this is used to reset after you remove a book too)


// displaying a new book 



const createBook = (item) => {
  const div = document.createElement('div');
  const divTop = document.createElement('div');
  const removeBtn = document.createElement('button');
  const h3Title = document.createElement('h3');
  const pAuthor = document.createElement('h4');
  const pPages = document.createElement('p');

  div.className = "bookcase-book";
  divTop.className = "topwrapper";
  removeBtn.className = "removebtn";
  bookCase.prepend(div);
  div.append(divTop);

  h3Title.innerText = myLibrary.at(-1).title;
  pAuthor.innerText = myLibrary.at(-1).author;
  pPages.innerText = myLibrary.at(-1).pages;
  removeBtn.textContent = 'Remove';

  divTop.append(h3Title);
  divTop.append(pAuthor);
  div.append(pPages);
  div.append(removeBtn);

  removeBtn.addEventListener('click', () => {
    myLibrary.splice(myLibrary.indexOf(item), 1);

  bookCase.removeChild(div);
    
  });

};


 // closing modal on submit

const submitClose = () => {
  modalBg.classList.remove('bg-active');
};

 // the main submit button

submitBtn.addEventListener('click', addBookToLibrary,);

 // resetting the form

const formReset = () => {
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
};


console.log(myLibrary);






