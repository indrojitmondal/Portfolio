window.onscroll = function() {
    scrollProgress();
     };

    function scrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
   }


  // Function to update the progress bar width on scroll
//   window.addEventListener('scroll', () => {
//     const progressBar = document.getElementById('progressBar');
//     const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     const scrollPosition = window.scrollY;
//     const scrollPercentage = (scrollPosition / pageHeight) * 100;

//     progressBar.style.width = scrollPercentage + '%';  // Update width dynamically
//   });

