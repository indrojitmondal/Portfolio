
console.log('projects.js Connected');
const projectsContainer = document.querySelectorAll('#projects-container button');
console.log(projectsContainer);
for (const p of projectsContainer) {
  
  p.classList.add('rounded-md');
}
const allButtons = document.querySelectorAll('#allProjectsContainer button');
for (const btn of allButtons) {
   
  btn.classList.add('rounded-md','outline-none');
  
}
// const showSpinner = (status)=>{
//   const spinner = document.getElementById('spinner');
//   if(status){
//       spinner.classList.remove('hidden');
//   }
//   else{
//       spinner.classList.add('hidden');
//   }

// }
 //showSpinner(true);

// setTimeout( ()=>{
//   showSpinner(false);
// },2000);
 
// showFeaturesInLargeScreenById(idArray[1]);
// console.log(idArray[1]);

// By clicking Projects.html 
const cards = document.getElementsByClassName('card');
console.log(cards.length);
for (let i=0; i<cards.length; i++) {

    const card=cards[i];
    //console.log(card);
    card.setAttribute('id',`web-card-${i+1}`);
    const buttons = document.querySelectorAll(`#web-card-${i+1} .card-actions button`);
    // console.log(buttonContainer);
     //console.log(buttons[1]);
      
     //
    
    
     
     card.addEventListener('mouseover', function (){

        
    

        const resetButtons =document.querySelectorAll(`.card-actions button`);

     resetButtons.forEach(element => {
        element.classList.remove('bg-btn','text-white');
     });
       buttons[1].classList.add('bg-btn','text-white');
       

     })


}


 for(let i=0; i<cards.length; i++){
   
    console.log(cards[i]);
    let index =i;
    console.log(index);
      const buttons = document.querySelectorAll(`#web-card-${index+1} .card-actions button`);
      console.log(buttons.length);
      buttons[0].addEventListener('mouseover', function(event){
        //alert('ok?');

        

        event.stopImmediatePropagation();
        buttons[1].classList.remove('bg-btn','text-white');
        
        buttons[0].classList.add('bg-btn','text-white');
        // return;
        // alert(buttons[0].classList);

       });

      //  buttons[1].addEventListener('mouseover', function(event){

      //   event.stopImmediatePropagation();

      //   buttons[0].classList.remove('bg-btn','text-white');
      //   buttons[1].classList.add('bg-btn','text-white');

      //  });
 }

  


document.getElementById('web-application').addEventListener('click', function (event){
    
    event.stopImmediatePropagation();
    styleProjectSectionByID('web-application');
    // showSpinner(true);

    // setTimeout( ()=>{
    //   showSpinner(false);
    // },2000);
    // cardListener();
    // console.log(projectsContainerArray[0].id);
    const projectsContainerArray = document.querySelectorAll('#allProjectsContainer > div');

    const id=projectsContainerArray[0].id;
    const cards = document.querySelectorAll(`#${id} > div`);
    
    for (let i=0; i<cards.length; i++) {

        const card=cards[i];
        //console.log(card);
        card.setAttribute('id',`web-card-${i+1}`);
        const buttons = document.querySelectorAll(`#web-card-${i+1} .card-actions button`);
        // console.log(buttonContainer);
         //console.log(buttons[1]);
          
         //
         
        
         
         card.addEventListener('mouseover', function (){

            
        

            const resetButtons =document.querySelectorAll(`.card-actions button`);

         resetButtons.forEach(element => {
            element.classList.remove('bg-btn','text-white');
         });
           buttons[1].classList.add('bg-btn','text-white');
           //xxx();


        



         })

        
         
         
         


    }

    cards.forEach((card, index) => {
        
      console.log(index);
      const buttons = document.querySelectorAll(`#web-card-${index+1} .card-actions button`);
      console.log(buttons.length);
      buttons[0].addEventListener('mouseover', function(event){
        //alert('ok?');

        

        event.stopImmediatePropagation();
        buttons[1].classList.remove('bg-btn','text-white');
        
        buttons[0].classList.add('bg-btn','text-white');
        // return;
        // alert(buttons[0].classList);

       });

       buttons[1].addEventListener('mouseover', function(){

        event.stopImmediatePropagation();

        buttons[0].classList.remove('bg-btn','text-white');
        buttons[1].classList.add('bg-btn','text-white');

       });
    });






})


document.getElementById('mobile-application').addEventListener('click', function (){
  
    styleProjectSectionByID('mobile-application');  
})
document.getElementById('game-development').addEventListener('click', function (){
  
    styleProjectSectionByID('game-development');  
})
document.getElementById('data-structures').addEventListener('click', function (){
  
    styleProjectSectionByID('data-structures');  
})
document.getElementById('algorithms').addEventListener('click', function (){
  
    styleProjectSectionByID('algorithms');  
})
document.getElementById('all').addEventListener('click', function (){
  
    styleProjectSectionByID('all');  
})



//  function cardListener(){
     
//  }
 
        
    
    


