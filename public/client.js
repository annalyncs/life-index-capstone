"use strict";

(function($) {

    let FINANCES_URL='/finances';
    let HEALTH_URL ='/health';
    let FITNESS_URL = 'fitness';
    let TRANSPORT_URL = '/transport';

    function displayAllFinanceEntries() {
        $.ajax({
            method: 'GET',
            url: FINANCES_URL
        })
            .done(function(data) {
                let financeTableRows =
                    data.map(function (finance, index) {
                        return `<tr class="data-rows">
                            <td id="finance-date-row">${finance.date}</td>
                            <td id="finance-category-row">${finance.category}</td>
                            <td id="finance-cost-row">${finance.cost}</td>
                            <td id="finance-notes-row">${finance.notes}</td>
                            <td><a href="#"><img src="icons/view.png" alt="view-icon" class="icon view-icon" id="${finance._id}"></a></td>
                            <td><a href="#"><img src="icons/edit.png" alt="edit-icon" class="icon edit-icon" id="${finance._id}"></a></td>
                            <td><a href="#"><img src="icons/delete.png" alt="delete-icon" class="icon edit-icon" id="{finance._id}"></a></td>
                        </tr>`;
                    });
                $('#finance-table').removeClass('hide-display');
                $('#finance-table').append(financeTableRows);
        });
    };

    function displayAllHealthEntries() {
        $.ajax({
            method: 'GET',
            url: HEALTH_URL
        })
            .done(function(data) {
            let healthTableRows =
                data.map(function (health, index) {
                    return `<tr class="data-rows">
                        <td id="health-date-row">${health.date}</td>
                        <td id="health-category-row">${health.category}</td>
                        <td id="health-notes-row">${health.notes}</td>
                        <td><a href="#"><img src="icons/view.png" alt="view-icon" class="icon view-icon" id="${health._id}"></a></td>
                        <td><a href="#"><img src="icons/edit.png" alt="edit-icon" class="icon edit-icon" id="${health._id}"></a></td>
                        <td><a href="#"><img src="icons/delete.png" alt="delete-icon" class="icon delete" id="icon-${health._id}"></a></td>
                    </tr>`;
                });
            $('#health-table').removeClass('hide-display');
            $('#health-table').append(healthTableRows);
        });
    };

    function displayAllFitnessEntries() {
        $.ajax({
            method: 'GET',
            url: FITNESS_URL
        })
            .done(function(data) {
            let fitnessTableRows =
                data.map(function (fitness, index) {
                    return `<tr class="data-rows">
                        <td id="fitness-date-row">${fitness.date}</td>
                        <td id="fitness-workout-row">${fitness.workout}</td>
                        <td id="fitness-duration-row">${fitness.duration}</td>
                        <td id="fitness-notes-row">${fitness.notes}</td>
                        <td><a href="#"><img src="icons/view.png" alt="view-icon" class="icon view-icon" id="${fitness._id}"></a></td>
                        <td><a href="#"><img src="icons/edit.png" alt="edit-icon" class="icon edit-icon" id="${fitness._id}"></a></td>
                        <td><a href="#"><img src="icons/delete.png" alt="delete-icon" class="icon delete" id="${fitness._id}"></a></td>
                    </tr>`;
                });
            $('#fitness-table').removeClass('hide-display');
            $('#fitness-table').append(fitnessTableRows);
        });
    };

    function displayAllTransportEntries() {
        $.ajax({
            method: 'GET',
            url: TRANSPORT_URL
        })
            .done(function(data) {
            let transportTableRows =
                data.map(function (transport, index) {
                    return `<tr class="data-rows">
                        <td id="fitness-date-row">${transport.date}</td>
                        <td id="fitness-type-row">${transport.type}</td>
                        <td id="fitness-miles-row">${transport.miles}</td>
                        <td id="fitness-notes-row">${transport.notes}</td>
                        <td><a href="#"><img src="icons/view.png" alt="view-icon" class="icon view-icon" id="${transport._id}"></a></td>
                        <td><a href="#"><img src="icons/edit.png" alt="edit-icon" class="icon edit-icon" id="${transport._id}"></a></td>
                        <td><a href="#"><img src="icons/delete.png" alt="delete-icon" class="icon delete" id="${transport._id}"></a></td>
                    </tr>`;
                });
            $('#transport-table').removeClass('hide-display');
            $('#transport-table').append(transportTableRows);
        });
    };

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
        $('#finance-entry').html(' ');
        displayAllFinanceEntries();
    });

    $('#health-option').on('click', function() {
        $('.dashboard').addClass('hide-display');
        $('#health-data').removeClass('hide-display');
        $('#health-entry').html(' ');
        displayAllHealthEntries();
    });

    $('#fitness-option').on('click', function() {
        $('.dashboard').addClass('hide-display');
        $('#fitness-data').removeClass('hide-display');
        $('#fitness-entry').html(' ');
        displayAllFitnessEntries();
    });

    $('#transport-option').on('click', function() {
        $('.dashboard').addClass('hide-display');
        $('#transport-data').removeClass('hide-display');
        $('#transport-entry').html(' ');
        displayAllTransportEntries();
    });


    //click on back to dashboard button
    //redirect back to dashboard
    $('section').on('click', '#dash-back', function(){
        $('.dashboard').removeClass('hide-display');
        $('#finance-data').addClass('hide-display');
        $('#health-data').addClass('hide-display');
        $('#fitness-data').addClass('hide-display');
        $('#transport-data').addClass('hide-display');
        $('.data-rows').html(' ');
        $('#finance-entry').html(' ');
        $('#health-entry').html(' ');
        $('#fitness-entry').html(' ');
        $('#transport-entry').html(' ');

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
    $('#finance-data').on('click', '#all-finance-entries', function() {
        $('.data-rows').html(' ');
        displayAllFinanceEntries();
        });

    $('#all-health-entries').on('click', function() {
        $('.data-rows').html(' ');
       displayAllHealthEntries();
    });

    $('#all-fitness-entries').on('click', function() {
        $('.data-rows').html(' ');
       displayAllFitnessEntries();
    });

    $('#all-transport-entries').on('click', function() {
        $('.data-rows').html(' ');
        displayAllTransportEntries();
    });

    //click on view to view individual entry
    $('#finance-table').on('click', '.view-icon', function() {
        let idParameter =$(this).attr('id');

        $.ajax({
            method: 'GET',
            url: `${FINANCES_URL}/${idParameter}`
        })
            .done(function(data) {
            let financeEntry =
                `<div id="finance-entry">
                    <h2>Date:</h2>
                        <p>${data.date}</p>
                    <h2>Category:</h2>
                        <p>${data.category}</p>
                    <h2>Cost:</h2>
                        <p>${data.cost}</p>
                    <h2>Notes:</h2>
                        <p>${data.notes}</p>
                </div>`;

            $('#finance-table').addClass('hide-display');
            $('#finance-dash-buttons').before(financeEntry);
        });
    });

    $('#health-table').on('click', '.view-icon', function() {
        let idParameter =$(this).attr('id');

        $.ajax({
            method: 'GET',
            url: `${HEALTH_URL}/${idParameter}`
        })
            .done(function(data) {
            console.log(data);
            let healthEntry =
                `<div id="health-entry">
                <h2>Date:</h2>
                    <p>${data.date}</p>
                <h2>Category:</h2>
                    <p>${data.category}</p>
                <h2>Notes:</h2>
                    <p>${data.notes}</p>
                </div>`;

            $('#health-table').addClass('hide-display');

            $('#health-dash-buttons').before(healthEntry);
        });
    });

    $('#fitness-table').on('click', '.view-icon', function() {
        let idParameter =$(this).attr('id');

        $.ajax({
            method: 'GET',
            url: `${FITNESS_URL}/${idParameter}`
        })
            .done(function(data) {
            console.log(data);
            let fitnessEntry =
                `<div id="fitness-entry">
                    <h2>Date:</h2>
                        <p>${data.date}</p>
                    <h2>Workout:</h2>
                        <p>${data.workout}</p>
                    <h2>Duration:</h2>
                        <p>${data.duration}</p>
                    <h2>Notes:</h2>
                        <p>${data.notes}</p>
                    </div>`;

            $('#fitness-table').addClass('hide-display');
            $('#fitness-dash-buttons').before(fitnessEntry);
        });
    });

    $('#transport-table').on('click', '.view-icon', function() {
        let idParameter =$(this).attr('id');

        $.ajax({
            method: 'GET',
            url: `${TRANSPORT_URL}/${idParameter}`
        })
            .done(function(data) {
            console.log(data);
            let transportEntry =
                `<div id="transport-entry">
                <h2>Date:</h2>
                    <p>${data.date}</p>
                <h2>Type:</h2>
                    <p>${data.type}</p>
                <h2>Miles:</h2>
                    <p>${data.miles}</p>
                <h2>Notes:</h2>
                    <p>${data.notes}</p>
                </div>`;

            $('#transport-table').addClass('hide-display');
            $('#transport-dash-buttons').before(transportEntry);
        });
    });

})(jQuery);
