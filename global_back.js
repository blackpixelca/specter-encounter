window.addEventListener('pageshow', function (event) {
  // Check if the page is being loaded from the cache
  if (event.persisted) {
    // Force a reload of the page
    window.location.reload();
  }
});
