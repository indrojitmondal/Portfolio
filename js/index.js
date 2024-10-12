console.log('index.js Connected');
 
// showFeaturesInLargeScreenById(idArray[0]);
// console.log(idArray[0]);

const projectButtons = document.querySelectorAll('#webApp button');
console.log(projectButtons.length);
for (const btn of projectButtons) {

    btn.classList.add('hover:bg-hello','hover:text-white','rounded-md');
    
}