$(document).ready(function() {
	$('.accordion_box:first').addClass('active');
	$('.accordion_box:first').children('.acc_title').children('.fa').addClass('fa-minus');
	$('.accordion_box:first').children('.acc_title').addClass('selected').next('.acc_content').show();

	$(".acc_title").click(function(){
		if($(this).hasClass("selected")) {
			$(this).removeClass("selected");
			$(this).children(".fa").removeClass("fa-minus");
			$(this).next().slideUp();
			$(this).parent().removeClass('active');
		} else {
			$(".acc_title").removeClass("selected");
			$(this).addClass("selected");
			$(".acc_title").children(".fa").removeClass("fa-minus");
			$(this).children(".fa").addClass("fa-minus");
			$(".acc_title").next().slideUp();
			$(this).next().slideDown();
			$(".acc_title").parent().removeClass("active");
			$(this).parent().addClass("active");
		}
	});
});

