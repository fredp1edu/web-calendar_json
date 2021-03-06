
"use strict";

var processFile = "assets/inc/ajax.inc.php";

var displayEvent = function(ev) {
    var disp = '<h2>' +ev.title+ '</h2>' +
                '\n\t<p class=\"para date\">' +ev.date+ ' &mdash; ' +ev.start+ ' &mdash; ' +ev.end+ '</p>' +
                '\n\t<p class=\"para loc\">' +ev.loc+ '</p>' +
                '\n\t<p class=\"para desc\">' +ev.desc+ '</p>' +
                '\n\t<p class=\"para date\">Reminder: ' +ev.rem+ '</p>';
    disp += '<div class="admin-options">\n<form action="admin.php" method="POST">' +
        '<p><input type="submit" name="edit_event" value="Edit This Event" /><input type="hidden" name="event_id" value="' +
            ev.id+ '" /><p> </form>' +
        '<form action="confirmdelete.php" method="POST"><p><input type="submit" name="delete_event" value="Delete This Event" />' +
        '<input type="hidden" name="event_id" value="' +ev.id+ '" /></p></form></div>';
    return disp;
};
var fx = {
	initModal :  function() {
		if ($('.modal-window').length == 0) {
			return $('<div>')
					.hide()
					.addClass("modal-window")
					.appendTo("body");
		}
		else {
			return $(".modal-window");
		}
	},
	boxIn : function(data, modal) {
		$("<div>").hide().addClass("modal-overlay").click(function(event) {
			fx.boxOut(event);
		}).appendTo("body");
		modal.hide().append(data).appendTo("body");
		$(".modal-window, .modal-overlay").fadeIn("fast");
	},
	boxOut : function(event) {
		if (event != undefined) 
			event.preventDefault();
		$('a').removeClass("active");
		$(".modal-window, .modal-overlay").fadeOut('slow', function() {
			$(this).remove();
		});
	}  
};
$('document').ready(function() {
	
    $('li>a').click(function(event) {
    	event.preventDefault();
    	$(this).addClass("active");
    	var data = $(this)
    					.attr('href')
    					.replace(/.+?\?(.*)$/, "$1");
    	var modal = fx.initModal();

    	$("<a>") 
    		.attr("href", "#")
    		.addClass("modal-close-btn")
    		.html("&times;")
    		.click(function(event) {
    			fx.boxOut(event);
    		})
    		.appendTo(modal);

    	$.ajax({
    		type: "POST",
    		url: processFile,
    		data: "action=event_view&" + data,
    		success: function(data) {
                var eventInfo = JSON.parse(data);
                var eventFormat = displayEvent(eventInfo);
    			fx.boxIn(eventFormat, modal);
    		},
    		error: function(msg) {
    			modal.append(msg);
    		}
    	});
    });
    $('body').on('click', '.edit-form a:contains(cancel)', function(event) {
    	fx.boxOut(event);
    });
});