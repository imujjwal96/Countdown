$(document).ready(function(){
	$('#countdown').countdown({date: '01 January 2015 00:00:00'}, function(){
		$('#countdown').text('Happy New Year');
	});
//this will call the countdown function
});