# Small-JS-projects

## 1. Virtual-piano / Виртуальное пианино

https://ramitsan.github.io/Small-JS-projects/virtual-piano/

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
- есть кнопка Fullscreen при клике по которой можно развернуть приложение во весь экран. Повторный клик по кнопке Fullscreen или клик по клавише Esc клавиатуры выводит приложение из полноэкранного режима. В зависимости от того, находится приложение в обычном или полноэкранном режиме, меняется иконка на кнопке.
* Взаимодействие кнопки Fullscreen с клавишей F11 не требуется и не проверяется.

## Ключевые навыки
* работа с DOM
* работа со звуком
* работа с Fullscreen API


## 2. Photo-filter / Фотофильтр

https://ramitsan.github.io/Small-JS-projects/photo-filter/
