console.log('features.js')
 const allAngkorTag= document.querySelectorAll('#pc-nav-right-container a');
 const idArray= ['lg-about','lg-projects','lg-services','lg-contact'];




    let i=0;
    for (const a of allAngkorTag) {
      
        a.setAttribute('id', idArray[i++]);
        //console.log(a);
    }
    // for (const item of allAngkorTag) {
    //     item.classList.add('text-black');
    //     console.log(item);
    // }
function showFeaturesInLargeScreenById(id){
    
   
    //console.log('ok');

    document.getElementById(id).classList.add('text-primary');
   
}


// document.getElementById('mobile').classList.add('bg-primary');
// document.getElementById('mobile').classList.add('text-white');

let projectsArray= document.querySelectorAll('#projects-container button');



 
for (const project of projectsArray) {
    
    project.classList.add('text-primary');
    // project.classList.remove('bg-primary');

}

const projectsContainerArray = document.querySelectorAll('#allProjectsContainer > div');
console.log('projects length: ',projectsContainerArray.length);
// console.log(typeof projectsContainerArray[0].id);
const check=1;



function styleProjectSectionByID(id){

    console.log('typeof id :', typeof id);
    console.log(id);
    
   
  

    for (const project of projectsArray) {
    
  
        project.classList.remove('bg-primary');
        project.classList.remove('text-white');
    
    }

    const cards = [];
     
    for (const item of projectsContainerArray) {
        
        
        if(item.id.includes(id)){
            item.classList.remove('hidden');
            cards.push(item.id);

        }
        else{
            item.classList.add('hidden');
        }
    }


    document.getElementById(id).classList.add('bg-primary');
    document.getElementById(id).classList.add('text-white');

    document.getElementById(id).classList.remove('hidden');
    if(id ==='all')
    {
        console.log('hi');

         for (const item of projectsContainerArray) {
        

              item.classList.remove('hidden');
           
        }
     
        

    }
    // if(cards.length>0){
    //     console.log(cards);
    // }

}
// Please Update