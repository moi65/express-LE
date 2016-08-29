function w(msg) {
    console.log(msg);
}

function _alert(msg) {
    w(msg);
}

 

$(document).ready(function () {
    'uses strict ';
    
    
    console.log("Version: %s", $.fn.jquery);
    
    $(window).load(function () {
     
        $.mCustomScrollbar.defaults.scrollButtons.enable = true;  //enable scrolling buttons by default
        
        $(".content-rdsd").mCustomScrollbar(
            {            theme: "rounded-dots",  
                                        callbacks:{
                                            onScroll:function(){
                                                myCustomFn(this);
                                            } ,  
                                            onScrollStart:function(){
                                                myCustomFn2(this)
                                            },
                                            scrollButtons:function(){
                                                enable:true
                                            }           
                                        }
            }
        )
                          

        $("#nina-beam").hide();

    });

        function myCustomFn(el){
            //console.log("top:",el.mcs.top);
        }
    
        function myCustomFn2(el){
           // console.log("Fn2:",el.mcs.topPct);
        }


          //popin-invoke
        $("#popin-invoke").on("click", function (event) {

            $("#nina-beam").slideToggle({      direction: "up"    }, 00);

            $("#popin-invoke").slideToggle({      direction: "down"    }, 300);
            
            //$("ul li").show(); 
            //   $("#btn-4").click();
            
            /* better set a timeout for scrollTo method as sometimes dialog open event acts weird */
			setTimeout(function(){
				$('.content-rdsd').mCustomScrollbar("scrollTo",'bottom');
			}, 60);

        });

        $(":input").css("background-color", "#000");
        $("ul li").hide();

        jQuery('#input').on("keyup", function () {
            // get the value from text field
            var input = jQuery(this).val();
            // by default every list element will be shown
           // jQuery("ul li").show();

        });


        // highlight input fields on blur - This is what stops it working
        $('#user_input').on('focusout', function () {
           
            var val = $('#user_input').val();
            $("#log").append("<p>user_input focusout"+ val  +"</p>");

            $('.content-rdsd').mCustomScrollbar("scrollTo",'bottom');
        })

        /* ========================================= */


       $(".nw_minimize").on("click", function (event) {

            $("#popin-invoke").slideToggle({      direction: "up"    }, 300);

            $('#nina-beam').slideToggle('slow');
        });

        /* ========================================= */

        $("#btn-2").on("click", function (event) {
             $('.content-rdsd').mCustomScrollbar("scrollTo",'bottom');
        });

        $("#btn-4").on("click", function (event) {
            w("%%%%% 4 %%%%%%%");
            
            var val = $('#user_input').val();
            $("#log").append("<p>btn-4"+ val  +"</p>");

            $('.content-rdsd').mCustomScrollbar("scrollTo",'bottom');
         
        });

}); // end $

/*

onclick="Nina.AgentLoader.loadAgent('nina-popin'); return false;"

*/