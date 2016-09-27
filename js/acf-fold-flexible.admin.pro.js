(function($) {

	'use strict';

	var ACFFoldFlexibleContent_pro = {

		init: function() {

	            // Add icons
	            this.addIcons();

	            // Support native collapser
	            this.nativeCollapser();

	            // Toggling of panel groups
	            this.togglePanels();

	       },

	        addIcons: function() {

	        	$('.layout').each(function (index, element) {
	        		$(this).find('.foldicon').remove();
	        	});

	            // Check if ACF Flexible Content fields exists at all
	            if ($('.acf-fc-layout-handle').length) {

	            	// Add expand icons for panels
	            	$('.acf-fc-layout-handle').prepend('<span class="foldicon foldicon--expand"></span');

	            	// Add Daschicons depending on ACF Flexible Content Field types
	            	var labels = $('.acf-flexible-content .values .layout');

	            	// Check every panel
	            	labels.each(function() {

	            		// This very field type group
	            		var group = $(this);
	            		var fields = [];

	            		// Add corresponding icons
	            		$(this).find(".acf-fields .acf-field").each(function (index, element) {

	            			var field = $(this);

	            			var fieldtype = $.grep(this.className.split(" "), function(v, i){
	            				return v.indexOf('acf-field-') === 0;
	            			}).join().replace('acf-field-','');

	            			var fieldtype_pro = fieldtype.substr(0, fieldtype.indexOf(',')).replace('_acfpro', '');

	            			if($.inArray(fieldtype_pro, fields) === -1) {
	            				field.parent().prev().prev('.acf-fc-layout-handle').append('<i rel="tooltip" title="' + fieldtype_pro +'" class="foldicon foldicon--' + fieldtype_pro + '"></i>');
	            			}

	            		});	      

	            	});

	            }

	            },

	       nativeCollapser: function() {

	        	// Toggle handle open/closed on the native collapser on ACF PRO (released in 5.3.1)
	        	$(document).on('click', '.acf-fc-layout-handle', function(e) {

	        		$('.acffoldflexible-tooltip').remove();

	        		if(!$(this).parent().hasClass('-collapsed') ) {
	        			$(this).addClass('open');
	        		} else {
	        			$(this).removeClass('open');
	        		}

	        		e.preventDefault();

	        	});
	        },

	        togglePanels: function() {

	        	// Open/Close panels
	        	$('document').on('click', '.acf-fc-layout-handle', function(event) {
	        		ACFFoldFlexibleContent_pro.addIcons();
	        		e.preventDefault();
	        	});

	        }


	    };

	    $(function() {
	    	ACFFoldFlexibleContent_pro.init();
	    });

        $(document).ajaxComplete(function() {
    		ACFFoldFlexibleContent_pro.addIcons();
        });

        $(window).load(function() {
        	ACFFoldFlexibleContent_pro.addIcons();
        });

	}(jQuery));
