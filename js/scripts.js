$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});




// function myFunction() {
//     var inpObj = document.getElementById("name");
//     var inpObj2 = document.getElementById("id2");
//     if (!inpObj.setCustomValidity("This field cannot be blank")) {
//         document.getElementById("error1").innerHTML = inpObj.validationMessage;
//         // document.getElementById("error1").classList.add("active")
//     }
// }
