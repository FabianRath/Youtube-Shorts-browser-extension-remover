window.onload = () => {
    // Select and remove elements by class name
    const elements = document.getElementsByClassName('style-scope ytd-rich-section-renderer');

    for (let i = 0; i < elements.length; i++) {
      elements[i].remove();
    }
  };