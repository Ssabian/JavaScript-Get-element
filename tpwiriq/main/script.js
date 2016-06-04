$(document).ready(function(){
var a=-1;
	function interval(){
		if (a==-1) {
        $(".test").animate({marginTop:"300px"})
        .css({width:"250px" , zIndex:4})
     $(".test1").animate({marginTop:"260px"})
		.css({width: "240px" , zIndex:3})
		$(".test2").animate({marginTop:"230px"})
		.css({width: "230px" , zIndex:2})
		$(".test3").animate({marginTop:"200px"})
		.css({width: "220px" , zIndex:1})
		$(".test4").animate({marginTop:"340px"})
		// $(".test4").slideToggle("fast")
		.css({width: "240px" , zIndex:3})
		$(".test5").animate({marginTop:"370px"})
		.css({width: "230px" , zIndex:2})
		$(".test6").animate({marginTop:"400px"})
		.css({width: "220px" , zIndex:1})
          a++;
	}else if(a==0){
		$(".test").animate({marginTop:"260px"})
		.css({width:"240px" , zIndex:3})
		$(".test1").animate({marginTop:"230px"})
		.css({width: "230px" , zIndex:2})
		$(".test2").animate({marginTop:"200px"})
		.css({width: "220px" , zIndex:1})
		$(".test3").animate({marginTop:"340px"})
		// $(".test3").slideToggle("fast")
		.css({width: "240px" , zIndex:3})
		$(".test4").animate({marginTop:"370px"})
		.css({width: "230px" , zIndex:2})
		$(".test5").animate({marginTop:"200px"})
		.css({width: "220px" , zIndex:1})
		$(".test6").animate({marginTop:"300px"})
        .css({width:"250px" ,zIndex:4})
		 a++
	// }else if(a==1){
	// 	$(".test").animate({marginTop:"50px"})
	// 	.css({width:"230px"})
	// 	$(".test1").animate({marginTop:"0px"})
	// 	.css({width: "210px"})
	// 	$(".test2").animate({marginTop:"300px"})
	// 	// $(".test2").slideToggle("fast")
	// 	.css({width: "210px"})
	// 	$(".test3").animate({marginTop:"250px"})
	// 	.css({width: "230px"})
	// 	$(".test4").animate({marginTop:"200px"})
	// 	.css({width: "250px"})
	// 	$(".test5").animate({marginTop:"150px"})
 //   .css({width:"270px"})
 //    $(".test6").animate({marginTop:"100px"})
	// 	.css({width:"250px"})
	// 	 a++;
	// }else if(a==2){
	// 	$(".test").animate({marginTop:"0px"})
	// 	.css({width: "210px"})
	// 	$(".test1").animate({marginTop:"300px"})
	// 	// $(".test1").slideToggle("fast")
	// 	.css({width: "210px"})
	// 	$(".test2").animate({marginTop:"250px"})
	// 	.css({width: "230px"})
	// 	$(".test3").animate({marginTop:"200px"})
	// 	.css({width: "250px"})
	// 	$(".test4").animate({marginTop:"150px"})
 //    .css({width:"270px"})
 //    $(".test5").animate({marginTop:"100px"})
	// 	.css({width:"250px"})
	// 	$(".test6").animate({marginTop:"50px"})
	// 	.css({width:"230px"})
	// 	a++
	// }else if(a==3){
	// 	$(".test").animate({marginTop:"300px"})
	// 	// $(".test").slideToggle("fast")
	// 	.css({width:"210px"})
	// 	$(".test1").animate({marginTop:"250px"})
	// 	.css({width: "230px"})
	// 	$(".test2").animate({marginTop:"200px"})
	// 	.css({width: "250px"})
	// 	$(".test3").animate({marginTop:"150px"})
 //    .css({width:"270px"})
 //    $(".test4").animate({marginTop:"100px"})
	// 	.css({width:"250px"})
	// 	$(".test5").animate({marginTop:"50px"})
	// 	.css({width:"230px"})
	// 	$(".test6").animate({marginTop:"0px"})
	// 	.css({width: "210px"})
	// 	a++;
	// }else if(a==4){
	// 	$(".test").animate({marginTop:"250px"})
	// 	.css({width:"230px"})
	// 	$(".test1").animate({marginTop:"200px"})
	// 	.css({width: "250px"})
	// 	$(".test2").animate({marginTop:"150px"})
	// 	.css({width: "270px"})
	// 	$(".test3").animate({marginTop:"100px"})
	// 	.css({width:"250px"})
	// 	$(".test4").animate({marginTop:"50px"})
	// 	.css({width:"230px"})
	// 	$(".test5").animate({marginTop:"0px"})
	// 	.css({width: "210px"})
	// 	$(".test6").animate({marginTop:"300px"})
	// 	// $(".test6").slideToggle("fast")
	// 	.css({width:"210px"})
	// 	a++
	// }else{
	// 	$(".test").animate({marginTop:"200px"})
	// 	.css({width:"250px"})
	// 	$(".test1").animate({marginTop:"150px"})
	// 	.css({width: "270px"})
	// 	$(".test2").animate({marginTop:"100px"})
	// 	.css({width: "250px"})
	// 	$(".test3").animate({marginTop:"50px"})
	// 	.css({width:"230px"})
	// 	$(".test4").animate({marginTop:"0px"})
	// 	.css({width: "210px"})
	// 	$(".test5").animate({marginTop:"300px"})
	// 	// $(".test5").slideToggle("fast")
	// 	.css({width:"210px"})
	// 	$(".test6").animate({marginTop:"250px"})
	// 	.css({width:"230px"})
	// 	a=-1
	}
}

	setInterval(interval,2000);
	
		
	});
// // $(document).ready(function () {
// //     var i=0;
// //     var countLi=$("li").children().length;
// //    $("#myBottomBtn").click(function() {
// //      i++;
// //     for (var z = 0; z <countLi ; z++) {
// //     $("li").eq(z).removeClass().addClass("none");
// //     }

// //      $("li").eq(i).removeClass().addClass("page1");
// //      $("li").eq(i+1).removeClass().addClass("page2");
// //      $("li").eq(i+2).removeClass().addClass("active");
// //      $("li").eq(i+3).removeClass().addClass("page4");
// //      $("li").eq(i+4).removeClass().addClass("page5")

// //      if (i+4==countLi) {
// //        $("li").eq(0).removeClass().addClass("page5")
// //      }
// //      else if(i+4==countLi+1)
// //           {
// //             $("li").eq(0).removeClass().addClass("page4")
// //             $("li").eq(1).removeClass().addClass("page5")
// //           }
// //         else if(i+4==countLi+2)
// //           {
// //         $("li").eq(0).removeClass().addClass("active")
// //         $("li").eq(1).removeClass().addClass("page4")
// //         $("li").eq(2).removeClass().addClass("page5")
// //           }
// //         else if(i+4==countLi+3)
// //           {
//         $("li").eq(0).removeClass().addClass("page2")
//         $("li").eq(1).removeClass().addClass("active")
//         $("li").eq(2).removeClass().addClass("page4")
//         $("li").eq(3).removeClass().addClass("page5")
//          }
//         else if(i+4==countLi+4)
//          {
//         $("li").eq(0).removeClass().addClass("page1")
//         $("li").eq(1).removeClass().addClass("page2")
//         $("li").eq(2).removeClass().addClass("active")
//         $("li").eq(3).removeClass().addClass("page4")
//         $("li").eq(3).removeClass().addClass("page5")
//          }

//         if(i==countLi)
//         {i=-countLi;}

//    })

//    $("#myTopBtn").click(function() {
//   i--;
//   console.log(i);
//     for (var z = 0; z <countLi ; z++) {
//     $("li").eq(z).removeClass().addClass("none");
//     }

//      $("li").eq(i).removeClass().addClass("page1");
//      $("li").eq(i+1).removeClass().addClass("page2");
//      $("li").eq(i+2).removeClass().addClass("active");
//      $("li").eq(i+3).removeClass().addClass("page4");
//      $("li").eq(i+4).removeClass().addClass("page5")

//      if (i+4==countLi) {
//        $("li").eq(0).removeClass().addClass("page5")
//      }
//      else if(i+4==countLi+1)
//           {
//             $("li").eq(0).removeClass().addClass("page4")
//             $("li").eq(1).removeClass().addClass("page5")
//           }
//         else if(i+4==countLi+2)
//           {
//         $("li").eq(0).removeClass().addClass("active")
//         $("li").eq(1).removeClass().addClass("page4")
//         $("li").eq(2).removeClass().addClass("page5")
//           }
//         else if(i+4==countLi+3)
//           {
//         $("li").eq(0).removeClass().addClass("page2")
//         $("li").eq(1).removeClass().addClass("active")
//         $("li").eq(2).removeClass().addClass("page4")
//         $("li").eq(3).removeClass().addClass("page5")
//          }
//         else if(i+4==countLi+4)
//          {
//         $("li").eq(0).removeClass().addClass("page1")
//         $("li").eq(1).removeClass().addClass("page2")
//         $("li").eq(2).removeClass().addClass("active")
//         $("li").eq(3).removeClass().addClass("page4")
//         $("li").eq(3).removeClass().addClass("page5")
//          }

//         if(i==-countLi)
//         {i=countLi;}

//    })

//   })