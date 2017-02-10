var pauseHandler = function(e) {              
            var player = this;              
            var artifactId = $(this).attr('data-artifactId');              
            var ranges = this.played;              
            var json = {duration: this.duration, resumeTime: /*Math.floor(this.currentTime)*/Math.floor(this.duration), ranges: [], artifactType: 'video', eventType: 'watchedvideo', eventId: $(player).attr('data-event-id')};              
            console.log(json);
            console.log('ranges.length = ' + ranges.length);
            for (var i = 0; ranges.length > i; i++) {                
                var rangeStart = Math.floor(ranges.start(i));                
                var rangeEnd = Math.floor(ranges.end(i)); 
                console.log(rangeStart);
                console.log(rangeEnd);          
                if (rangeStart != rangeEnd) {                  
                    json.ranges.push({start: Math.floor(ranges.start(i)), end: Math.floor(this.duration)});                
                }              
            }
            if (json.ranges.length > 0) {                
                var ajaxSettings = {type: 'POST', url: '/api/v1/users/' + $('#userid').val() + '/artifact/' + artifactId, data: JSON.stringify(json), contentType: 'application/json', dataType: 'json'};                
                if (!$(player).attr('data-event-id')) {
                    ajaxSettings.success = function(data) {
                                               $(player).attr('data-event-id', data.eventId); 
                                               console.log('Event created: ' + data.eventId);
                                           };
                } 
                else {
                    ajaxSettings.success = function(data) { 
                                               console.log('Event updated: ' + data.eventId);
                                           };
                }
                $.ajax(ajaxSettings);
            }
        };
video = document.getElementById('agileAcademyVideo');
video.onpause = video.onended = pauseHandler;
video.play();
video.play();
function next_one(){
	btn_list = document.getElementsByClassName('btn-tracking');
    	play_btn = [];
    	j = 0;
    	for(i=0;i<btn_list.length;i++) {
       	    print(btn_list[i].innerText);
            if (btn_list[i].innerText == 'play') 
                play_btn[j++] = btn_list[i];
        }
        if(play_btn.length < 2)
             alert('This course is done.');
        else play_btn[1].click();
}
setTimeout("video.pause();setTimeout('next_one()',500);", 1000);