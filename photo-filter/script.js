const baseUrl = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/';
const imagesArr = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
let i = 0;
const picture = document.querySelector('.image-container img');
const btnReset = document.querySelector('.btn-reset');
const btnNext = document.querySelector('.btn-next');
const btnSave = document.querySelector('.btn-save');
const btnFullscreen = document.querySelector('.fullscreen');
const inputRangeElements = document.querySelectorAll('.filters input');
const imageContainer = document.querySelector('.image-container');


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

btnFullscreen.addEventListener('click', toggleFullScreen);

// применение фильтров
function applyFilters() {
  const suffix = this.dataset.sizing;
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  // выводим значение value в соответствующий output
  this.nextElementSibling.value = this.value;
};

// применение фильтров через делегирование
const filters = document.querySelector('.filters');
filters.addEventListener('input', (evt) => {
  if (evt.target.classList.contains('input')) {
    let input = evt.target;
    input.addEventListener('input', applyFilters);
  }
});

// сброс фильтров по кнопке Reset
btnReset.addEventListener('click', function() {
  document.documentElement.style = '';
  inputRangeElements.forEach(input => {
    if (input === document.querySelector('input[name="saturate"]')) {
      input.value = '100';
    } else {
      input.value = '0';
    }
    input.nextElementSibling.value = input.value;
  });
});

// загрузка картинки с компьютера
const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const fileChooser = document.querySelector('.editor input[type=file]');

fileChooser.addEventListener('change', function() {
  const file = fileChooser.files[0];
  let fileName = file.name.toLowerCase();

  //  проверим, оканчивается ли название файла на допустимое расширение
  const matches = FILE_TYPES.some(function(it) {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', function() {
      picture.src = reader.result;
    });
  }
});

// меняем картинку в зависимости от времени суток
let currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();


//добавляем первый ноль в однозначных числах часов и минут
function addZero(num) {
  if (num <= 9) {
    num = '0' + num;
  }
  return num;
};

let currentTime = addZero(hours) + ':' + addZero(minutes); // текущее время
let timesOfDay = ''; // время суток

// в зависимости от текущего времени определяем время суток
if (currentTime >= '06:00' && currentTime <= '11:59') timesOfDay = 'morning';
else if (currentTime >= '12:00' && currentTime <= '17:59') timesOfDay = 'day';
else if (currentTime >= '18:00' && currentTime <= '23:59') timesOfDay = 'evening';
else if (currentTime >= '00:00' && currentTime <= '05:59') timesOfDay = 'night';

// загрузка изображений по ссылке 
function viewBgImage(src) {
  picture.src = src;
}

function getImage() {
  if (picture.src != '') {
    fileChooser.value = '';
  }
  const index = i % imagesArr.length;
  const imageSrc = `${baseUrl}/${timesOfDay}/${imagesArr[index]}`;
  picture.setAttribute('src', imageSrc);
  viewBgImage(imageSrc);
  i++;
}
btnNext.addEventListener('click', getImage);

// канвас
const canvas = document.querySelector('#canvas');

// формируем строку с примененными фильтрами
const setFilter = (height) => {
  let str = '';
  inputRangeElements.forEach((input) => {
    str += `${input.name === 'hue' ? 'hue-rotate' : input.name}(${
      input.name === 'blur' ? input.value * (height / picture.height) : input.value}${input.dataset.sizing})`;
  });
  return str;
};

// сохранение картинки с фильтрами
const drawImage = () => {
  const img = new Image();
  img.setAttribute('crossOrigin', 'anonymous');
  img.src = picture.src;
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');

    ctx.filter = setFilter(img.height);
    ctx.drawImage(img, 0, 0, img.width, img.height);
    let link = document.createElement('a');
    link.download = 'download.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    link.delete;
  };
};

btnSave.addEventListener('click', drawImage);