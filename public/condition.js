var classTag = document.getElementById('classTag')
var workTag = document.getElementById('workTag')
var sumbitId = document.getElementById('sumbitId')
var spanId = document.getElementById('spanId')


classTag.addEventListener('change', () =>{
  // checking wheter or not the value is bigger than 10
  // the reason why is because you can't have 10 classes per day
    if(classTag.value > 10) {
      // disabled the button
      sumbitId.disabled = true;
      spanId.innerHTML = "Too big"
    }
    else {
        sumbitId.disabled = false;
        spanId.innerHTML ="";

    }
});

workTag.addEventListener('change', () =>{
    if(workTag.value > 15) {
      // disabled the button
      sumbitId.disabled = true;
      spanId.innerHTML = "Too big"
    }
    else {
        sumbitId.disabled = false;
        spanId.innerHTML ="";

    }
});
