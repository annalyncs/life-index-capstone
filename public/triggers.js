$('#sign-in').on('click', function () {
    $('.start-page').addClass('hide-display');
    $('.about-page').addClass('hide-display');
    $('#sign-in-form').removeClass('hide-display');
    $('nav').addClass('hide-display');
})

$('#sign-up').on('click', function () {
    $('.start-page').addClass('hide-display');
    $('.about-page').addClass('hide-display');
    $('#sign-up-form').removeClass('hide-display');
    $('nav').addClass('hide-display');
})

//on the dashboard click on an option
//be redirected to that page
//redirect finances
$('#finance-option').on('click', function () {
    $('.dashboard').addClass('hide-display');
    $('#finance-data').removeClass('hide-display');
    $('#finance-entry').html(' ');
    $('#finance-main').removeClass('hide-display');
    $('.data-controls').removeClass('hide-display');
    $('.data-table').removeClass('hide-display');
    $('.dash-buttons').removeClass('hide-display');
    $('.add-entry').addClass('hide-display');
    $('.data-rows').html('');
    displayAllFinanceEntries(loggedInUser);
});

$('#health-option').on('click', function () {
    $('.dashboard').addClass('hide-display');
    $('#health-data').removeClass('hide-display');
    $('#health-entry').html(' ');
    $('#health-main').removeClass('hide-display');
    $('.data-controls').removeClass('hide-display');
    $('.data-table').removeClass('hide-display');
    $('.dash-buttons').removeClass('hide-display');
    $('.data-rows').html('');
    displayAllHealthEntries(loggedInUser);
});

$('#fitness-option').on('click', function () {
    $('.dashboard').addClass('hide-display');
    $('#fitness-data').removeClass('hide-display');
    $('#fitness-entry').html(' ');
    $('#fitness-main').removeClass('hide-display');
    $('.data-controls').removeClass('hide-display');
    $('.data-table').removeClass('hide-display');
    $('.dash-buttons').removeClass('hide-display');
    $('.data-rows').html('');
    displayAllFitnessEntries(loggedInUser);
});

$('#transport-option').on('click', function () {
    $('.dashboard').addClass('hide-display');
    $('#transport-data').removeClass('hide-display');
    $('#transport-entry').html(' ');
    $('#transport-main').removeClass('hide-display');
    $('.data-controls').removeClass('hide-display');
    $('.data-table').removeClass('hide-display');
    $('.dash-buttons').removeClass('hide-display');
    $('.data-rows').html('');
    displayAllTransportEntries(loggedInUser);
});


//click on back to dashboard button
//redirect back to dashboard
$('section').on('click', '#dash-back', function () {
    $('.dashboard').removeClass('hide-display');
    $('#finance-data').addClass('hide-display');
    $('#health-data').addClass('hide-display');
    $('#fitness-data').addClass('hide-display');
    $('#transport-data').addClass('hide-display');
    $('.add-entry').addClass('hide-display');
    $('.data-rows').html(' ');
    $('#finance-entry').html(' ');
    $('#health-entry').html(' ');
    $('#fitness-entry').html(' ');
    $('#transport-entry').html(' ');

});

//click on add entry
//redirect to add entry form

$('#finance-add').on('click', function () {
    $('.data-controls').addClass('hide-display');
    $('#finance-main').addClass('hide-display');
    $('.data-table').addClass('hide-display');
    $('.dash-buttons').addClass('hide-display');
    $('#add-entry-finance').removeClass('hide-display');
    $('.add-entry').removeClass('hide-display');
});


$('#health-add').on('click', function () {
    $('.data-controls').addClass('hide-display');
    $('#health-main').addClass('hide-display');
    $('.data-table').addClass('hide-display');
    $('.dash-buttons').addClass('hide-display');
    $('#add-entry-health').removeClass('hide-display');
    $('.add-entry').removeClass('hide-display');
});

$('#fitness-add').on('click', function () {
    $('.data-controls').addClass('hide-display');
    $('#fitness-main').addClass('hide-display');
    $('.data-table').addClass('hide-display');
    $('.dash-buttons').addClass('hide-display');
    $('#add-entry-fitness').removeClass('hide-display');
    $('.add-entry').removeClass('hide-display');
});


$('#transport-add').on('click', function () {
    $('.data-controls').addClass('hide-display');
    $('#transport-main').addClass('hide-display');
    $('.data-table').addClass('hide-display');
    $('.dash-buttons').addClass('hide-display');
    $('#add-entry-transport').removeClass('hide-display');
    $('.add-entry').removeClass('hide-display');
});


//Click on Back button on add entry form
//to go back to dashboard
$('.add-entry').on('click', '.back-button', function (e) {
    e.preventDefault();
    $('#add-entry-finance').addClass('hide-display');
    $('#add-entry-health').addClass('hide-display');
    $('#add-entry-fitness').addClass('hide-display');
    $('#add-entry-transport').addClass('hide-display');
    $('.dashboard').removeClass('hide-display');
    $('.lifestyle-data').addClass('hide-display');
});

//Click on all entries to display all entires
$('#finance-data').on('click', '#all-finance-entries', function () {
    $('.data-rows').html(' ');
    displayAllFinanceEntries(loggedInUser);
    $('#finance-entry').addClass('hide-display');
});

$('#all-health-entries').on('click', function () {
    $('.data-rows').html(' ');
    displayAllHealthEntries(loggedInUser);
    $('#health-entry').addClass('hide-display');
});

$('#all-fitness-entries').on('click', function () {
    $('.data-rows').html(' ');
    displayAllFitnessEntries(loggedInUser);
    $('#fitness-entry').addClass('hide-display');
});

$('#all-transport-entries').on('click', function () {
    $('.data-rows').html(' ');
    displayAllTransportEntries(loggedInUser);
    $('#transport-entry').addClass('hide-display');
});

$('#finance-table').on('click', '.view-icon', function () {
    displayFinanceByID();
});

$('#health-table').on('click', '.view-icon', function () {
    displayHealthByID();
});

$('#fitness-table').on('click', '.view-icon', function () {
    displayFitnessByID();
});

$('#transport-table').on('click', '.view-icon', function () {
    displayTransportByID();
});

//click edit icon to edit entry
//first get data
//then update
$('#finance-table').on('click', '.edit-icon', function () {
    $('#finance-table').addClass('hide-display');
    $('.data-controls').addClass('hide-display');
    retrieveFinanceData();
});

$('#finance-data').on('click', '.finance-update', function (e) {
    e.preventDefault();
    updateFinanceData();
});

$('#health-table').on('click', '.edit-icon', function () {
    $('#health-table').addClass('hide-display');
    $('.data-controls').addClass('hide-display');
    retrieveHealthdata();
});

$('#health-data').on('click', '.health-update', function (e) {
    e.preventDefault();
    updateHealthData();
});

$('#fitness-table').on('click', '.edit-icon', function () {
    $('#fitness-table').addClass('hide-display');
    $('.data-controls').addClass('hide-display');
    retrieveFitnessData();
});

$('#fitness-data').on('click', '.fitness-update', function (e) {
    e.preventDefault();
    updateFitnessData();
});

$('#transport-table').on('click', '.edit-icon', function () {
    $('#transport-table').addClass('hide-display');
    $('.data-controls').addClass('hide-display');
    retrieveTransportData();
});

$('#transport-data').on('click', '.transport-update', function (e) {
    e.preventDefault();
    updateTransportData();
});

$('#finance-table').on('click', '.delete-icon', function () {
    deleteFinanceEntry()
});

$('#health-table').on('click', '.delete-icon', function () {
    deleteHealthEntry()
});

$('#fitness-table').on('click', '.delete-icon', function () {
    deleteFitnessEntry()
});

$('#transport-table').on('click', '.delete-icon', function () {
    deleteTransportEntry()
});

$('.add-entry').on('click', '.finance-submit', function (e) {
            e.preventDefault();
            createFinanceEntry();
        }

        $('.add-entry').on('click', '.health-submit', function (e) {
            e.preventDefault();
            createHealthEntry();
        });

        $('.add-entry').on('click', '.fitness-submit', function (e) {
            e.preventDefault();
            createFitnessEntry();
        });

        $('.add-entry').on('click', '.transport-submit', function (e) {
            e.preventDefault();
            createTransportEntry()
        });

        $('.sign-up-submit').on('click', function (e) {
            e.preventDefault();
            createUser();
        });

        $('.sign-in-submit').on('click', function (e) {
            e.preventDefault();
            loginApp();
        });

        $('section').on('click', 'button.logout', function (e) {
            e.preventDefault();
            logoutApp()
        });
