(function($) {

	'use strict';

	var ACFFoldFlexibleContent = {

	        init: function() {

	            // Add icons
	            this.addIcons();

	            // Support native collapser
	            this.nativeCollapser();

	            // Toggling of panel groups
	            this.togglePanels();

	        },

	        addIcons: function() {

	            // Check if ACF Flexible Content fields exists at all
	            if ($('.acf-fc-layout-handle').length) {

	            	// Add expand icons for panels
	            	$('.acf-fc-layout-handle').prepend('<span class="foldicon foldicon--expand"></span');

	            	// Add Daschicons depending on ACF Flexible Content Field types
	            	var labels = $('.acf-fc-layout-handle');

	            	// Check every panel
	            	labels.each(function() {

	            		$(this).removeClass('open');
	            		$(this).parent().attr('data-toggle', 'closed');
	            		$(this).nextAll('.row_layout').first().hide();
	            		
	            		// This very field type group
	            		var group = $(this);
	            		var fields = [];

	            		// Add corresponding icons
	            		$.each( $("table.widefat.acf_input tr"), function() {				

	            			var fieldtype = $.grep(this.className.split(" "), function(v, i){
	            				return v.indexOf('field_type-') === 0;
	            			}).join().replace('field_type-','');

	            			if($.inArray(fieldtype, fields) === -1) {
	            				fields.push(fieldtype);
	            				group.append('<i rel="tooltip" title="' + fieldtype + '" class="foldicon foldicon--' + fieldtype + '"></i>');
	            			}

	            		});     

	            	});

	            }

	        },

	        nativeCollapser: function() {

	        	// Toggle handle open/closed on the native collapser on ACF PRO (released in 5.3.1)
	        	$(document).on('click', '*[data-event="collapse-layout"]', function(e) {

	        		var nativeCollapser = $(this);

	        		if(!nativeCollapser.parent().parent().parent().hasClass('-collapsed') ) {
	        			nativeCollapser.parent().parent().parent().find('.acf-fc-layout-handle').addClass('open');
	        		} else {
	        			nativeCollapser.parent().parent().parent().find('.acf-fc-layout-handle').removeClass('open');
	        		}

	        		e.preventDefault();

	        	});
	        },

	        togglePanels: function() {

	        	// Open/Close panels
	        	$(document).on('click', '.acf-fc-layout-handle', function() {

	        		var toggle_list = $(this);

	        		// Toggle open class
	        		if($(this).next('.row_layout').css("display") == "none") {
	        			toggle_list.removeClass('open');
	        		} else {
	        			toggle_list.addClass('open');
	        		}
	        		
	        	});

	        }


	    };

	$(function() {

		ACFFoldFlexibleContent.init();

	});

}(jQuery));
