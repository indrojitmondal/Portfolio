console.log('projects.js Connected');
 
showFeaturesInLargeScreenById(idArray[1]);
console.log(idArray[1]);

document.getElementById('web-application').addEventListener('click', function (){
    
    styleProjectSectionByID('web-application');
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
