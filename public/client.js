"use strict";

(function($) {

    let FINANCES_URL='/finances';
    let HEALTH_URL ='/health';
    let FITNESS_URL = 'fitness';
    let TRANSPORT_URL = '/transport';
    let USER_URL = '/users/';
    let USER_AUTH_URL = '/login';

    function displayAllFinanceEntries() {
        $.ajax({
            method: 'GET',
            url: FINANCES_URL
        })
            .done(function(data) {
                let financeTableRows =
                    data.map(function (finance, index) {
                        return `<tr class="data-rows" id=${finance._id}>
                            <td id="finance-date-row">${finance.date}</td>
                            <td id="finance-category-row">${finance.category}</td>
                            <td id="finance-cost-row">${finance.cost}</td>
                            <td id="finance-notes-row">${finance.notes}</td>
                            <td><a href="#"><img src="icons/view.png" alt="view-icon" class="icon view-icon" id="${finance._id}"></a></td>
                            <td><a href="#"><img src="icons/edit.png" alt="edit-icon" class="icon edit-icon" id="${finance._id}"></a></td>
                            <td><a href="#"><img src="icons/delete.png" alt="delete-icon" class="icon delete-icon" id="${finance._id}"></a></td>
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
                    return `<tr class="data-rows" id=${health._id}>
                        <td id="health-date-row">${health.date}</td>
                        <td id="health-category-row">${health.category}</td>
                        <td id="health-notes-row">${health.notes}</td>
                        <td><a href="#"><img src="icons/view.png" alt="view-icon" class="icon view-icon" id="${health._id}"></a></td>
                        <td><a href="#"><img src="icons/edit.png" alt="edit-icon" class="icon edit-icon" id="${health._id}"></a></td>
                        <td><a href="#"><img src="icons/delete.png" alt="delete-icon" class="icon delete-icon" id="${health._id}"></a></td>
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
                    return `<tr class="data-rows" id=${fitness._id}>
                        <td id="fitness-date-row">${fitness.date}</td>
                        <td id="fitness-workout-row">${fitness.workout}</td>
                        <td id="fitness-duration-row">${fitness.duration}</td>
                        <td id="fitness-notes-row">${fitness.notes}</td>
                        <td><a href="#"><img src="icons/view.png" alt="view-icon" class="icon view-icon" id="${fitness._id}"></a></td>
                        <td><a href="#"><img src="icons/edit.png" alt="edit-icon" class="icon edit-icon" id="${fitness._id}"></a></td>
                        <td><a href="#"><img src="icons/delete.png" alt="delete-icon" class="icon delete-icon" id="${fitness._id}"></a></td>
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
                    return `<tr class="data-rows" id=${transport._id}>
                        <td id="fitness-date-row">${transport.date}</td>
                        <td id="fitness-type-row">${transport.type}</td>
                        <td id="fitness-miles-row">${transport.miles}</td>
                        <td id="fitness-notes-row">${transport.notes}</td>
                        <td><a href="#"><img src="icons/view.png" alt="view-icon" class="icon view-icon" id="${transport._id}"></a></td>
                        <td><a href="#"><img src="icons/edit.png" alt="edit-icon" class="icon edit-icon" id="${transport._id}"></a></td>
                        <td><a href="#"><img src="icons/delete.png" alt="delete-icon" class="icon delete-icon" id="${transport._id}"></a></td>
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



    //on the dashboard click on an option
    //be redirected to that page
    //redirect finances
    $('#finance-option').on('click', function() {
        $('.dashboard').addClass('hide-display');
        $('#finance-data').removeClass('hide-display');
        $('#finance-entry').html(' ');
        $('#finance-main').removeClass('hide-display');
        $('.data-controls').removeClass('hide-display');
        $('.data-table').removeClass('hide-display');
        $('.dash-buttons').removeClass('hide-display');
        $('.add-entry').addClass('hide-display');
        $('.data-rows').html('');
        displayAllFinanceEntries();
    });

    $('#health-option').on('click', function() {
        $('.dashboard').addClass('hide-display');
        $('#health-data').removeClass('hide-display');
        $('#health-entry').html(' ');
        $('#health-main').removeClass('hide-display');
        $('.data-controls').removeClass('hide-display');
        $('.data-table').removeClass('hide-display');
        $('.dash-buttons').removeClass('hide-display');
        $('.data-rows').html('');
        displayAllHealthEntries();
    });

    $('#fitness-option').on('click', function() {
        $('.dashboard').addClass('hide-display');
        $('#fitness-data').removeClass('hide-display');
        $('#fitness-entry').html(' ');
        $('#fitness-main').removeClass('hide-display');
        $('.data-controls').removeClass('hide-display');
        $('.data-table').removeClass('hide-display');
        $('.dash-buttons').removeClass('hide-display');
        $('.data-rows').html('');
        displayAllFitnessEntries();
    });

    $('#transport-option').on('click', function() {
        $('.dashboard').addClass('hide-display');
        $('#transport-data').removeClass('hide-display');
        $('#transport-entry').html(' ');
        $('#transport-main').removeClass('hide-display');
        $('.data-controls').removeClass('hide-display');
        $('.data-table').removeClass('hide-display');
        $('.dash-buttons').removeClass('hide-display');
        $('.data-rows').html('');
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
        $('.add-entry').addClass('hide-display');
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
        $('.data-controls').addClass('hide-display');
        $('#finance-main').addClass('hide-display');
        $('.data-table').addClass('hide-display');
        $('.dash-buttons').addClass('hide-display');
        $('#add-entry-finance').removeClass('hide-display');
        $('.add-entry').removeClass('hide-display');
    });


    $('#health-add').on('click', function() {
        $('.data-controls').addClass('hide-display');
        $('#health-main').addClass('hide-display');
        $('.data-table').addClass('hide-display');
        $('.dash-buttons').addClass('hide-display');
        $('#add-entry-health').removeClass('hide-display');
        $('.add-entry').removeClass('hide-display');
    });

    $('#fitness-add').on('click', function() {
        $('.data-controls').addClass('hide-display');
        $('#fitness-main').addClass('hide-display');
        $('.data-table').addClass('hide-display');
        $('.dash-buttons').addClass('hide-display');
        $('#add-entry-fitness').removeClass('hide-display');
        $('.add-entry').removeClass('hide-display');
    });


    $('#transport-add').on('click', function() {
        $('.data-controls').addClass('hide-display');
        $('#transport-main').addClass('hide-display');
        $('.data-table').addClass('hide-display');
        $('.dash-buttons').addClass('hide-display');
        $('#add-entry-transport').removeClass('hide-display');
        $('.add-entry').removeClass('hide-display');
    });


    //Click on Back button on add entry form
    //to go back to dashboard
    $('.add-entry').on('click', '.back-button', function(e) {
        e.preventDefault();
        $('#add-entry-finance').addClass('hide-display');
        $('#add-entry-health').addClass('hide-display');
        $('#add-entry-fitness').addClass('hide-display');
        $('#add-entry-transport').addClass('hide-display');
        $('.dashboard').removeClass('hide-display');
        $('.lifestyle-data').addClass('hide-display');
    });

    //Click on all entries to display all entires
    $('#finance-data').on('click', '#all-finance-entries', function() {
        $('.data-rows').html(' ');
        displayAllFinanceEntries();
        $('#finance-entry').addClass('hide-display');
        });

    $('#all-health-entries').on('click', function() {
        $('.data-rows').html(' ');
        displayAllHealthEntries();
        $('#health-entry').addClass('hide-display');
    });

    $('#all-fitness-entries').on('click', function() {
        $('.data-rows').html(' ');
        displayAllFitnessEntries();
        $('#fitness-entry').addClass('hide-display');
    });

    $('#all-transport-entries').on('click', function() {
        $('.data-rows').html(' ');
        displayAllTransportEntries();
        $('#transport-entry').addClass('hide-display');
    });

    //click on view icon to view individual entry

    $('#finance-table').on('click', '.view-icon', function() {
        let idParameter =$(this).attr('id');

        $.ajax({
            method: 'GET',
            url: `${FINANCES_URL}/${idParameter}`
        })
            .done(function(data) {
            let financeEntry =
                `<div id="finance-entry">
                    <h1>Finance</h1>
                    <h2>View Entry</h2>
                    <h3>Date:</h3>
                        <p>${data.date}</p><br>
                    <h3>Category:</h3>
                        <p>${data.category}</p><br>
                    <h3>Cost:</h3>
                        <p>${data.cost}</p><br>
                    <h3>Notes:</h3>
                        <p>${data.notes}</p>
                </div>`;

            $('#finance-entry').removeClass('hide-display');
            $('#finance-table').addClass('hide-display');
            $('#finance-main').html(financeEntry);
            $('#finance-main').removeClass('hide-display');
        });
    });

    $('#health-table').on('click', '.view-icon', function() {
        let idParameter =$(this).attr('id');

        $.ajax({
            method: 'GET',
            url: `${HEALTH_URL}/${idParameter}`
        })
            .done(function(data) {
            let healthEntry =
                `<div id="health-entry">
                <h1>Health</h1>
                <h2>View Entry</h2>
                <h3>Date:</h3>
                    <p>${data.date}</p><br>
                <h3>Category:</h3>
                    <p>${data.category}</p><br>
                <h3>Notes:</h3>
                    <p>${data.notes}</p>
                </div>`;

            $('#health-entry').removeClass('hide-display');
            $('#health-table').addClass('hide-display');
            $('#health-main').html(healthEntry);
            $('#health-main').removeClass('hide-display');
        });
    });

    $('#fitness-table').on('click', '.view-icon', function() {
        let idParameter =$(this).attr('id');

        $.ajax({
            method: 'GET',
            url: `${FITNESS_URL}/${idParameter}`
        })
            .done(function(data) {
            let fitnessEntry =
                `<div id="fitness-entry">
                    <h1>Fitness</h1>
                    <h2>View Entry</h2>
                    <h3>Date:</h3>
                        <p>${data.date}</p><br>
                    <h3>Workout:</h3>
                        <p>${data.workout}</p><br>
                    <h3>Duration:</h3>
                        <p>${data.duration}</p><br>
                    <h3>Notes:</h3>
                        <p>${data.notes}</p>
                    </div>`;

            $('#fitness-entry').removeClass('hide-display');
            $('#fitness-table').addClass('hide-display');
            $('#fitness-main').html(fitnessEntry);
            $('#fitness-main').removeClass('hide-display');
        });
    });

    $('#transport-table').on('click', '.view-icon', function() {
        let idParameter =$(this).attr('id');

        $.ajax({
            method: 'GET',
            url: `${TRANSPORT_URL}/${idParameter}`
        })
            .done(function(data) {
            let transportEntry =
                `<div id="transport-entry">
                <h1>Transport</h1>
                <h2>View Entry</h2>
                <h3>Date:</h3>
                    <p>${data.date}</p><br>
                <h3>Type:</h3>
                    <p>${data.type}</p><br>
                <h3>Miles:</h3>
                    <p>${data.miles}</p><br>
                <h3>Notes:</h3>
                    <p>${data.notes}</p>
                </div>`;

            $('#transport-entry').removeClass('hide-display');
            $('#transport-table').addClass('hide-display');
            $('#transport-main').html(transportEntry);
            $('#transport-main').removeClass('hide-display');
        });
    });

    //click edit icon to edit entry
    //first get data
    //then update

    function retrieveFinanceData() {
        $('#finance-table').on('click', '.edit-icon', function() {
            let idParameter = $(this).attr('id');
            $('#finance-table').addClass('hide-display');
            $('.data-controls').addClass('hide-display');

            $.ajax({
                method: 'GET',
                url: `${FINANCES_URL}/${idParameter}`
            })
                .done(function(data) {
                    let financeUpdateForm =
                        `<div id="update-entry-finance" class="add-entry">
                            <form class="add-entry" id=${idParameter}>
                                <h1 class="add-entry-data">Finance</h1>
                                <h2 class="add-entry-new">Update Entry</h2>
                                <label for="date">Date</label><br>
                                <input type="text" name="date" value="${data.date}" id="finance-date"><br>
                                <label for="category">Category</label><br>
                                <select name="category" value="${data.category}" id="finance-category">
                                    <option value="Apparel, Shoes & Accessories">Apparel, Shoes & Accessories</option>
                                    <option value="Dining & Drinking">Dining & Drinking</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Groceries">Groceries</option>
                                    <option value="Household Products">Household Products</option>
                                    <option value="Medical & Health">Medical & Health</option>
                                    <option value="Transportation">Transportation</option>
                                    <option value="Personal Care">Personal Care</option>
                                    <option value="Professional Services">Professional Services</option>
                                    <option value="Other">Other</option>
                                </select><br>
                                <label for="cost">Cost</label><br>
                                <input type="text" name="cost" value="${data.cost}" id="finance-cost"><br>
                                <label for="notes">Notes</label><br>
                                <input type="text" name="notes" value="${data.notes}" id="finance-notes"><br>
                                <input type="submit" value="Update" class="add-submit finance-update">
                            </form>
                        </div>`;
                    $('#finance-main').html(financeUpdateForm);
                    $('#update-entry-finance').removeClass('hide-display');
            })
                .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
        });
    }

    function updateFinanceData() {
        $('#finance-data').on('click', '.finance-update', function(e) {
            e.preventDefault();
            let idParameter = $('form.add-entry').attr('id');
            let dateInput = $('form.add-entry').find('#finance-date').val();
            let categoryInput = $('form.add-entry').find('select#finance-category').val();
            let costInput = $('form.add-entry').find('#finance-cost').val();
            let notesInput = $('form.add-entry').find('#finance-notes').val();
            let newDataInput = {
                'date': dateInput,
                'category': categoryInput,
                'cost': costInput,
                'notes': notesInput
            }

            $.ajax({
                method: 'PUT',
                url: `${FINANCES_URL}/${idParameter}`,
                contentType: 'application/json',
                data: JSON.stringify(newDataInput)
            })
                .done(function(data) {
                    $('.data-rows').html('');
                    displayAllFinanceEntries();
                    $('#update-entry-finance').addClass('hide-display');
                    $('#finance-table').removeClass('hide-display');
                    $('.data-controls').removeClass('hide-display');
            })
                .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
        });
    }

    //UPDATE HEALTH DATA
    function retrieveHealthData() {
        $('#health-table').on('click', '.edit-icon', function() {
            let idParameter =$(this).attr('id');
            $('#health-table').addClass('hide-display');
            $('.data-controls').addClass('hide-display');

            $.ajax({
                method: 'GET',
                url: `${HEALTH_URL}/${idParameter}`
            })
                .done(function(data) {
                let healthUpdateForm =
                    `<div id="update-entry-health" class="add-entry">
                        <form class="add-entry" id=${idParameter}>
                        <h1 class="add-entry-data">Health</h1>
                        <h2 class="add-entry-new">Update Entry</h2>
                        <label for="date">Date</label><br>
                            <input type="text" name="date" value="${data.date}" id="health-date"><br>
                        <label for="category">Category</label><br>
                        <select name="category" value="${data.category}" id="health-category">
                            <option>Appointment</option>
                            <option>Mood</option>
                            <option>Diet</option>
                            <option>Other</option>
                        </select><br>
                        <label for="notes">Notes</label><br>
                            <input type="text" name="notes" value="${data.notes}" id="health-notes"><br>
                        <input type="submit" value="Update" class="add-submit health-update">
                        </form>
                    </div>`;
                $('#health-main').html(healthUpdateForm);
                $('#update-entry-health').removeClass('hide-display');
            })
                .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
        });
    }

    function updateHealthData() {
        $('#health-data').on('click', '.health-update', function(e) {
            e.preventDefault();
            let idParameter = $('form.add-entry').attr('id');
            let dateInput = $('form.add-entry').find('#health-date').val();
            let categoryInput = $('form.add-entry').find('select#health-category').val();
            let notesInput = $('form.add-entry').find('#health-notes').val();
            let newDataInput = {
                'date': dateInput,
                'category': categoryInput,
                'notes': notesInput
            }

            $.ajax({
                method: 'PUT',
                url: `${HEALTH_URL}/${idParameter}`,
                contentType: 'application/json',
                data: JSON.stringify(newDataInput)
            })
                .done(function(data) {
                $('.data-rows').html('');
                displayAllHealthEntries();
                $('#update-entry-health').addClass('hide-display');
                $('#health-table').removeClass('hide-display');
                $('.data-controls').removeClass('hide-display');
            })
                .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
        })
    }

    // UPDATE FITNESS DATA

    function retrieveFitnessData() {
        $('#fitness-table').on('click', '.edit-icon', function() {
            let idParameter =$(this).attr('id');
            $('#fitness-table').addClass('hide-display');
            $('.data-controls').addClass('hide-display');

            $.ajax({
                method: 'GET',
                url: `${FITNESS_URL}/${idParameter}`
            })
                .done(function(data) {
                console.log(data);
                let fitnessUpdateForm =
                    `<div id="update-entry-fitness" class="add-entry">
                    <form class="add-entry" id=${idParameter}>
                        <h1 class="add-entry-data">Fitness</h1>
                        <h2 class="add-entry-new">Update Entry</h2>
                        <label for="date">Date</label><br>
                            <input type="text" name="date" value="${data.date}" id="fitness-date"><br>
                        <label for="workout">Workout</label><br>
                        <select name="workout" value="${data.workout}" id="fitness-workout">
                            <option>Aerobic</option>
                            <option>Strength</option>
                            <option>Balance</option>
                            <option>Flexibility</option>
                            <option>Other</option>
                        </select><br>
                        <label for="duration">Duration</label><br>
                            <input type="text" name="duration" value="${data.duration}" id="fitness-duration"><br>
                        <label for="notes">Notes</label><br>
                            <input type="text" name="notes" value="${data.notes}" id="fitness-notes"><br>
                        <input type="submit" value="Update" class="add-submit fitness-update">
                    </form>
                    </div>`;
                $('#fitness-main').html(fitnessUpdateForm);
                $('#update-entry-fitness').removeClass('hide-display');
            })
                .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
                });
        });
    }

    function updateFitnessData() {
        $('#fitness-data').on('click', '.fitness-update', function(e) {
            e.preventDefault();
            let idParameter = $('form.add-entry').attr('id');
            let dateInput = $('form.add-entry').find('#fitness-date').val();
            let workoutInput = $('form.add-entry').find('select#fitness-workout').val();
            let durationInput = $('form.add-entry').find('#fitness-duration').val();
            let notesInput = $('form.add-entry').find('#fitness-notes').val();

            let newDataInput = {
                'date': dateInput,
                'workout': workoutInput,
                'duration': durationInput,
                'notes': notesInput
            }

            $.ajax({
                method: 'PUT',
                url: `${FITNESS_URL}/${idParameter}`,
                contentType: 'application/json',
                data: JSON.stringify(newDataInput)
            })
                .done(function(data) {
                $('.data-rows').html('');
                displayAllFitnessEntries();
                $('#update-entry-fitness').addClass('hide-display');
                $('#fitness-table').removeClass('hide-display');
                $('.data-controls').removeClass('hide-display');
            })
                .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
        })
    }

    //UPDATE TRANSPORT DATA

    function retrieveTransportData() {
        $('#transport-table').on('click', '.edit-icon', function() {
            let idParameter =$(this).attr('id');
            $('#transport-table').addClass('hide-display');
            $('.data-controls').addClass('hide-display');

            $.ajax({
                method: 'GET',
                url: `${TRANSPORT_URL}/${idParameter}`
            })
                .done(function(data) {
                let transportUpdateForm =
                    `<div id="update-entry-transport" class="add-entry">
                        <form class="add-entry" id=${idParameter}>
                            <h1 class="add-entry-data">Transport</h1>
                            <h2 class="add-entry-new">Update Entry</h2>
                            <label for="date">Date</label><br>
                                <input type="text" name="date" value="${data.date}" id="transport-date"><br>
                            <label for="type">Type</label><br>
                            <select name="type" value="${data.type}" id="transport-type">
                                <option>Auto</option>
                                <option>Bus</option>
                                <option>Train</option>
                                <option>Bicycle</option>
                                <option>Other</option>
                            </select><br>
                            <label for="Miles">Miles</label><br>
                                <input type="text" name="miles" value="${data.miles}" id="transport-miles"><br>
                            <label for="notes">Notes</label><br>
                                <input type="text" name="notes" value="${data.notes}" id="transport-notes"><br>
                            <input type="submit" value="Update" class="add-submit transport-update">
                        </form>
                    </div>`;
                $('#transport-main').html(transportUpdateForm);
                $('#update-entry-transport').removeClass('hide-display');
            })
                .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
        });
    }

    function updateTransportData() {
        $('#transport-data').on('click', '.transport-update', function(e) {
            e.preventDefault();
            let idParameter = $('form.add-entry').attr('id');
            let dateInput = $('form.add-entry').find('#transport-date').val();
            let typeInput = $('form.add-entry').find('select#transport-type').val();
            let milesInput = $('form.add-entry').find('#transport-miles').val();
            let notesInput = $('form.add-entry').find('#transport-notes').val();

            let newDataInput = {
                'date': dateInput,
                'type': typeInput,
                'miles': milesInput,
                'notes': notesInput
            }

            $.ajax({
                method: 'PUT',
                url: `${TRANSPORT_URL}/${idParameter}`,
                contentType: 'application/json',
                data: JSON.stringify(newDataInput)
            })
                .done(function(data) {
                $('.data-rows').html('');
                displayAllTransportEntries();
                $('#update-entry-transport').addClass('hide-display');
                $('#transport-table').removeClass('hide-display');
                $('.data-controls').removeClass('hide-display');
            })
                .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            })
        })
    }

    //DELETE ENTRY

    function deleteFinanceEntry() {
        $('#finance-table').on('click', '.delete-icon', function() {
            let idParameter =$(this).attr('id');

            $.ajax({
                method: 'DELETE',
                url: `${FINANCES_URL}/${idParameter}`
            })
                .done(function(data) {
                    $('.data-rows').html('');
                    displayAllFinanceEntries();
            })
                .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
        });
    }

    function deleteHealthEntry() {
        $('#health-table').on('click', '.delete-icon', function() {
            let idParameter =$(this).attr('id');

            $.ajax({
                method: 'DELETE',
                url: `${HEALTH_URL}/${idParameter}`
            })
                .done(function(data) {
                    $('.data-rows').html('');
                    displayAllHealthEntries();
            })
                .fail(function (jqXHR, error, errorThrown) {
                    console.log(jqXHR);
                    console.log(error);
                    console.log(errorThrown);
            });
        });
    }

    function deleteFitnessEntry() {
        $('#fitness-table').on('click', '.delete-icon', function() {
            let idParameter =$(this).attr('id');
            $.ajax({
                method: 'DELETE',
                url: `${FITNESS_URL}/${idParameter}`
            })
                .done(function(data) {
                    $('.data-rows').html('');
                    displayAllFitnessEntries();
            })
                .fail(function (jqXHR, error, errorThrown) {
                    console.log(jqXHR);
                    console.log(error);
                    console.log(errorThrown);
            });
        });
    }

    function deleteTransportEntry() {
        $('#transport-table').on('click', '.delete-icon', function() {
            let idParameter =$(this).attr('id');

            $.ajax({
                method: 'DELETE',
                url: `${TRANSPORT_URL}/${idParameter}`
            })
                .done(function(data) {
                    $('.data-rows').html('');
                    displayAllTransportEntries();
            })
                .fail(function (jqXHR, error, errorThrown) {
                    console.log(jqXHR);
                    console.log(error);
                    console.log(errorThrown);
            });
        });
    }

    //CREATE ENTRY

    function createFinanceEntry() {
        $('.add-entry').on('click', '.finance-submit', function(e) {
            e.preventDefault();
            let dateInput = $(this).parent().find('#finance-add-date').val();
            let categoryInput = $(this).parent().find('#finance-add-category').val();
            let costInput = $(this).parent().find('#finance-add-cost').val();
            let notesInput = $(this).parent().find('#finance-add-notes').val();

            let dataInput = {
                'date': dateInput,
                'category': categoryInput,
                'cost': costInput,
                'notes': notesInput
            };

            $.ajax({
                method: "POST",
                url: `${FINANCES_URL}/new`,
                contentType: 'application/json',
                data: JSON.stringify(dataInput)
            })
                .done(function(data) {
                    $('#add-entry-finance').addClass('hide-display');
                    $('.data-rows').html('');
                    displayAllFinanceEntries();
                    $('#finance-table').removeClass('hide-display');
                    $('.data-controls').removeClass('hide-display');
                    $('.dash-buttons').removeClass('hide-display');
                    $('form.add-entry').find('#finance-add-date').val('');
                    $('form.add-entry').find('#finance-add-category').val('');
                    $('form.add-entry').find('#finance-add-cost').val('');
                    $('form.add-entry').find('#finance-add-notes').val('');
            })
        })
    }

    function createHealthEntry() {
        $('.add-entry').on('click', '.health-submit', function(e) {
            e.preventDefault();
            let dateInput = $(this).parent().find('#health-add-date').val();
            let categoryInput = $(this).parent().find('#health-add-category').val();
            let notesInput = $(this).parent().find('#health-add-notes').val();

            let dataInput = {
                'date': dateInput,
                'category': categoryInput,
                'notes': notesInput
            };

            $.ajax({
                method: "POST",
                url: `${HEALTH_URL}/new`,
                contentType: 'application/json',
                data: JSON.stringify(dataInput)
            })
                .done(function(data) {
                $('#add-entry-health').addClass('hide-display');
                $('.data-rows').html('');
                displayAllHealthEntries();
                $('#health-table').removeClass('hide-display');
                $('.data-controls').removeClass('hide-display');
                $('.dash-buttons').removeClass('hide-display');
                $('form.add-entry').find('#health-add-date').val('');
                $('form.add-entry').find('#health-add-category').val('');
                $('form.add-entry').find('#health-add-notes').val('');
            })
        })
    }

    function createFitnessEntry() {
        $('.add-entry').on('click', '.fitness-submit', function(e) {
            e.preventDefault();
            let dateInput = $(this).parent().find('#fitness-add-date').val();
            let workoutInput = $(this).parent().find('#fitness-add-workout').val();
            let durationInput = $(this).parent().find('#fitness-add-duration').val();
            let notesInput = $(this).parent().find('#fitness-add-notes').val();

            let dataInput = {
                'date': dateInput,
                'workout': workoutInput,
                'duration': durationInput,
                'notes': notesInput
            };

            $.ajax({
                method: "POST",
                url: `${FITNESS_URL}/new`,
                contentType: 'application/json',
                data: JSON.stringify(dataInput)
            })
                .done(function(data) {
                $('#add-entry-fitness').addClass('hide-display');
                $('.data-rows').html('');
                displayAllFitnessEntries();
                $('#fitness-table').removeClass('hide-display');
                $('.data-controls').removeClass('hide-display');
                $('.dash-buttons').removeClass('hide-display');
                $('form.add-entry').find('#fitness-add-date').val('');
                $('form.add-entry').find('#fitness-add-workout').val('');
                $('form.add-entry').find('#fitness-add-duration').val('');
                $('form.add-entry').find('#fitness-add-notes').val('');
            })
        })
    }

    function createTransportEntry() {
        $('.add-entry').on('click', '.transport-submit', function(e) {
            e.preventDefault();
            let dateInput = $(this).parent().find('#transport-add-date').val();
            let typeInput = $(this).parent().find('#transport-add-type').val();
            let milesInput = $(this).parent().find('#transport-add-miles').val();
            let notesInput = $(this).parent().find('#transport-add-notes').val();

            let dataInput = {
                'date': dateInput,
                'type': typeInput,
                'miles': milesInput,
                'notes': notesInput
            };

            $.ajax({
                method: "POST",
                url: `${TRANSPORT_URL}/new`,
                contentType: 'application/json',
                data: JSON.stringify(dataInput)
            })
                .done(function(data) {
                $('#add-entry-transport').addClass('hide-display');
                $('.data-rows').html('');
                displayAllTransportEntries();
                $('#transport-table').removeClass('hide-display');
                $('.data-controls').removeClass('hide-display');
                $('.dash-buttons').removeClass('hide-display');
                $('form.add-entry').find('#transport-add-date').val('');
                $('form.add-entry').find('#transport-add-type').val('');
                $('form.add-entry').find('#transport-add-miles').val('');
                $('form.add-entry').find('#transport-add-notes').val('');
            })
        })
    }


    //create user
    function createUser() {
        $('.sign-up-submit').on('click', function(e) {
            e.preventDefault();
            let nameInput = $(this).parent().find('#name-input').val();
            let usernameInput = $(this).parent().find('#username-input').val();
            let passwordInput = $(this).parent().find('#password-input').val();


            let userInput = {
                'username': usernameInput,
                'name': nameInput,
                'password': passwordInput
            };

            $.ajax({
                url: USER_URL,
                method: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(userInput)
            })
            .done(function (data) {
                console.log('new user created');
                $('#sign-up-form').addClass('hide-display');
                $('.dashboard').removeClass('hide-display');
            })
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
        });
    }


    //login to app
    function loginApp() {

        $('.sign-in-submit').click(function (e) {
            e.preventDefault();
            let usernameInput = $(this).parent().find('#login-username').val();
            let passwordInput = $(this).parent().find('#login-password').val();
            let userInput = {
                'username': usernameInput,
                'password': passwordInput
            };
            console.log('logging in');

            $.ajax({
                url: USER_AUTH_URL,
                method: 'POST',
                data: JSON.stringify(userInput),
                contentType: 'application/json'
            })
            .done(function(data) {
                console.log(data);
                $('#sign-in-form').addClass('hide-display');
                $('.dashboard').removeClass('hide-display');
                $('#sign-in-form').addClass('hide-display');
                $('.dashboard').removeClass('hide-display');
                $('.sign-in-submit').parent().find('#login-username').val('');
                $('.sign-in-submit').parent().find('#login-password').val('');
            })
            .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
            });
        });
    }




    retrieveFinanceData();
    updateFinanceData();
    retrieveHealthData();
    updateHealthData();
    retrieveFitnessData();
    updateFitnessData();
    retrieveTransportData();
    updateTransportData();
    deleteFinanceEntry();
    deleteFitnessEntry();
    deleteHealthEntry();
    deleteTransportEntry();
    createFinanceEntry();
    createHealthEntry();
    createFitnessEntry();
    createTransportEntry();
    createUser();
    loginApp();

})(jQuery);
