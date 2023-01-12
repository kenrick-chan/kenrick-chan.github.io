var bio = {
	"name" : "Kenrick Chan",
	"role" : "Junior Web Developer",
	"contacts" : {
		//"mobile" : "1-646-642-8266",
		//"email" : "kenrick.chan@outlook.com",
		"github" : "kenrick-chan",
		"twitter" : "@KenrickChan",
		"url" : "k__c____",
		//"location" : "Brooklyn, NY"
	},

	"welcomeMessage" : "Traversing through life one step at a time.",
	"skills" : ["python", "ruby", "javascript", "quality assurance"],
	"languages" : ["python", "ruby", "html5", "css"],
	"biopic" : "images/biopic.jpg"
};

var education = {
	"schools" : [
	{
		"name" : "CUNY Hunter College",
		"location" : "New York, NY",
		"degree" : "In Progress - Bachelors of Science in Computer Science",
		"majors" : ["Computer Science"], 
		"dates" : "January 2017 - Present", //Asks for Integer
		"url" : "string"
	},
	{
		"name" : "CUNY Baruch College",
		"location" : "New York, NY",
		"degree" : "Bachelors of Business Arts in Computer Information System",
		"majors" : ["Computer Information System"],
		"dates" : "January 2010 - December 2013", //Asks for Integer
		"url" : "string"
		
	}
	]
};

var work = {
	"jobs" : [
	{
		"employer" : "Akkadian Labs",
		"title" : "Quality Assurance Engineer",
		"url" : "https://www.akkadianlabs.com",
		"location" : "New York, NY",
		"date" : "December 2013 - Present",
		"description" : ["- Inherit ownership of Selenium WebDriver automation scripts written in Python", 
		"- Experienced in creating/executing all aspects of testing including: Smoke Tests, Test Plans, Test Cases, End-To-End Testing, Functional Testing, and Negative Testing",
		"- Strong experience in SDLC and AGILE methodology",
		"- Work closely with developers to resolve bugs and defects",
		"- Assist Customer Support team with troubleshooting issues encountered by end users",
		"- Manage team’s internal sandbox test environments"
		]	
	},
	{
		"employer" : "NYC Human Resource Administration",
		"title" : "Help Desk Support Specialist",
		"url" : "https://www1.nyc.gov/site/hra/index.page",
		"location" : "New York, NY",
		"date" : "September 2008 - September 2011",
		"description" : ["- Created and assigned support tickets to internal technicians to provide support to end user reporting the issue",
		"- Maintained and managed internally developed web application",
		"- Performed on-site computer services to newly deployed computers"
		]
	}
	]
};

var project = {
	"projects" : [
		{
			"title":"Javascript Resume",
			"date":"January 15, 2017",
			"description":"Website of my resume",
			"images":["images/abc.jpg"]
		},
		/*{
			"title":"Javascript Resume 2",
			"date":"April 18, 2017",
			"description":"Project end",	
			"images":["images/abc.jpg"]
		}*/
	]
};




bio.displayBio = function() {
	// Name - Role
	var formattedName = HTMLheaderName.replace("%data%", bio['name']);
	var formattedRole = HTMLheaderRole.replace("%data%", bio['role']);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	
	// General Contact
	//var formattedMobile = HTMLmobile.replace("%data%", bio.contacts['mobile']);
	//var formattedEmail = HTMLemail.replace("%data%", bio.contacts['email']);
	var formattedGithub = HTMLtwitter.replace("%data%", bio.contacts['twitter']);
	var formattedTwitter = HTMLgithub.replace("%data%", bio.contacts['github']);
	var formattedBlog = HTMLblog.replace("%data%", bio.contacts['url']);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts['location']);
	//$("#topContacts").append(formattedMobile);
	//$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedBlog);
	//$("#topContacts").append(formattedLocation);

	//Biopic and Welcome
	var formattedBioPic = HTMLbioPic.replace("%data%", bio['biopic']);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio['welcomeMessage']);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMessage);

	// Skill Display
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (c in bio.skills) {
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[c]);
			$("#skills").append(formattedSkills);
		}
	}

		// Skill Display
	if (bio.languages.length > 0) {
		$("#header").append(HTMLlanguagesStart);
		for (c in bio.languages) {
			var formattedLanguages = HTMLlanguages.replace("%data%", bio.languages[c]);
			$("#languages").append(formattedLanguages);
		}
	}	
}

var displayWork = function() { 
	for (var i=0; i<work.jobs.length; i++) {
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedWorkEmployer = formattedWorkEmployer.replace("#", work.jobs[i].url);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);

		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[i].date);
		$(".work-entry:last").append(formattedDate);
		for (var j=0; j<work.jobs[i].description.length; j++) {
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description[j]);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}

education.displayEducation = function() {
	$("#education").append(HTMLschoolStart);
	for (c in education.schools) {
		var formattedSchoolStart = HTMLschoolName.replace("%data%", education.schools[c].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[c].degree);
		$(".education-entry:last").append(formattedSchoolStart+formattedSchoolDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[c].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[c].majors);
		$(".education-entry:last").append(formattedSchoolMajors);


	}
}

/* project.displayProject = function() {
	for(p in project.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[p].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", project.projects[p].date);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[p].description);
		$(".project-entry:last").append(formattedDescription)

		if (project.projects[p].images.length > 0) {
			for (i in project.projects[p].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", project.projects[p].images[i]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
} */

displayWork();
bio.displayBio();
education.displayEducation();
//project.displayProject();

/*$("#main").append(internationalizeButton);


function inName(fullName) {
	var newName = fullName.trim().split(" ");
	newName[1] = newName[1].toUpperCase();
	newName[0] = newName[0].slice(0,1).toUpperCase() + newName[0].slice(1).toLowerCase();
	return newName[0] + " " + newName[1];
}
*/
























