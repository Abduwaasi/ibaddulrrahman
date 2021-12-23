
// Display a large form in different steps
const steps = Array.from(document.querySelectorAll("form .step"));
console.log(steps)
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");
const nextPersonBtn = document.querySelector("form .next-person")

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

nextPersonBtn.addEventListener("click", ()=>{
  changeStep("nextPerson");
})


function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  console.log(index)
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  // else if (btn==="nextPerson"){
  //   for (let i = 0; i < 3; i++) {
  //     index=3;
  //     active.reset()
     
      
  //   }
  //   // form.querySelectorAll("input").forEach((input) => {
  //   //       const inputs = []
  //   //       const { name, value } = input;
  //   //       inputs.push({ name, value });
  //   //       console.log(inputs);
  //   //       form.reset();
  //   //     });
  // }
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


