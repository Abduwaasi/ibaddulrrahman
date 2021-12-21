
// Display a large form in different steps
const steps = Array.from(document.querySelectorAll("form .step"));
console.log(steps)
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = [];
  form.querySelectorAll("input").forEach((input) => {
    const { name, value } = input;
    inputs.push({ name, value });
  });
  console.log(inputs);
  form.reset();
});

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
}
 

// Hide and show form base on selected options
function changeOptions(selectEI){
    let selectedValue= selectEI.options[selectEI.selectedIndex].value;
    let subForms = document.getElementsByClassName("className");
    for(let i=0; i< subForms.length; i++){
      if(selectedValue===subForms[i].name){
        subForms[i].setAttribute("style","display:block")
      }else{
        subForms[i].setAttribute("style","display:none")
      }
    }
}


//  Form Validation
// const form = document.querySelector("form")
const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")
const emailAddress = document.querySelector("#emailAddress")
const dateOfBirth = document.querySelector("#dateOfBirth")
const city = document.querySelector("#city")
const fName = document.querySelector("#fName")
const lName = document.querySelector("#lname")
const phone = document.querySelector("#phone")
const relationship = document.querySelector("#relationship")
const phoneNumber = document.querySelector("#phoneNumber")

const setError=(element, message)=>{
const inputControl = element.parentElement;
const errorDisplay = inputControl.querySelector(".error")
errorDisplay.innerText= message;
inputControl.classList.add("error")
inputControl.classList.remove("success")
}
const setSuccess = ()=>{
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText= "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error")
}

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = ()=>{
  const firstNameValue = firstName.value.trim()
  const lastNameValue = lastName.value.trim()
  const emailAddressValue = emailAddress.value.trim()
  const dateOfBirthValue = dateOfBirth.value.trim()
  const cityValue = city.value.trim()
  const fNameValue = fName.value.trim()
  const lNameValue = lName.value.trim()
  const phoneValue = phone.value.trim()
  const relationshipValue = relationship.value.trim()
  const phoneNumberValue = phoneNumber.value.trim()
  if (firstNameValue===""){
    setError(firstName, "First name is required")
  }else{
    setSuccess(firstName)
  }
  if (lastNameValue===""){
    setError(lastName, "First name is required")
  }else{
    setSuccess(lastName)
  }

  if (emailAddressValue===""){
    setError(emailAddress, "First name is required")
  }else{
    setSuccess(emailAddress)
  }
  if (dateOfBirthValue===""){
    setError(dateOfBirth, "First name is required")
  }else{
    setSuccess(dateOfBirth)
  }
  if (cityValue===""){
    setError(city, "First name is required")
  }else{
    setSuccess(city)
  }
  if (fNameValue===""){
    setError(fName, "First name is required")
  }else{
    setSuccess(fName)
  }
  if (lNameValue===""){
    setError(lName, "First name is required")
  }else{
    setSuccess(lName)
  }
  if (phoneValue===""){
    setError(phone, "First name is required")
  }else{
    setSuccess(phone)
  }
  if (relationshipValue===""){
    setError(relationship, "First name is required")
  }else{
    setSuccess(relationship)
  }
  if (phoneNumberValue===""){
    setError(phoneNumber, "First name is required")
  }else{
    setSuccess(phoneNumber)
  }
}