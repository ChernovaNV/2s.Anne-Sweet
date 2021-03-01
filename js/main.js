let countPosts = 0, countPortfolio = 0;

const articles = document.querySelectorAll('.post'),
      filter = document.querySelector('.category__toggle'),

      btnPortfolio = document.querySelector('.btn--portfolio'),
      btnPosts = document.querySelector('.btn--post'),

      hiddenPosts = document.querySelectorAll('.post.hidden'),
      hiddenPortfolio = document.querySelectorAll('.portfolio__item.hidden'),

      commentText = document.querySelector('#message'),
      submitButton = document.querySelector('.btn--message');


/* Del button "Показать еще"*/
const delBtnMore = (hidden, btn, count) => {
  if (count === hidden.length) {
    btn.classList.add('hidden');
  }
}


  /* Sirting posts */
filter.onchange = function () {
  for (let article of articles) {
    if (article.dataset.category !== filter.value && filter.value !== 'all') {
      article.classList.add('hidden');
    } else if (filter.value == 'all') {
      for (let i = 0; i < articles.length; i++){
        if (i < 5) {
          articles[i].classList.remove('hidden');
        } else {
          articles[i].classList.add('hidden');
        }
      }
      articles[3, 4].classList.add('post--big');
      btnPosts.classList.remove('hidden');
    } else  {
      article.classList.remove('hidden');
      article.classList.remove('post--big');
      btnPosts.classList.add('hidden');
    }
  }
};

/* Change arrow for select*/
document.addEventListener('click', (e) => {
  if (e.target == filter) {
    filter.classList.toggle('category__toggle--arrow-up');
  } else {
    filter.classList.remove('category__toggle--arrow-up');
  }
});

/* Add articles */
/* Add 3 articles in section post */
btnPosts.addEventListener('click', () => {
  document.querySelectorAll('.post--big').forEach((bigPost) => {
    bigPost.classList.remove('post--big');
  });
  for (let i = 0; countPosts < hiddenPosts.length && i < 3; i++, countPosts++) {
    if (i !== 0) {
      hiddenPosts[countPosts].classList.add('post--big');
    }
    hiddenPosts[countPosts].classList.remove('hidden');
  };
  delBtnMore(hiddenPosts, btnPosts, countPosts);
});

/* Add 3 artisles in section portfolio */
btnPortfolio.addEventListener('click', () => {
  for (let i = 0; countPortfolio < hiddenPortfolio.length && i < 3; i++, countPortfolio++) {
    hiddenPortfolio[countPortfolio].classList.remove('hidden');
  };
  delBtnMore(hiddenPortfolio, btnPortfolio, countPortfolio);
});


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



