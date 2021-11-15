document.addEventListener('DOMContentLoaded', function() {
    const btnShowChoices = document.querySelectorAll(".js-btn-choice")
   const btnContainerChoice = document.querySelectorAll(".js-option-container")
   const btnActiveNumber = document.querySelectorAll(".js-number-active")
   for(let i = 0; i < btnShowChoices.length; i++){
      btnShowChoices[i].addEventListener('click',(e) => {
          if(btnContainerChoice[i].classList.contains("disable")){
              btnContainerChoice[i].classList.remove("disable")
          }else{
              btnContainerChoice[i].classList.add("disable")
          }
      })
   }

   for(let i = 0; i < btnActiveNumber.length; i++){
       btnActiveNumber[i].addEventListener('click', (e) => {
           let isActive = btnActiveNumber[i].classList.contains("slick-active")
           if(isActive){
               e.preventDefault();
           } else {
               btnActiveNumber[i].classList.add("slick-active")
               for(let j = 0; j < btnActiveNumber.length; j++){
                   if(btnActiveNumber[j].classList.contains("slick-active") && j !== i ){
                       btnActiveNumber[j].classList.remove("slick-active")
                   }
               }
           }
       })
   }
   

})


