const piano = document.querySelector('.piano');
const keys = document.querySelectorAll('.piano-key');
const btnFullscreenElement = document.querySelector('.fullscreen');
const btnNotesElement = document.querySelector('.btn-notes');
const btnLettersElement = document.querySelector('.btn-letters');


// переключение отображения нот или букв 
btnNotesElement.addEventListener('click', () => {
  if (btnLettersElement.classList.contains('btn-active')) {
    btnLettersElement.classList.remove('btn-active');
  }
  btnNotesElement.classList.add('btn-active');
  keys.forEach(key => {
    key.classList.remove('piano-key-letter');
  });
});

btnLettersElement.addEventListener('click', () => {
  if (btnNotesElement.classList.contains('btn-active')) {
    btnNotesElement.classList.remove('btn-active');
  }
  btnLettersElement.classList.add('btn-active');
  keys.forEach(key => {
    key.classList.add('piano-key-letter');
  });
});


// добавление класса активной клавиши
addPianoKeyActive = (evt) => {
  if (!evt.target.classList.contains('piano-key-active')) {
    evt.target.classList.add('piano-key-active');
  }
  if (!evt.target.classList.contains('piano-key-active-pseudo')) {
    evt.target.classList.add('piano-key-active-pseudo');
  }
};

// удаление класса активной клавиши
removePianoKeyActive = (evt) => {
  if (evt.target.classList.contains('piano-key-active')) {
    evt.target.classList.remove('piano-key-active');
    evt.target.blur();
  }
  if (evt.target.classList.contains('piano-key-active-pseudo')) {
    evt.target.classList.remove('piano-key-active-pseudo');
  }
};


// воспроизведение аудио по клику
playClickHandler = (evt) => {
  if (evt.target.classList.contains('piano-key')) {
    addPianoKeyActive(evt);
    const note = document.getElementById(evt.target.dataset.note);
    note.currentTime = 0;
    note.play();

    note.addEventListener('ended', () => {
      removePianoKeyActive(evt);
    });
  }
};

piano.addEventListener('mousedown', playClickHandler);
piano.removeEventListener('mouseup', playClickHandler);


// воспроизведение при нажатии клавиш клавиатуры
let isKeyPressed = true;

playKeyPressHandler = (evt) => {
  const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${evt.keyCode}"]`);
  if (!audio) return;
  if (isKeyPressed) {
    key.classList.add('piano-key-active');
    audio.currentTime = 0;
    audio.play();
  }
  isKeyPressed = false;
};

keys.forEach(key => key.addEventListener('transitionend', removePianoKeyActive));
window.addEventListener('keydown', playKeyPressHandler);
window.addEventListener('keyup', () => {
  isKeyPressed = true;
});

// переключение полноэкранного режима
toggleFullScreen = () => {
  if (document.fullscreenElement === null) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.fullscreenEnabled) {
      document.exitFullscreen();
    }
  }
};

btnFullscreenElement.addEventListener('click', toggleFullScreen);

// воспроизведение с зажатой левой кнопкой мыши по всем клавишам
let isMousePressed = false;

piano.addEventListener('mousedown', (evt) => {
  isMousePressed = true;
  if (isMousePressed && evt.target.closest('.piano-key')) {
    playClickHandler(evt);
  };
});

document.addEventListener('mouseup', () => {
  isMousePressed = false;
});

piano.addEventListener('mouseover', (evt) => {
  if (isMousePressed && evt.target.closest('.piano-key')) {
    playClickHandler(evt);
  }
});