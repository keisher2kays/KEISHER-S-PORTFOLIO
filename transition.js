// document.addEventListener('DOMContentLoaded', function() {
//     const transitionOverlay = document.getElementById('page-transition-overlay');
    
//     // Function to handle page transitions
//     function pageTransition(url, direction) {
//       // Show the transition overlay
//       transitionOverlay.style.transform = 'translateX(0)';
      
//       // After a short delay, start the slide animation
//       setTimeout(() => {
//         document.body.classList.add(direction === 'next' ? 'slide-left' : 'slide-right');
        
//         // Navigate to the new page after the animation
//         setTimeout(() => {
//           window.location.href = url;
//         }, 500); // This should match the animation duration
//       }, 50);
//     }
  
//     // Add click event listeners to your navigation buttons
//     document.querySelectorAll('.nav-button').forEach(button => {
//       button.addEventListener('click', function(e) {
//         e.preventDefault();
//         const url = this.getAttribute('href');
//         const direction = this.classList.contains('next') ? 'next' : 'prev';
//         pageTransition(url, direction);
//       });
//     });
//   });
  
//   // Add this code to each of your HTML pages
//   window.addEventListener('pageshow', function(event) {
//     if (event.persisted) {
//       // This is for handling page loads from back/forward cache
//       document.body.classList.remove('slide-left', 'slide-right');
//       document.getElementById('page-transition-overlay').style.transform = 'translateX(100%)';
//     }
//   });


document.querySelectorAll('.nav-button').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const url = this.getAttribute('href');
    const direction = this.classList.contains('next') ? 'next' : 'prev';
    pageTransition(url, direction);
  });
});

// function pageTransition(url, direction) {
//   const overlay = document.getElementById('page-transition-overlay');
//   const body = document.body;

//   // Trigger the transition
//   body.classList.add(direction === 'next' ? 'slide-left' : 'slide-right');
//   overlay.style.transform = 'translateX(0)';

//   // Smooth scroll to top
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });

//   // Wait for scroll and animation to complete
//   setTimeout(() => {
//     window.location.href = url;
//   }, 500); // Adjust timing as needed
// }
function pageTransition(url, direction) {
  const overlay = document.getElementById('page-transition-overlay');
  const body = document.body;

  // Trigger the transition
  overlay.style.transform = 'translateX(0)';

  // Smooth scroll to top
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  // Wait for scroll and animation to complete
  setTimeout(() => {
    window.location.href = url;
  }, 500); // Adjust timing as needed
}
// Handle page loads from back/forward cache
window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    document.body.classList.remove('slide-left', 'slide-right');
    document.getElementById('page-transition-overlay').style.transform = 'translateX(100%)';
  }
});