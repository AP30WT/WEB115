// JavaScript code for form validation
window.addEventListener("load", e => {
  let myForm = document.getElementById("myForm");
  let inputField = document.getElementById("inputField");
  // Retrieve the input field value
  function setValue() {
    let iValue = document.getElementById('inputField').value;
    return iValue;
  }
  // Regular expression pattern for alphanumeric input
  inputField.append('pattern="regex"')
  let regex = /^[a-zA-Z0-9]*$/
  // Check if the input value matches the pattern
  function submitProcess() {
      if (iValue != "") {
        if (regex.test(iValue)) {
  // Valid input: display confirmation and submit the form
          window.alert("Data Validated & Submitted");
          myForm.submit();
          inputField.valid = true;
  // Invalid input: display error message
        } else {
          inputField.valid = false
          inputField.setCustomValidity("Error, invalid input");
        }
       } else {
         inputField.valid = false
         inputField.setCustomValidity("Error, no input");
      }
  }
  function timerFunction(){
    inputField.setCustomValidity("")
  }
  document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    inputField.setCustomValidity("")
    iValue = setValue();
    submitProcess();
    inputField.reportValidity()
    const errorTimeout = setTimeout(timerFunction, 1500)
  })
})