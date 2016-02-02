$('a img').click(function () {
    var $img = $(this);
    $('#divLargerImage').html($img.clone().height(250).width(250)).add($('#divOverlay')).fadeIn();
});

$('#divLargerImage').add($('#divOverlay')).click(function () {
    $('#divLargerImage').add($('#divOverlay')).fadeOut(function () {
        $('#divLargerImage').empty();
    });
});