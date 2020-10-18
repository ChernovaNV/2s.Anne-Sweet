/* Warning */
let commentText =  document.querySelector('#message'),
    submitButton = document.querySelector('.btn--message');

commentText.oninput = function () {

  if (commentText.value.length < 20 || commentText.value.length > 200) {
    commentText.classList.add('warning');
    submitButton.disabled = true;
  } else {
    commentText.classList.remove('warning');
    submitButton.disabled = false;
  }
};


