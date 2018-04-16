// Copyright (c) 2018, frappe and contributors
// For license information, please see license.txt


frappe.ui.form.on('Meeting', {
	send_emails: function(frm){
		if(frm.doc.status==="Planned"){		
			frappe.call({
					method:"mettingapp.api.send_invitation_emails",
					args: {
						meeting: frm.doc.name

					},
					callback: function(r){
					alert(r.message);
					}
			});

		}
	},

});	

frappe.ui.form.on('Metting Attendee', {
	attendee: function(frm, cdt, cdn) {
	
		var  attendee = frappe.model.get_doc(cdt, cdn);
		if(attendee.attendee){
			frappe.call({
				method:"mettingapp.mettingapp.doctype.meeting.meeting.get_full_name",
				args:{
					attendee: attendee.attendee
				}, 
				callback: function(r){
					frappe.model.set_value(cdt, cdn, "full_name", r.message);

				}
			});

		}else{
			frappe.model.set_value(cdt, cdn, "full_name", null);
		}

	},

	
});

