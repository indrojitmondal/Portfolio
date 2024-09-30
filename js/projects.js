
console.log('projects.js Connected');
 
// showFeaturesInLargeScreenById(idArray[1]);
// console.log(idArray[1]);


document.getElementById('web-application').addEventListener('click', function (event){
    
    
    styleProjectSectionByID('web-application');
    // cardListener();
    console.log(projectsContainerArray[0].id);
    const id=projectsContainerArray[0].id;
    const cards = document.querySelectorAll(`#${id} > div`);
    
    for (let i=0; i<cards.length; i++) {
        const card=cards[i];
        //console.log(card);
        card.setAttribute('id',`web-card-${i+1}`);
        const buttons = document.querySelectorAll(`#web-card-${i+1} .card-actions button`);
        // console.log(buttonContainer);
         console.log(buttons[1]);

        
         
         card.addEventListener('mouseover', function (){
            const resetButtons =document.querySelectorAll(`.card-actions button`);

         resetButtons.forEach(element => {
            element.classList.remove('bg-btn','text-white');
         });
           buttons[1].classList.add('bg-btn','text-white');
         })
         
         
       
    }


    



    
    
    
    

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
 
        
    
    


