// Perhaps some chatGPT used... maybe all of it...  

// Log to check if the script is running
console.log('Script is running');

// Add event listener to all elements with the class 'fa-square-github'
document.querySelectorAll('.fa-square-github').forEach(function(githubicon) {
    console.log('Adding event listener to fa-square-github');
    githubicon.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action (download)
        event.stopPropagation(); // Prevent the click from bubbling up to the parent link
        console.log('GitHub icon clicked');
        const url = this.getAttribute('data-url'); // Get the URL from the data attribute
        window.open(url, '_blank'); // Open in a new tab
    });
});


