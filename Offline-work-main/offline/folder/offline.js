jQuery(document).ready(function($) {

	$("#mainform").submit(lib.Save);
});

var lib = lib || {};

lib.Net = function() {

	var online = true;

	function Online() { return navigator.onLine; }
	
	function ChangeStatus() {
		if (online != Online()) {
			online = Online();
			var s = $("#status");
			s.text(online ? "Online" : "Offline");
			if (online) s.removeClass("offline");
			else s.addClass("offline");
		}
	}
	
	return {
		Online: Online,
		ChangeStatus: ChangeStatus
	};

}();

//online or offline
lib.Save = function(e) {

	e.preventDefault();
	
	if (lib.Net.Online()) {
	
		//online
		window.location = 'https://youtube.com'
		
	}
	else {
		//offline
		alert("No internet, you can't go sorry");
	}
};