"use strict";

(function($) {

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
    $('.sign-in-submit').on('click', function() {
        $('#sign-in-form').addClass('hide-display');
        $('.dashboard').removeClass('hide-display');
    });

    $('.sign-up-submit').on('click', function() {
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









})(jQuery);
