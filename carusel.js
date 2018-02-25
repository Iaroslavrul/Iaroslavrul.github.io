;
(function () {
    window.addEventListener('load', function () {
        let currentPos = 0;
        let caruselWrap = document.getElementById('carusel');
        let imagesWrap = document.querySelectorAll('div#carusel > img'); //поймай все елементы, которые находятся внутри елементас айди карусель
        //        console.log(imagesWrap); для промежуточной проверки
        imagesWrap.forEach(img => img.style.display = 'none'); //все изображения хранятся в масивчике имайжесврап, пройтись по ним
        /*слева от стрелки прописываемся елементы, которые мы будем брать , а после стрелки функции мы прописываем, что мы с ними будем делать*/
        /* все изображения сделали невидимыми*/

        imagesWrap[currentPos].style.display = 'block'; //НУЖЕН КОМЕНТАРИЙ


        /*делаем переключатили, чтобы их было столько, сколько изображений. Создаем дивку с id= carusel-footer/ Помещаем его сначалав  некоторую переменную*/
        let carFooter = document.createElement('div');
        carFooter.setAttribute('id', 'carusel-footer'); //присваиваем только что созданой дивке id
        caruselWrap.appendChild(carFooter); //caruselWrap, я хочу тебе добавить ребенка 'carFooter'
        for (let i = 0; i < imagesWrap.length; i++) { //проходимся циклом по масиву imagesWrap
            let span = document.createElement('span');
            span.setAttribute('data-pos', i); // присваиваем каждому спану атрибут data-pos,который равен какому-то своему номеру
            carFooter.appendChild(span);
        };

        let spans = document.querySelectorAll('div#carusel-footer > span'); //найди все елементы с айди карусель -футтер и помести их в спан
        spans[currentPos].style.backgroundColor = '#999';

        carFooter.addEventListener('click', function (event) { //в ф-ю обработчика событий добавляем обьект события. И что дальше значит строка?
            if (event.target.dataset.pos) {
                currentPos = +event.target.dataset.pos;
                changeCurrentPos();

            }; //что значит target? event - отчет о собитии, target - это то, на чем я кликнул, data-pos='' - возми все dataset с pos


        }, false); //для того чтобы появлялась в алерте номер клацнутого спана, добавляем родителю спана обработчик событий addEventListener

        function changeCurrentPos() {
            imagesWrap.forEach(img => img.style.display = 'none');
            imagesWrap[currentPos].style.display = 'block';
            spans.forEach(span => span.style.backgroundColor = 'darkgoldenrod');
            spans[currentPos].style.backgroundColor = '#999';
        }

        setInterval(function () {
            currentPos = (currentPos < imagesWrap.length - 1) ? currentPos + 1 : 0;
            changeCurrentPos();
        }, 2000);
        
        let arrowLeftControl = document.getElementById(arrowLeft);
        let arrowRightControl = document.getElementById(arrowRight);
        arrowLeftControl.onclick = function () {
            
        };

    }, false); //для обьекта винтов дождаться его загрузки и выполнииь некоторую ф-ю. Что делает false?

})(); //самовызывающиеся ф-ии

//делегирование событий
