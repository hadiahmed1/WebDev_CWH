// 3 Types of Selector:
// 1. Element Selector
// 2. ID Selector
// 3. Class Selector
// $(document).ready(()=>{
//     //1
//     console.log($);
//     $('p').click(function (){
//         console.log('clicked');
//         $('p').css('color','red');
//         $(this).hide();
//         $(this).hide();
//     })
//         //2
//     $('#id').click(()=>{
//         $('#id').css('color','cyan');
//     });
//     $('p.odd').click(()=>{
//         $('p.odd').css('color','green');
//         $(this).css('color','pink');
//     });
// });
//Events in jQuery
//1 Mouse-> click,double click,mouse enter,mouseleave
//2 Keyboard->keypress, keydown, keyup
//3 Form-> subit, change, focus, blur
//4 Window-> load, resize, scroll, unload 
$(document).ready(()=>{
    // $('p').dblclick(()=>{
    //     console.log("p was double clicked");
    // });

    // $('#id').hover(()=>{
    //     console.log("mouse enter");
    // },
    // ()=>{
    //     console.log("Byee");
    // });

    $('p.second').on(
        {"click": function(){
            console.log("p was clicked");
        }}
    )
    $('#hide').click(function(){
        $('#lorem').hide(1500);
    });
    $('#show').click(function(){
        $('#lorem').show();
    })
    $('#slide').click(function(){
        $('#lorem').slideToggle();
    });
    $('#animate').click(function(){
        $('#lorem').animate({
            opacity:0.7,
            height:'150px',
            width:'350px'
        },2000)
    });
});