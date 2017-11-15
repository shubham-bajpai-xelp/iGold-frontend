app.service('getMomentData', function() {
    var pending = [];
    this.get = function(duration) {
        duration = moment.duration(duration - interval, 'milliseconds');
		return duration.hours() + ":" + duration.minutes() + ":" + duration.seconds();
    };
});