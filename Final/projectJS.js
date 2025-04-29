// Create empty user data
let userName = "User";
let email = "";
let userGoal = "No goal set";
// Create array for every day with placeholder "-"
const mon = ["", "", "", "", ""];
const tue = ["", "", "", "", ""];
const wed = ["", "", "", "", ""];
const thu = ["", "", "", "", ""];
const fri = ["", "", "", "", ""];
const sat = ["", "", "", "", ""];
const sun = ["", "", "", "", ""];
// Clear input elements
function clearForm() {
    document.getElementById("mealForm").reset();
    console.log("Input cleared");
}
// Document form object
let windowText = "";
function submitForm() {
    windowText = ("<html>\n<head>\n<title>Weekly Meal Plan</title>\n<head>\n<body>\n");
    windowText += ("<b>Name:</b> " + userName + "<br><b>Email:</b> "+ email + "<br><b>Goal:</b> "+ userGoal + "<br><br>");
    windowText += ("<b>Monday</b><br>Breakfast:<em> " + mon[0] + ". </em>Snack:<em> " + mon[1] + ". </em>Lunch:<em> " + mon[2] + ". </em>Snack:<em> " + mon[3] + ". </em>Dinner:<em> " + mon[4] + "</em><br><br>");
    windowText += ("<b>Tuesday</b><br>Breakfast:<em> " + tue[0] + ". </em>Snack:<em> " + tue[1] + ". </em>Lunch:<em> " + tue[2] + ". </em>Snack:<em> " + tue[3] + ". </em>Dinner:<em> " + tue[4] + "</em><br><br>");
    windowText += ("<b>Wednesday</b><br>Breakfast:<em> " + wed[0] + ". </em>Snack:<em> " + wed[1] + ". </em>Lunch:<em> " + wed[2] + ". </em>Snack:<em> " + wed[3] + ". </em>Dinner:<em> " + wed[4] + "</em><br><br>");
    windowText += ("<b>Thursday</b><br>Breakfast:<em> " + thu[0] + ". </em>Snack:<em> " + thu[1] + ". </em>Lunch:<em> " + thu[2] + ". </em>Snack:<em> " + thu[3] + ". </em>Dinner:<em> " + thu[4] + "</em><br><br>");
    windowText += ("<b>Friday</b><br>Breakfast:<em> " + fri[0] + ". </em>Snack:<em> " + fri[1] + ". </em>Lunch:<em> " + fri[2] + ". </em>Snack:<em> " + fri[3] + ". </em>Dinner:<em> " + fri[4] + "</em><br><br>");
    windowText += ("<b>Saturday</b><br>Breakfast:<em> " + sat[0] + ". </em>Snack:<em> " + sat[1] + ". </em>Lunch:<em> " + sat[2] + ". </em>Snack:<em> " + sat[3] + ". </em>Dinner:<em> " + sat[4] + "</em><br><br>");
    windowText += ("<b>Sunday</b><br>Breakfast:<em> " + sun[0] + ". </em>Snack:<em> " + sun[1] + ". </em>Lunch:<em> " + sun[2] + ". </em>Snack:<em> " + sun[3] + ". </em>Dinner:<em> " + sun[4] + "</em><br><br>");
    windowText += ("</body>\n</html>");
}
// Open new webpage
function openWebpage() {
    newWindow = window.open('about:blank', 'yourPlan', 'width=700, height=500,top=200');
    newWindow.document.write(windowText);
    console.log("Popup window created");
}
// Create download content
function download(file, text) {
    let downContent = document.createElement("a");
    downContent.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent(text));
    downContent.setAttribute('download', file);
    downContent.setAttribute("id", "hiddenDownloadButton");
    downContent.click();
    downContent.remove();
}
// Download the plan
function downloadForm() {
    submitForm();
    download("WeeklyMealPlanner.htm", windowText);
    console.log("Downloaded Planner");
}
// Record input data
function recordPlan() {
    userName = document.getElementById("name").value;
    email = document.getElementById("email").value;
    userGoal = document.getElementById("goal").value;
    mon[0] = document.getElementById("monBreakfast").value;
    mon[1] = document.getElementById("monSnack1").value;
    mon[2] = document.getElementById("monLunch").value;
    mon[3] = document.getElementById("monSnack2").value;
    mon[4] = document.getElementById("monDinner").value;
    tue[0] = document.getElementById("tueBreakfast").value;
    tue[1] = document.getElementById("tueSnack1").value;
    tue[2] = document.getElementById("tueLunch").value;
    tue[3] = document.getElementById("tueSnack2").value;
    tue[4] = document.getElementById("tueDinner").value;
    wed[0] = document.getElementById("wedBreakfast").value;
    wed[1] = document.getElementById("wedSnack1").value;
    wed[2] = document.getElementById("wedLunch").value;
    wed[3] = document.getElementById("wedSnack2").value;
    wed[4] = document.getElementById("wedDinner").value;
    thu[0] = document.getElementById("thuBreakfast").value;
    thu[1] = document.getElementById("thuSnack1").value;
    thu[2] = document.getElementById("thuLunch").value;
    thu[3] = document.getElementById("thuSnack2").value;
    thu[4] = document.getElementById("thuDinner").value;
    fri[0] = document.getElementById("friBreakfast").value;
    fri[1] = document.getElementById("friSnack1").value;
    fri[2] = document.getElementById("friLunch").value;
    fri[3] = document.getElementById("friSnack2").value;
    fri[4] = document.getElementById("friDinner").value;
    sat[0] = document.getElementById("satBreakfast").value;
    sat[1] = document.getElementById("satSnack1").value;
    sat[2] = document.getElementById("satLunch").value;
    sat[3] = document.getElementById("satSnack2").value;
    sat[4] = document.getElementById("satDinner").value;
    sun[0] = document.getElementById("sunBreakfast").value;
    sun[1] = document.getElementById("sunSnack1").value;
    sun[2] = document.getElementById("sunLunch").value;
    sun[3] = document.getElementById("sunSnack2").value;
    sun[4] = document.getElementById("sunDinner").value;
    console.log("Weekday values recorded")
}
// Check for valid email - emailRegex is a simplified RFC 5322 Email Regex
let emailField = document.getElementById("email");
let emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gm;
function emailValidation(email) {
    let verifier = email.match(emailRegex);
    let answer = null;
    if (verifier != null) {
        emailField.valid = true;
        answer = true;
        console.log("Valid email provided")
    }
    else {
        emailField.valid = false;
        emailField.setCustomValidity("Error, invalid email");
        console.log("Invalid email input");
        answer = false;
    }
    return answer;
}
// Clear button event listener
document.getElementById("clearPlan").addEventListener("click", function() {
    let clearConfirmation = confirm('Click "OK" if you are sure you want to clear the plan.');
    if (clearConfirmation != false) {
        clearForm();
    }
})
// Submit button event listener
document.getElementById("submitPlan").addEventListener("click", function(e) {
    let emailInput = document.getElementById("email").value;
    e.preventDefault();
    emailField.setCustomValidity("");
    let validEmail = emailValidation((emailInput));
    emailField.reportValidity();
    if (validEmail === true) {
        recordPlan();
        submitForm();
        openWebpage();
    }
})
// Download button event listener
document.getElementById("downloadPlan").addEventListener("click", function(e) {
    let emailInput = document.getElementById("email").value;
    e.preventDefault();
    emailField.setCustomValidity("");
    let validEmail = emailValidation((emailInput));
    emailField.reportValidity();
    if (validEmail === true) {
        recordPlan();
        console.log("Submit Started");
        downloadForm();
    }
})
// Print button event listener
inputButtons = document.getElementById("buttonTray")
document.getElementById("printPlan").addEventListener("click", function() {
    inputButtons.style.display = "none";
    document.getElementById("foodImage").style.display = "none";
    console.log("Print options displayed");
    document.getElementById("body").style.scale = ".9";
    window.print();
    inputButtons.style.display = "flex";
    document.getElementById("body").style.scale = "1.0";
    document.getElementById("foodImage").style.display = "block";
})
// Focus the name field on load
window.onload = function() {
    document.getElementById("name").focus();
// Hide image at lower display width
    if (window.innerWidth < 1725) {
        document.getElementById("foodImage").style.display = "none";
    }
    else {
        document.getElementById("foodImage").style.display = "block";
    }
}
function toggleImage() {
    if (window.innerWidth < 1725) {
        document.getElementById("foodImage").style.display = "none";
    }
    else {
        document.getElementById("foodImage").style.display = "block";
    }
}
window.onresize = function() {
    toggleImage();
}