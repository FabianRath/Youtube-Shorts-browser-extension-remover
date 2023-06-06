function removeElements() {
  const elements = document.getElementsByClassName('style-scope ytd-rich-section-renderer');
  for (let i = 0; i < elements.length; i++) {
    elements[i].remove();
  }
}

// Run the function every 10 seconds (adjust the interval as needed)
setInterval(removeElements, 100);
