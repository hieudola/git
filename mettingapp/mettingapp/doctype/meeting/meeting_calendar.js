frappe.views.calendar["Meeting"] = {
	field_map: {
		"start": "start",
		"end": "end",
		"id": "name",
		"title": "title",
		"status": "status",
		"allDay": "all_day",
		
	},	
	/*options: {
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month'
		}
	},*/
	get_events_method: "mettingapp.api.get_meetings"
}