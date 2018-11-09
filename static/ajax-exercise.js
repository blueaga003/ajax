"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', (results) => {
        const fortune = results;
        $('#fortune-text').html(fortune);
    });
}

$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();


    let url = '/weather.json';
    let formData = {'zipcode': $('#zipcode-field').val()};

    // TODO: request weather with that URL and show the forecast in #weather-info

    $.get(url, formData, (results) => {

        $('#weather-info').html(results.forecast);
        });

}
$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    console.log(evt);

    // TODO: show the result message after your form
    const formValues = {
        'quantity' : $('#qty-field').val(),
        'type' : $('#melon-type-field').val()
    };

    console.log(formValues); // This works

    $.post("/order-melons.json", formValues, (resultHandler) => {
        console.log(resultHandler);
        alert(resultHandler);
    });

    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


