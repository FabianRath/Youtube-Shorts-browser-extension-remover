function removeElementsMainPage() {
  const elements = document.getElementsByClassName('style-scope ytd-rich-section-renderer');
  for (let i = 0; i < elements.length; i++) {
    elements[i].remove();
  }
}

function removeElementsInVideo() {
  const elements = document.querySelectorAll('ytd-reel-shelf-renderer');
  for (let i = 0; i < elements.length; i++) {
    elements[i].remove();
  }
}

function removeCategoryBarInVideo() {
  const elements = document.querySelectorAll('iron-selector');
  for (let i = 0; i < elements.length; i++) {
    elements[i].remove();
  }
}

function removeCategoryBar() {
  const elements = document.getElementsByClassName('style-scope ytd-feed-filter-chip-bar-renderer');
  for (let i = 0; i < elements.length; i++) {
    elements[i].remove();
  }
}

function removeAddBlockPopUp() {
  const elements = document.getElementsByClassName('style-scope ytd-enforcement-message-view-model');
  for (let i = 0; i < elements.length; i++) {
    elements[i].remove();
  }
}

// Run the function every 10 seconds (adjust the interval as needed)
setInterval(removeElementsMainPage, 100);
setInterval(removeElementsInVideo, 100);
setInterval(removeCategoryBarInVideo, 100);

// Call removeCategoryBar with a 1-second delay when the webpage loads
window.addEventListener('load', function() {
  removeCategoryBar();
  removeAddBlockPopUp();
});