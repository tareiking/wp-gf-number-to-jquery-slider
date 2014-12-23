jQuery(document).ready(function($) {
	//alert('Johny Five is alive!');
    var $ = jQuery;

    // New method of the built-in Number Javascript type
    // This method converts the money amount to a desired string with custom separators
    Number.prototype.formatMoney = function(decPlaces, thouSeparator, decSeparator) {
        var n = this;
        var decPlaces = isNaN( decPlaces = Math.abs( decPlaces ) ) ? 2 : decPlaces;
        var decSeparator = decSeparator == undefined ? '.' : decSeparator;
        var thouSeparator = thouSeparator == undefined ? ',' : thouSeparator;
        var sign = n < 0 ? '-' : '';
        var i = parseInt( n = Math.abs( +n || 0 ).toFixed( decPlaces ) ) + '';
        var j = ( j = i.length ) > 3 ? j % 3 : 0;

        return sign + (j ? i.substr(0, j) + thouSeparator : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thouSeparator) + (decPlaces ? decSeparator + Math.abs(n - i).toFixed(decPlaces).slice(2) : '');
    };

    $(".sz-slider").each(function () {
        var parent = $(this);
        var default_val = parseInt( $(parent).find('input').val() );
        var _min = parseInt( $(this).find('.instruction strong:first-child' ).text() );
        var _max = parseInt( $(this).find('.instruction strong + strong').text() );
        var handle_text = '<span>Drag to select amount</span>';
        var input_text = '<div class="form-result"><p>$<span>67,500</span></p></div><!-- /.form-result -->';
        var range_info = '<ul class="cf"><li>$' + _min.formatMoney(0, ',', ',') +'</li><li>$' + _max.formatMoney(0, ',', ',') + '</li></ul>';

        $("<div class=" + "ui-slider" + "></div>").slider({

            range: "min",
            min: _min,
            max: _max,
            value: default_val,
            step: 1000,

            slide: function (event, ui) {
                parent.filter("[value=" + ui.value + "]").click();
                var value = $(".ui-slider").slider('value');
                $(parent).find('.form-result p').html( '$'+ ui.value.formatMoney(0, ',', ','));
                $(parent).find('input').val( ui.value );

            },
            create: function (event, ui) {
                $(this).find('.ui-slider-handle').html(handle_text);
                $(parent).find('.form-result p').html( '$'+ default_val.formatMoney(0, ',', ','));
            }

        }).appendTo(this);

        $(this).find( '.ui-slider' ).before( input_text );
        $(this).find( '.ui-slider' ).before( range_info );


    });

    $(this).find('.instruction').hide();
    $(this).find('.sz-slider input').hide();

    $('.ui-slider').draggable();
});