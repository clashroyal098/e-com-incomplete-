import $ from 'jquery';

$(document).ready(function(){
    $("#dropdownId").click(function(){
        $(".dropdown-menu").addClass("active");
    });

    $("#dropdown-close").click(function(){
        $(".dropdown-menu").removeClass("active");
    });
});