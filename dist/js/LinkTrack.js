
  // Function to track link clicks, add "active" class, and then redirect
  function trackLinkClickAndRedirect(event) {
    // Get the URL of the clicked link
    const clickedLink = event.target.href;

    // Log the clicked link to the console (you can replace this with your tracking system)
    console.log('Clicked link:', clickedLink);

    // You can also send the data to your server or analytics service here
    // Example:
    // fetch('/track-link-click', {
    //   method: 'POST',
    //   body: JSON.stringify({ link: clickedLink }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });

    // Remove the "active" class from all links with the "tracked-link" class
    const trackedLinks = document.querySelectorAll('.nav-link');
    trackedLinks.forEach(link => {
      link.classList.remove('active');
    });
    //console.log(trackedLinks);
    // Add the "active" class to the clicked link
    event.target.classList.add('active');

    // Redirect the user to the clicked link
    window.location.href = clickedLink;
  }

  // Add click event listeners to all links with the "tracked-link" class
  const trackedLinks = document.querySelectorAll('.nav-link');
  trackedLinks.forEach(link => {
    link.addEventListener('click', trackLinkClickAndRedirect);
  });

