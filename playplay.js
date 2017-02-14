video = document.getElementById('agileAcademyVideo');
var json = {
    duration: video.duration, 
    resumeTime: Math.floor(video.duration), 
    ranges: [], 
    artifactType: 'video', 
    eventType: 'watchedvideo', 
    eventId: $(video).attr('data-event-id')
};
json.ranges.push({
    start: Math.floor(0), 
    end: Math.floor(video.duration)
});
var artifactId = $(video).attr('data-artifactid');
var ajaxSettings = {
    type: 'POST', url: '/api/v1/users/' + $('#userid').val() + '/artifact/' + artifactId, 
    data: JSON.stringify(json), 
    contentType: 'application/json', 
    dataType: 'json'
};
ajaxSettings.success = function(data) {
    console.log('Event updated: ' + data.eventId);
    alert('Package have been sent sucessful');
};
$.ajax(ajaxSettings);
