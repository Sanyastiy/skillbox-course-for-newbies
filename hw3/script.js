$(function () {
    $.get('https://data.fixer.io/api/latest?access_key=720a10039ed8f1663c0b44171075249e&base=EUR&symbols=RUB,USD', {}, function (response) {
        console.log(response);
        $('#exchange').html('Курс Евро к Рублю: '+response.rates.RUB+"<br>Курс Евро к Доллару: "+response.rates.USD);
        $('#exchange-time-stamp').html('Дата получения: '+response.date);
    })
});