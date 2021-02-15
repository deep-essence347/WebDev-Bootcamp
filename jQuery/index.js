// Single Value gets the Value
// Double Value sets the Value

// $("h1").css("color","green"); //changes color to green

// console.log($('h1').css("font-size")); //prints font-size 

// $("h1").addClass("big-title margin-50"); //add classes big-title and margin-50

// $('h1').text("Bye"); //changes text to Bye

// $("button").text("Dont Click me"); //changes text of all buttons

// $("button").html("<em>Hey</em>"); //changes HTMl of all buttons

// console.log($('img').attr("src")); //prints the src of img

// $('a').attr("href","https://facebook.com"); //changes the href attribute of a tag to redirect to facebook


// $('h1').click(function(){
//     $('h1').css("color","red");
// }) //changes h1 text color to red when clicked

// $("button").click(function(){
//     $('h1').css("color","purple");
// })

// $("input").keypress(function(event){
//     console.log(event.key);
// }) //prints the pressed key into console

// $(document).keypress(function(event){
//     $("h1").text(event.key);
// }) //changes the text if h1 to pressed key

// $('h1').on("mouseover",function(){
//     $('h1').css("color","red"); 
// }) //changes the color of h1 to red when mouse is over the h1

// $('h1').before("<button>Hello</button>") //adds a button before  ouside of h1 element
// $('h1').after("<button>Hello</button>") //adds a button after h1 ouside of h1 element
// $('h1').prepend("<button>Hello</button>")//adds a button before the text of h1 but within the element h1
// $('h1').append("<button>Hello</button>")//adds a button after the text of h1 but within the element h1

// $('button').remove(); //removes all the button elements available

$("button").click(function(){
    // $('h1').hide(); //hides the element
    // $('h1').toggle(); //toggles the visibility of element
    // $('h1').fadeOut(); //reduces the opacity of the element and then hides it
    // $('h1').fadeIn(); //increases the opacity of the element and then displays it
    // $('h1').fadeToggle(); 
    // $('h1').slideUp();
    // $('h1').slideDown();
    // $('h1').slideToggle();
    // $('h1').animate({opacity:0.5,margin: '2%'}); //add a custom animation
    $('h1').slideUp().slideDown().animate({opacity:0.5}); //first slides up the element, then slides down and then adds the custom animation

})