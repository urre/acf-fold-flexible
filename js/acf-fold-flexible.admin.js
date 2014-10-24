(function($) {

	'use strict';

	$(function() {

		// Check if ACF Flexible Content fields exists at all
		if ($('.acf-fc-layout-handle').length) {

			// Add expand icons for panels
			$('.acf-fc-layout-handle').prepend('<span class="foldicon foldicon--expand"></span');

			// Add Daschicons depending on ACF Flexible COotent field types
			var labels = $('.acf-fc-layout-handle');

			// Check every panel
			labels.each(function() {

				// Check open/closed state
				if($(this).parent().attr("data-toggle") === 'open') {
					$(this).addClass('open');
				}

				// This very field type group
				var group = $(this);

				// Check which field types that exists
				var fieldtypes = {
					text: $(this).next().next().find('*[data-field_type="text"]').length,
					text_acfpro: $(this).next().next().find('*[data-type="text"]').length,
					textarea: $(this).next().next().find('*[data-field_type="textarea"]').length,
					textarea_acfpro: $(this).next().next().find('*[data-type="textarea"]').length,
					number: $(this).next().next().find('*[data-field_type="number"]').length,
					number_acfpro: $(this).next().next().find('*[data-type="number"]').length,
					wysiwyg: $(this).next().next().find('*[data-field_type="wysiwyg"]').length,
					wysiwyg_acfpro: $(this).next().next().find('*[data-type="wysiwyg"]').length,
					image: $(this).next().next().find('*[data-field_type="image"]').length,
					image_acfpro: $(this).next().next().find('*[data-type="image"]').length,
					file: $(this).next().next().find('*[data-field_type="file"]').length,
					file_acfpro: $(this).next().next().find('*[data-type="file"]').length,
					password: $(this).next().next().find('*[data-field_type="password"]').length,
					password_acfpro: $(this).next().next().find('*[data-type="password"]').length,
					select: $(this).next().next().find('*[data-field_type="select"]').length,
					select_acfpro: $(this).next().next().find('*[data-type="select"]').length,
					checkbox: $(this).next().next().find('*[data-field_type="checkbox"]').length,
					checkbox_acfpro: $(this).next().next().find('*[data-type="checkbox"]').length,
					radio: $(this).next().next().find('*[data-field_type="radio"]').length,
					radio_acfpro: $(this).next().next().find('*[data-type="radio"]').length,
					true_false: $(this).next().next().find('*[data-field_type="true_false"]').length,
					true_false_acfpro: $(this).next().next().find('*[data-type="true_false"]').length,
					page_link: $(this).next().next().find('*[data-field_type="page_link"]').length,
					page_link_acfpro: $(this).next().next().find('*[data-type="page_link"]').length,
					post_object: $(this).next().next().find('*[data-field_type="post_object"]').length,
					post_object_acfpro: $(this).next().next().find('*[data-type="post_object"]').length,
					relationship: $(this).next().next().find('*[data-field_type="relationship"]').length,
					relationship_acfpro: $(this).next().next().find('*[data-type="relationship"]').length,
					taxonomy: $(this).next().next().find('*[data-field_type="taxonomy"]').length,
					taxonomy_acfpro: $(this).next().next().find('*[data-type="taxonomy"]').length,
					user: $(this).next().next().find('*[data-field_type="user"]').length,
					user_acfpro: $(this).next().next().find('*[data-type="user"]').length,
					google_map: $(this).next().next().find('*[data-field_type="google_map"]').length,
					google_map_acfpro: $(this).next().next().find('*[data-type="google_map"]').length,
					calendar: $(this).next().next().find('*[data-field_type="date_picker"]').length,
					calendar_acfpro: $(this).next().next().find('*[data-type="date_picker"]').length,
					color_picker: $(this).next().next().find('*[data-field_type="color_picker"]').length,
					color_picker_acfpro: $(this).next().next().find('*[data-type="color_picker"]').length,
					message: $(this).next().next().find('*[data-field_type="message"]').length,
					message_acfpro: $(this).next().next().find('*[data-type="message"]').length,
					email: $(this).next().next().find('*[data-field_type="email"]').length,
					email_acfpro: $(this).next().next().find('*[data-type="email"]').length,
					url: $(this).next().next().find('*[data-field_type="url"]').length,
					url_acfpro: $(this).next().next().find('*[data-type="url"]').length,
					gallery: $(this).next().next().find('*[data-field_type="gallery"]').length,
					gallery_acfpro: $(this).next().next().find('*[data-type="gallery"]').length
				};

				// Add corresponding icons
				$.each(fieldtypes, function(fieldname, existance) {
					if (existance > 0) {
						var fieldname_clean = fieldname.replace(/_/g, " ").replace(/acfpro/g, " ");
						group.append('<i rel="tooltip" title="' + fieldname_clean + '" class="foldicon foldicon--' + fieldname_clean + '"></i>');
					}
				});

			});

			// Open/Close panels
			$('.acf-fc-layout-handle').on('click', function() {
				var toggle_list = $(this);
				if(toggle_list.parent().attr("data-toggle") === 'open') {
					toggle_list.removeClass('open');
				} else {
					toggle_list.addClass('open');
				}
			});

		}

	});

}(jQuery));