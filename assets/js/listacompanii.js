/**
 * Created by STI on 11/22/2014.
 */
/*
 Dropdown with Multiple checkbox select with jQuery - May 27, 2013
 (c) 2013 @ElmahdiMahmoud
 license: http://www.opensource.org/licenses/mit-license.php
 */

$(document).ready( function() {

    $(".dropdown dt a").on('click', function () {
        $(".dropdown dd ul").slideToggle('fast');
        $("#filtruCompanii").toggle();
    });


    $(".dropdown dd ul li a").on('click', function () {
        $(".dropdown dd ul").hide();
        $("#filtruCompanii").hide();
    });

     $(document).on('click', function (e) {
     var $clicked = $(e.target);
     if (!$clicked.parents().hasClass("dropdown")) {
         $(".dropdown dd ul").hide();
         $("#filtruCompanii").hide();
     }
     });

    $('.mutliSelect input[type="checkbox"]').on('click', function () {

        var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
            title = $(this).val() + ",";

        if ($(this).is(':checked')) {
            var html = '<span title="' + title + '">' + title + '</span>';
            $('.multiSel').append(html);
            $(".hida").hide();
        }
        else {
            $('span[title="' + title + '"]').remove();
            var ret = $(".hida");
            $('.dropdown dt a').append(ret);

        }
    });

    createListaCompanii();

    $("#filtruCompanii").on('click', function(){
    if($('#companieslist input:checkbox:checked').length == 0) {
        showtestimonials('', 3);
    } else {
        var companiichecked = $('#companieslist input:checkbox:checked').map(function () {
            return this.value;
        }).get();
        showtestimonials(companiichecked, 3);
    }
        $(".dropdown dd ul").hide();
        $("#filtruCompanii").hide();
    });

});