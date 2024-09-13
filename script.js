//  Get refrences to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values 
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    var resumeHTML = "\n<h2><b> Dynamic Resume Builder</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b> <span contenteditable =\"ture\">".concat(name, " </span></p>\n<p><b>Email:</b> <span contenteditable =\"ture\"> ").concat(email, " </span></p>\n<p><b>Phone:</b> <span contenteditable =\"ture\"> ").concat(phone, " </span></p>\n\n<h3>Education</h3>\n<p contenteditable =\"ture\" >").concat(education, "</p>\n\n<h3>Work Experience</h3>\n<p contenteditable =\"ture\">").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p contenteditable =\"ture\" >").concat(skills, "</p>");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
