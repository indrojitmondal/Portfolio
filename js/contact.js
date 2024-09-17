console.log('Connected to contact.js');
const input_container = document.getElementById('input-container');

// console.log(input_container);

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

/** 
fname.addEventListener('click', function(){
    
    fname.classList.remove('border-gray-300');
   fname.classList.add('border-primary'); 
})
company.addEventListener('click', function(){
    
    company.classList.remove('border-gray-300');
   company.classList.add('border-primary'); 
})
email.addEventListener('click', function(){
    
    email.classList.remove('border-gray-300');
   email.classList.add('border-primary'); 
})
phone.addEventListener('click', function(){
    
    phone.classList.remove('border-gray-300');
   phone.classList.add('border-primary'); 
})
message.addEventListener('click', function(){
    
    message.classList.remove('border-gray-300');
   message.classList.add('border-primary'); 
})
*/

