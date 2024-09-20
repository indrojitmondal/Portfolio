console.log('features.js')
 const allAngkorTag= document.querySelectorAll('#pc-nav-right-container a');
 const idArray= ['lg-about','lg-projects','lg-services','lg-contact'];


    let i=0;
    for (const a of allAngkorTag) {
      
        a.setAttribute('id', idArray[i++]);
        console.log(a);
    }
    for (const item of allAngkorTag) {
        item.classList.add('text-black');
        console.log(item);
    }
function showFeaturesInLargeScreenById(id){
    
   
    console.log('ok');

    document.getElementById(id).classList.add('text-primary');
}