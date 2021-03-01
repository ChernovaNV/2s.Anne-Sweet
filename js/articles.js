/* liked */

let btnLike = document.querySelector('.icons__btn'),
    numLike = document.querySelector('.like__number'),
    counter = numLike.textContent;

btnLike.onclick = function() {
  if (btnLike.classList.contains('icons--liked')) {
    counter--;
  } else {
    counter++;
  }
  numLike.textContent = counter;
  btnLike.classList.toggle('icons--liked');
}


/* add comment */

let commentsForm = document.querySelector('.comments__form'),
    commentsList = document.querySelector('.comments__list'),
    commentText =  document.querySelector('#comment'),
    commentAutor = document.querySelector('#comments-autor'),
    commentMail = document.querySelector('#comments-email'),
    submitButton = document.querySelector('.btn--comments');


commentsForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li'),
      newPhoto = document.createElement('img'),
      newAutor = document.createElement('span'),
      newText = document.createElement('p');

  newComment.appendChild(newPhoto);
  newComment.appendChild(newAutor);
  newComment.appendChild(newText);

  newComment.classList.add('comments__item');
  newPhoto.classList.add('comments__img');
  newAutor.classList.add('comments__name');
  newText.classList.add('comments__text');

  newPhoto.setAttribute('src', '../content-image/avatar-1.jpg');
  newAutor.textContent = commentAutor.value;
  newText.textContent = commentText.value;


  commentText.value = '';
  commentAutor.value = '';
  commentMail.value = '';

  commentsList.append(newComment);
};

/* Warning */

commentText.oninput = function () {

  if (commentText.value.length < 20 || commentText.value.length > 200) {
    commentText.classList.add('warning');
    submitButton.disabled = true;
  } else {
    commentText.classList.remove('warning');
    submitButton.disabled = false;
  }
};


/* Not return sign for input in form if entered though 1 symbol*/

const commentInput = document.querySelectorAll('.comments__input');

commentInput.forEach((input) => {
  input.oninput = function () {
    let inputNode = input.nextElementSibling;

    if (input.value.length > 0) {
      inputNode.classList.add('comments__input--entered');
    } else {
      inputNode.classList.remove('comments__input--entered');
    }
  }
})
