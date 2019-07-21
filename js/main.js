$(window).load(function(){
     $('.preloader').fadeOut('slow');
});


/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSite() {

	"use strict";

	//OUTLINE DIMENSION AND CENTER
	(function() {
	    function centerInit(){

			var sphereContent = $('.sphere'),
				sphereHeight = sphereContent.height(),
				parentHeight = $(window).height(),
				topMargin = (parentHeight - sphereHeight) / 2;

			sphereContent.css({
				"margin-top" : topMargin+"px"
			});

			var heroContent = $('.hero'),
				heroHeight = heroContent.height(),
				heroTopMargin = (parentHeight - heroHeight) / 2;

			heroContent.css({
				"margin-top" : heroTopMargin+"px"
			});

	    }

	    $(document).ready(centerInit);
		$(window).resize(centerInit);
	})();

	// Init effect
	$('#scene').parallax();

};
/* END ------------------------------------------------------- */

/* =Document Ready Trigger
-------------------------------------------------------------- */
$(window).load(function(){

	initializeSite();
	(function() {
		setTimeout(function(){window.scrollTo(0,0);},0);
	})();

});
/* END ------------------------------------------------------- */


$('#countdown').countdown(
	"2019/07/22 18:00:00"
	// "2019/07/04 13:54:30"
)
.on('update.countdown', function(data) {

// console.log(data);
// console.log('D:' + data.strftime('%d') + 'H:' + data.strftime('%H') + 'M:' + data.strftime('%M') + 'S:' + data.strftime('%S'));

	$(this).empty()
		.append("<div>" + data.strftime('%D') + " <span>days</span></div>")
	    .append("<div>" + data.strftime('%H') + " <span>hrs</span></div>")
	    .append("<div>" + data.strftime('%M') + " <span>min</span></div>")
	    .append("<div>" + data.strftime('%S') + " <span>sec</span></div>");

	// var el = $(this.el);
	//   el.empty()
	//     //.append("<div>" + this.leadingZeros(data.years, 4) + "<span>years</span></div>")
	//     .append("<div>" + data.offset.totalDays + " <span>days</span></div>")
	//     .append("<div>" + data.offset.totalHours + " <span>hrs</span></div>")
	//     .append("<div>" + data.offset.totalMinutes + " <span>min</span></div>")
	//     .append("<div>" + data.offset.totalSeconds + " <span>sec</span></div>");
})
.on('finish.countdown', function() {
	// console.log('End!!!');

	$(this).empty()
		.append("<div>" + '0' + " <span>1st</span></div>")
	    .append("<div>" + '4' + " <span>2nd</span></div>")
	    .append("<div>" + '3' + " <span>3rd</span></div>")
	    .append("<div>" + '0' + " <span>4th</span></div>");

	$('#countdown_tips').text('Please use this password to open your box!!');

});
