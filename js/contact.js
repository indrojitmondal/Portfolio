console.log('Connected to contact.js');
const input_container = document.getElementById('input-container');

 console.log(input_container);

const fname = document.getElementById('name');
const company = document.getElementById('company');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');


 input_container.addEventListener('click', function(event){
   let running=event.target;
   running.classList.remove('border-gray-300');
   running.classList.add('border-primary');
   
   const childrenArray=input_container.children;
//    console.log(running.getAttribute('id'));
   const temp= running.getAttribute('id');

   for (const child of childrenArray) {
      
      
        let newId= child.getAttribute('id');
        if(temp !== newId){
            console.log(child);
            child.classList.remove('border-primary');
            child.classList.add('border-gray-300');
        }
    
      
   }
    
})




 
// showFeaturesInLargeScreenById(idArray[3]);
console.log('Hi');
showFeaturesInLargeScreenById(idArray[3]);
console.log(idArray[3]);