// $(document).ready(function(){
// // 	$( "div" ).eq( 5 ).children().eq(2)
// // 	.css( "background-color", "yellow" );
	
// // 	$("li").click(function(){
// // 		$('.active').removeClass('active'),
// // 		$(this).addClass('active')
// // 	});
	

// // 	$("input[type=button]").click(function(){
// // 		var a=$("input[type=text]").val()
// // 	   $(".text")
// // 	   .html(a)
// // 	   console.log(Sabina)
// // 	})
// // })
 
//  $(".inputText").keydown(function(){
//  	$(".Mytext").text($(".inputText").val());
//  });
//  });





// Change image with link
function ImageLink() {
	var a = document.getElementsByTagName('input')[0].value;
	var b = document.getElementsByTagName('img')[0].src=a;
   };

// input a text
   function Text(){
    var c = document.getElementsByTagName('input')[1].value;
    var d = document.getElementById('MyText');
    d.innerHTML=c

   };

// Change a random color
   function color(){
   var r = Math.floor(Math.random()*256);
var g = Math.floor(Math.random()*256);
var b = Math.floor(Math.random()*256);
var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
   	document.getElementById('MyText').style.backgroundColor=rgb;
   }
   	
  
   
