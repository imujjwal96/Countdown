(function($){
	$.fn.countdown = function(options, callback){
		
		var settings = {'date': null };
		if (options)
		{
			$.extend(settings, options);
		}
		
		this_sel = $(this);
		
		function CountExecution(){
			eventDate = Date.parse(settings['date']) / 1000;
			currentDate = Math.floor($.now() / 1000);
			
			if(eventDate <= currentDate)
			{
				callback.call(this);
				clearInterval(interval);
			}
			
			seconds = eventDate - currentDate;
			days = Math.floor(seconds/(60*60*24));
			hours =	Math.floor(seconds/(60*60)) - (days*(24));
			minutes = Math.floor(seconds/60) - (days*(24*60) + (hours*60));
			sec = Math.floor(seconds) - (days*(24*60*60) + (hours*60*60) + (minutes*60));

			if(String(days).length<=2)
			{
				days = '0' + days;
			}
			else
			{
				days = days;
			}
			if(String(hours).length!==2)
			{
				hours = '0' + hours;
			}
			else
			{
				hours = hours;
			}
			if(String(minutes).length!==2)
			{
				minutes = '0' + minutes;
			}
			else
			{
				minutes = minutes;
			}
			if(String(sec).length!==2)
			{
				sec = '0' + sec;
			}
			else
			{
				sec = sec;
			}
						
			this_sel.find('.days').text(days);		
			this_sel.find('.hours').text(hours);		
			this_sel.find('.mins').text(minutes);		
			this_sel.find('.secs').text(sec);		
		}
		
		CountExecution();
		interval = setInterval(CountExecution, 1000);
	}

})(jQuery);