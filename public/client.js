"use strict";

(function($) {

    let FINANCES_URL='/finances';
    let HEALTH_URL ='/health';
    let FITNESS_URL = 'fitness';
    let TRANSPORT_URL = '/transport';

    //Click sign in or sign up
    //Redirect to forms
    //Hide start page
    $('#sign-in').on('click', function() {
        $('.start-page').addClass('hide-display');
        $('.about-page').addClass('hide-display');
        $('#sign-in-form').removeClass('hide-display');
        $('nav').addClass('hide-display');
    })

    $('#sign-up').on('click', function() {
        $('.start-page').addClass('hide-display');
        $('.about-page').addClass('hide-display');
        $('#sign-up-form').removeClass('hide-display');
        $('nav').addClass('hide-display');
    })

    //submit sign up or sign in form
    //redirect to dashboard
    $('.sign-in-submit').on('click', function(e) {
        e.preventDefault();
        $('#sign-in-form').addClass('hide-display');
        $('.dashboard').removeClass('hide-display');
    });

    $('.sign-up-submit').on('click', function(e) {
        e.preventDefault();
        $('#sign-up-form').addClass('hide-display');
        $('.dashboard').removeClass('hide-display');
    });

    //on the dashboard click on an option
    //be redirected to that page
    //redirect finances
    $('#finance-option').on('click', function() {
        $('.dashboard').addClass('hide-display');
        $('#finance-data').removeClass('hide-display');
    });

    $('#health-option').on('click', function() {
        $('.dashboard').addClass('hide-display');
        $('#health-data').removeClass('hide-display');
    });

    $('#fitness-option').on('click', function() {
        $('.dashboard').addClass('hide-display');
        $('#fitness-data').removeClass('hide-display');
    });

    $('#transport-option').on('click', function() {
        $('.dashboard').addClass('hide-display');
        $('#transport-data').removeClass('hide-display');
    });


    //click on back to dashboard button
    //redirect back to dashboard
    $('section').on('click', '#dash-back', function(){
        $('.dashboard').removeClass('hide-display');
        $('#finance-data').addClass('hide-display');
        $('#health-data').addClass('hide-display');
        $('#fitness-data').addClass('hide-display');
        $('#transport-data').addClass('hide-display');
    });

    //click on logout
    //redirect back to dashboard
    $('section').on('click', '.logout', function(){
        $('.dashboard').addClass('hide-display');
        $('#finance-data').addClass('hide-display');
        $('#health-data').addClass('hide-display');
        $('#fitness-data').addClass('hide-display');
        $('#transport-data').addClass('hide-display');
        $('.start-page').removeClass('hide-display');
        $('.about-page').removeClass('hide-display');
        $('nav').removeClass('hide-display');
    });

    //click on add entry
    //redirect to add entry form
    $('#finance-add').on('click', function() {
        $('#finance-data').addClass('hide-display');
        $('#add-entry-finance').removeClass('hide-display');
    });

    $('.finance-submit').on('click', function(e){
        e.preventDefault();
        $('#finance-data').removeClass('hide-display');
        $('#add-entry-finance').addClass('hide-display');
    });

    $('#health-add').on('click', function() {
        $('#health-data').addClass('hide-display');
        $('#add-entry-health').removeClass('hide-display');
    });

    $('.health-submit').on('click', function(e){
        e.preventDefault();
        $('#health-data').removeClass('hide-display');
        $('#add-entry-health').addClass('hide-display');
    });

    $('#fitness-add').on('click', function() {
        console.log('worked');
        $('#fitness-data').addClass('hide-display');
        $('#add-entry-fitness').removeClass('hide-display');
    });

    $('.fitness-submit').on('click', function(e){
        e.preventDefault();
        $('#fitness-data').removeClass('hide-display');
        $('#add-entry-fitness').addClass('hide-display');
    });

    $('#transport-add').on('click', function() {
        $('#transport-data').addClass('hide-display');
        $('#add-entry-transport').removeClass('hide-display');
    });

    $('.transport-submit').on('click', function(e){
        e.preventDefault();
        $('#transport-data').removeClass('hide-display');
        $('#add-entry-transport').addClass('hide-display');
    });

    //Click on all entries to display all entires
    $('#all-finance-entries').on('click', function() {
        $.ajax({
            method: 'GET',
            url: '/finances'
        })
            .done(function(data) {
                let financeTableRows =
                    data.map(function (finance, index) {
                    return `<tr>
                        <td>${data[index].date}</td>
                        <td>${data[index].category}</td>
                        <td>${data[index].cost}</td>
                        <td>${data[index].notes}</td>
                        <td><a href="#"><img src="icons/view.png" alt="view-icon" class="icon"></a></td>
                        <td><a href="#"><img src="icons/edit.png" alt="edit-icon" class="icon"></a></td>
                        <td><a href="#"><img src="icons/delete.png" alt="delete-icon" class="icon"></a></td>
                    </tr>`;
                    });
                $('table').append(financeTableRows);
            });
        });


})(jQuery);
