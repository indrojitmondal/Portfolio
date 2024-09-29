
console.log('projects.js Connected');
 
// showFeaturesInLargeScreenById(idArray[1]);
console.log(idArray[1]);


document.getElementById('web-application').addEventListener('click', function (event){
    
    styleProjectSectionByID('web-application');



    const allCard= document.querySelectorAll('#web-application-container .card');
    console.log(allCard);
    const webApplicationContainer = document.getElementById('web-application-container');

    webApplicationContainer.addEventListener('mouseover', function(event){
      
        const twoButton = document.querySelectorAll('#web-application-container .card button');
        // twoButton[1].classList.add('bg-primary');
        // twoButton[1].classList.remove('text-primary');
        // twoButton[1].classList.add('text-white');
        twoButton[0].addEventListener('mouseover', function (){
            twoButton[0].classList.add('bg-primary');
            twoButton[0].classList.remove('text-primary');
            twoButton[0].classList.add('text-white');

             
            twoButton[1].classList.remove('bg-primary');
            twoButton[1].classList.remove('text-white');
            twoButton[1].classList.add('text-primary');

        })

        twoButton[1].addEventListener('mouseover', function (){
            twoButton[1].classList.add('bg-primary');
            twoButton[1].classList.remove('text-primary');
            twoButton[1].classList.add('text-white');

             
            twoButton[0].classList.remove('bg-primary');
            twoButton[0].classList.remove('text-white');
            twoButton[0].classList.add('text-primary');
             

           

        })

    })
    
    
    

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
// Please update ....
