
'use strict';

function w(msg) {
    console.log(msg);
}

function _alert(msg) {
    w(msg);
}


// ====================================

$(document).ready(function () {
    
    console.log("La version de JQuery est la " + $.fn.jquery);
    
    
    // ====================================
    
    // ====================================
    
    var path = "C:\\Users\\Philippe\\Documents\\Node2015\\VisualStudio\\api-ai\\api-ai\\public\\javascripts\\script.js";
    w("__Start ... ________\n"+path);
    
    //============================================================================
    
    
    
    
    // btn 1
    $('#btn-1').on("click", function () {
        w("__btn-1________");



    });
    
    // btn 2
    $('#btn-2').on("click", function () {
        w("__btn-2________");

    });
    
    // btn 3
    $('#btn-3').on("click", function () {
        w("__btn-3________");

    });


});

/*
*/