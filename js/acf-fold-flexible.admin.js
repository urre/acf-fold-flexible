(function($) {

	'use strict';

	$(function() {

		// Check if ACF Flexible Content fields exists at all
		if ($('.acf-fc-layout-handle').length) {

			// Collapse ACF Flexible Content fields at first
			$('.acf-fc-layout-handle').trigger('click');

			// Add expand icons for panels
			$('.acf-fc-layout-handle').prepend('<span class="foldicon foldicon--expand"></span');

			// Add Daschicons depending on ACF Flexible COotent field types
			var labels = $('.acf-fc-layout-handle');

			labels.each(function() {

				// This very field type group
				var group = $(this);

				// Check which field types that exists
				var fieldtypes = {
					wysiwyg: $(this).next().find('*[data-field_type="wysiwyg"]').length,
					image: $(this).next().find('*[data-field_type="image"]').length,
					file: $(this).next().find('*[data-field_type="file"]').length,
					password: $(this).next().find('*[data-field_type="password"]').length,
					text: $(this).next().find('*[data-field_type="text"]').length,
					textarea: $(this).next().find('*[data-field_type="textarea"]').length,
					number: $(this).next().find('*[data-field_type="number"]').length,
					select: $(this).next().find('*[data-field_type="select"]').length,
					checkbox: $(this).next().find('*[data-field_type="checkbox"]').length,
					radio: $(this).next().find('*[data-field_type="radio"]').length,
					true_false: $(this).next().find('*[data-field_type="true_false"]').length,
					page_link: $(this).next().find('*[data-field_type="page_link"]').length,
					post_object: $(this).next().find('*[data-field_type="post_object"]').length,
					relationship: $(this).next().find('*[data-field_type="relationship"]').length,
					taxonomy: $(this).next().find('*[data-field_type="taxonomy"]').length,
					user: $(this).next().find('*[data-field_type="user"]').length,
					google_map: $(this).next().find('*[data-field_type="google_map"]').length,
					calendar: $(this).next().find('*[data-field_type="date_picker"]').length,
					color_picker: $(this).next().find('*[data-field_type="color_picker"]').length,
					message: $(this).next().find('*[data-field_type="message"]').length
				};

				// Add corresponding icons
				$.each(fieldtypes, function(fieldname, existance) {
					if (existance > 0) {
						group.append('<i rel="tooltip" title="' + fieldname + '" class="foldicon foldicon--' + fieldname + '"></i>');
					}
				});

			});

			// Open/Close panels
			$('.acf-fc-layout-handle').on('click', function() {
				$(this).toggleClass('open');
			});

		}

	});
}(jQuery));