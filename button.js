document.getElementById('downloadCV').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default anchor behavior
    const url = this.getAttribute('href');
    const filename = 'cv/my cv.doc'; // Desired filename for the download
    
    fetch(url)
      .then(response => response.blob()) // Fetch the file and get it as a Blob
      .then(blob => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob); // Create an object URL for the Blob
        link.download = filename; // Set the desired filename
        link.click(); // Trigger the download
        URL.revokeObjectURL(link.href); // Clean up the object URL
      })
      .catch(error => console.error('Download failed:', error)); // Handle errors
  });
  


