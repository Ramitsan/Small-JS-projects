# Small-JS-projects

## 1. Virtual-piano / Виртуальное пианино

GitHub Pages: https://ramitsan.github.io/Small-JS-projects/virtual-piano/

### Структура приложения
* на странице отображаются клавиши пианино. Минимальное количество клавиш 12 - 7 белых и 5 черных (одна октава)
* возле клавиш пианино отображаются или названия соответствующих этим клавишам нот (над черными клавишами используется знак альтерации диез), или буквы клавиш клавиатуры, при клике по которым они звучат. Что именно отображается в данный момент зависит от состояния переключателя Notes/Letters. При клике по буквам или нотам звука быть не должно.
* есть иконка для перехода в полноэкранный режим

### Функциональность приложения
* при клике по клавише пианино мышкой проигрывается соответствующая этой клавише нота, клавиша переходит в активное состояние
* при клике по клавише клавиатуры, которая соответствует клавише пианино, проигрывается нота, клавиша переходит в активное состояние.
* Нота проигрывается вне зависимости от раскладки клавиатуры (русская или английская) и состояния клавиши CapsLosk. Совместная работа и взаимодействие мышки и клавиатуры не проверяется и не оценивается.
* можно провести курсором с зажатой левой кнопкой мыши по клавишам пианино, при этом будут проигрываться соответствующие данным клавишам ноты. Клавиши, над которыми в данный момент находится курсор, переходят в активное состояние. Если проводить мышкой очень быстро, отдельные клавиши могут не проигрываться, эта особенность работы мышки ошибкой не является.
Обратите внимание:
  - данная возможность работает только если нажимать мышкой над клавишами пианино (не в любом месте приложения).
  - реализация указанного функционала для других кнопок мыши кроме левой не проверяется и не оценивается.
* при клике по переключателю Notes/Letters сменяется отображение возле клавиш пианино названий соответствующих этим клавишам нот или букв
* у клавиш пианино и соответствующих им букв или нот есть три состояния, которые отличаются по стилю: активное состояние, неактивное состояние, состояние при наведении. Разные стили включают в себя: разный цвет клавиш, трансформацию клавиш, разный цвет соответствующих клавишам букв и нот. Дополнительно к перечисленным могут быть другие отличия на ваше усмотрение.
* в активное состояние клавиша пианино переходит:
  - при клике по ней мышкой
  - при клике по соответствующей ей клавише клавиатуры
  - если провести над клавишей курсором с зажатой левой кнопкой мышки
* есть кнопка Fullscreen при клике по которой можно развернуть приложение во весь экран. Повторный клик по кнопке Fullscreen или клик по клавише Esc клавиатуры выводит приложение из полноэкранного режима. В зависимости от того, находится приложение в обычном или полноэкранном режиме, меняется иконка на кнопке.
* Взаимодействие кнопки Fullscreen с клавишей F11 не требуется и не проверяется.

### Ключевые навыки
* работа с DOM
* работа со звуком
* работа с Fullscreen API


## 2. Photo-filter / Фотофильтр

GitHub Pages: https://ramitsan.github.io/Small-JS-projects/photo-filter/

### Структура и работа приложения
* на странице отображается стартовое изображение и настройки css-фильтров blur, invert, saturate, sepia, hue rotate в виде ползунков, каждому из которых соответствует определённый css-фильтр. Дополнительные фильтры можно добавить по своему усмотрению.
* стартовое изображение загружается из файлов самого приложения. Его соответствие времени суток не требуется.
* над изображением есть четыре кнопки, каждой из которых соответствует определённый функционал:
  - кнопка Reset позволяет сбросить настройки css-фильтров
  - кнопка Next picture предназначена для смены изображений, которые загружаются с внешнего ресурса по ссылке
  - кнопка Load picture для загрузки изображения с компьютера
  - кнопка Save picture позволяет скачать изображение вместе с добавленными фильтрами на компьютер

### Функциональность приложения
* напротив каждого ползунка есть поле, в котором отображается значение соответствующего css-фильтра. При перемещении ползунка значение изменяется
* при перемещении ползунка меняется внешний вид изображения на странице приложения в соответствии с изменением значения соответствующего css-фильтра
* при клике по кнопке Reset сбрасываются значения всех css-фильтров. При этом возвращаются к исходному состоянию положение ползунков, значения в соответствующих им полях и внешний вид изображения
* при нажатии на кнопку Next picture загружается следующая картинка из папки с картинками, расположенной на Github. Если в приложении установлены пользовательские значения фильтров, при перелистывании изображений они сохраняются. Ссылка на картинку формируется с учётом времени суток и номера картинки. Например: https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg
Здесь:
  - evening - время суток, другие значения day, morning, night
  - 18 - номер картинки, от 01 до 20.
* изображения перелистываются по кругу: после последнего двадцатого изображения снова загружается первое
* изображения должны соответствовать текущему времени суток:
  - с 6:00 до 11:59 - morning
  - с 12:00 до 17:59 - day
  - с 18:00 до 23:59 - evening
  - с 00:00 до 5:59 - night (как проверить: откройте приложение и убедитесь, что при кликах на кнопку Next picture открываются изображения, соответствующие текущему времени суток. Время суток определяется по системному времени пользователя. Перевод часов не проверяется и не оценивается.)
* при клике по кнопке Load picture открывается окно выбора файлов на компьютере, выбранное изображение отображается в приложении, вписывается в предназначенное для него окно, занимая всю возможную площадь. Пропорции изображения при этом не искажаются. Если в приложении установлены пользовательские значения фильтров, при загрузке нового изображения они сохраняются. Одно и то же изображение можно загружать повторно (как проверить: загрузите изображение, нажмите на Next picture, чтобы картинка сменилась, снова загрузите то же самое изображение с компьютера)
* при клике по Save picture изображение скачивается на компьютер, в исходном размере (в рх) в формате .png с сохранением прозрачности, если она была в исходном изображении. Скачать можно стартовое изображение, изображение полученное при перелистывании кнопкой Next picture, изображение загруженное с компьютера. Изображения скачиваются вместе с добавленными фильтрами. Внешний вид скачанного изображения совпадает с внешним видом изображения, которое редактировалось на странице приложения. Особое внимание обратите на фильтр blur (как проверить данный фильтр: загрузите очень большое или очень маленькое изображение, изображение вытянутое в ширину или в высоту, измените значение фильтра blur, сравните размытие изображения, загруженного на компьютер, с размытием этого же изображения в приложении).
* есть кнопка Fullscreen при клике по которой можно развернуть приложение во весь экран. Повторный клик по кнопке Fullscreen или клик по клавише Esc клавиатуры выводит приложение из полноэкранного режима. В зависимости от того, находится приложение в обычном или полноэкранном режиме, меняется иконка на кнопке.
Взаимодействие кнопки Fullscreen с клавишей F11 не требуется и не проверяется.

### Ключевые навыки
* использование js для работы с файлами
* загрузка локальных файлов в приложение
* сохранение файлов на компьютер
* работа с датами в js
* работа с Canvas API

## 3. Calculator / Калькулятор

GitHub Pages: https://ramitsan.github.io/Small-JS-projects/calculator/

Сделан на основе видеоурока https://www.youtube.com/watch?v=j59qQ7YWLxw&feature=youtu.be

К базовой функциональности (сложение, вычитание, умножение, деление) добавлены
- извлечение квадратного корня и возведение в степень, 
- действия с отрицательными числами (например, можно поделить -9 на -3. При вводе отрицательного числа перед ним отображается знак "минус"), 
- действия с дробями (как известно, JavaScript не умеет правильно считать дроби. Например, при сложении 0.1 и 0.2 он должен возвращать 0.3, а не 0.30000000000000004). 

## Примеры вычислений для проверки работоспособности калькулятора
Примеры ориентировочные, числа могут быть другими. 
Знак => в примерах означает клик на кнопку калькулятора "равно".

### Базовая функциональность
* 1 + 2 => 3
* 3 + 69.5 => 92.5
* 74 * 3 - 5 => 217
* 2 + 3 => 5 продолжаем ввод 4 => 4 - после равно следующая цифра перезаписывает результат
* есть кнопка, позволяющая очистить результат

### Дополнительные математические операции
* 25 √ => 5 или √ 25 => 5 - любой вариант правильный
* 9 √ + 1 => 4 или √ 9 + 1 => 4 - любой вариант правильный
* 2 ^ 2 => 4
* 15 ^ 3 => 3375
* 10.1 ^ 3 => 1030.301

### Действия с отрицательными числами
* -9 / -3 => 3
* 2 + -2 => 0
* 2 / -2 => -1
* -9 ^ 3 => -729
* -9 √ => уведомление об ошибке или √ - 9 => уведомление об ошибке - любой вариант правильный

### Действия с дробями
* 0.1 + 0.2 => 0.3
* 0.4 - 0.1 => 0.3
* 0.0004 + 0.0004 => 0.0008
* -0.1 * 0.2 => -0.02
* -0.15 + -0.15 => -0.3 - а не - 0.30
