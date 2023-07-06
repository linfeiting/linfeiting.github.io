window.addEventListener('DOMContentLoaded', () => {
    const classList = ['.imgin1', '.imgin2', '.imgin3', '.imgin4', '.imgin5', '.imgin6', '.imgin7'];
  
    classList.forEach(selector => {
      const element = document.querySelector(selector);
      const initialTop = window.getComputedStyle(element).top;
      element.style.setProperty('--initial-top', initialTop);
    });
  });
  window.addEventListener('DOMContentLoaded', () => {
    const classList = ['.imgin1', '.imgin2', '.imgin3', '.imgin4', '.imgin5', '.imgin6', '.imgin7'];
  
    classList.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        setTimeout(() => {
          element.style.opacity = 1;
          if (element.classList.contains('move-up')) {
            element.classList.add('move-up');
          }
          if (element.classList.contains('move-down')) {
            element.classList.add('move-down');
          }
        }, 1500);
      });
    });
  });
  