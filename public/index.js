$(function(){
//
// Submit de form
//
    $('#app-body').find('form').submit(function onSubmit(ev) {
        ev.preventDefault();
        var busqueda = $(this).find('input[type="text"]').val();
        alert('La busqueda suya es ' + busqueda + '?');
    })

    var template = '<article class="tv-show">'+
        '<div class="left img-container">'+
            '<img src=":img:" alt=":img-alt:">'+
        '</div>'+
        '<div class="right info">'+
            '<h1>:name:</h1>'+
            '<p>:sumary:</p>'+
        '</div>'+
    '</article>';


    $.ajax({
        url: 'http://api.tvmaze.com/shows',
        success: function(shows, textStatus, xhr){
            var $contain = $('#app-body').find('.tv-shows')

            shows.forEach(function (show) {
                var article = template
                .replace(':name:', show.name)
                .replace(':img:', show.image.medium)
                .replace(':sumary:', show.summary)
                .replace(':img-alt:', show.name + " Logo")

                $contain.append($(article))
            })
        }
    })
})
