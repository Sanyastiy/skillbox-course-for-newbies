$(function () {
    function disableScroll() {
        $('html, body').on('mousewheel', function () {
            return false;
        })
    }

    disableScroll();
    //Добавить дело
    $('#submit')
        .click(function () {
            //убрать надпись Список пуст
            $('#list_empty').hide().fadeOut(1100);
            //Создание карточки
            var newElement =
                $('<div class="business_card"> '
                    + '<div class="business_head"><h3>'
                    + $("#name").val()
                    + ' <i class="close">&times;</i>'
                    + ' <i class="reduce">&#9650;</i>'
                    + '</h3></div><div class="business_body">'
                    + $("#description").val()
                    + '</div>'
                    + '</div>');
            //Добавить картчоку
            $(newElement).prependTo($('#main_business')).hide().fadeIn(1100);
            //Очистка полей
            $('#name').val('');
            $('#description').val('');
            //Крестик на карточке
            $('.close').click(function () {
                //Удаление карточки по классу с анимацией
                $(this).closest('.business_card').fadeOut(1100).remove();
                //Если карточек больше нет, то показать надпись Список пуст
                if ($('.close').length == 0) {
                    $('#list_empty').show().fadeIn(1100);
                }
            })

            //скрытие описания карточки
            //находим стрелку сворачивания
            $('.reduce').click(function () {
                //при клике попадаем сюда, и каждый клик будет всегда приходить сюда и не выйдет за пределы этой функции
                //по ифу определяем что будет делать "кнопка"
                if ($(this).hasClass("reduce")) {
                    //зашли в сворачивание, меняем класс кнопки
                    $(this).removeClass('reduce').addClass('expand');
                    //сворачиваем блок
                    $(this).closest('.business_head').next('.business_body').hide().fadeOut(1100);
                    //меняем символ
                    $(this).html('&#9660;');
                } else
                    //по ифу определяем что будет делать "кнопка"
                if ($(this).hasClass("expand")) {
                    //зашли в сворачивание, меняем класс кнопки
                    $(this).removeClass('expand').addClass('reduce');
                    //разворачиваем блок
                    $(this).closest('.business_head').next('.business_body').show().fadeIn(1100);
                    //меняем символ
                    $(this).html('&#9650;');
                }
            })

        })

});