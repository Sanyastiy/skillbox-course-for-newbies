$(function () {
    function disableScroll(){
        $('html, body').on('mousewheel',function () {
            return false;
        })
    }
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
                    + ' <i class="expand">&#9650;</i>'
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
                $(this).closest('.business_card').hide().fadeOut(1100).remove();
                //Если карточек больше нет, то показать надпись Список пуст
                if($('.close').length==0){
                    $('#list_empty').show().fadeIn(1100);
                }
            })
            $('.expand').click(function () {
                $(this).closest('.business_body').hide().fadeOut(1100);
            })
        })
});