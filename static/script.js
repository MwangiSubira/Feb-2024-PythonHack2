$(document).ready(function() {
    $.ajax({
        url: '/api/data/',
        method: 'GET',
        success: function(response) {
            $('#data-container').html(response.message);
        },
        error: function(xhr, errmsg, err) {
            console.log(xhr.status + ": " + xhr.responseText);
        }
    });
});