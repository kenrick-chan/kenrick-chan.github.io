var bio = {
	"name" : "Kenrick Chan",
	"role" : "Web Developer",
	"contacts" : {
		"email" : "kenrick.chan",
		"github" : "kenrick-chan",
		"twitter" : "@KenrickChan",
		"instagram" : "k__c____"
	},
	"location" : "Brooklyn, NY"
}

var displayBio = function() {
	var formatName = HTMLheaderName.replace('%data%', bio['name']);
	var formatRole = HTMLheaderRole.replace('%data%', bio['role']);
	$("#header").prepend(formatRole);
	$("#header").prepend(formatName);

	var formatEmail = HTMLemail.replace('%data%', bio.contacts['email']);
	var formatGithub = HTMLgithub.replace('%data%', bio.contacts['github']);
	var formatTwitter = HTMLtwitter.replace('%data%', bio.contacts['twitter']);
	var formatInstagram = HTMLinstagram.replace('%data%', bio.contacts['instagram']);
	$("#contacts").append(formatEmail);	
	$("#contacts").append(formatGithub);
	$("#contacts").append(formatTwitter);
	$("#contacts").append(formatInstagram);
}


displayBio();