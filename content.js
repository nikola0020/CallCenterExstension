  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === 'get-click-data') {
      var text;
      // Highlight element on hover
      function addHighlight(target) {
        target.classList.add('highlighted');
      }

      function removeHighlight(target) {
        target.classList.remove('highlighted');
      }

      window.addEventListener('mouseover',function(e) {
        addHighlight(e.target);
      });

      window.addEventListener('mouseout',function(e) {
        removeHighlight(e.target);
      });

      // Get raw css selector from clicked element
      document.addEventListener('click', function(e) {
        text = getCssSelector(e.target);   
        sendResponse(text);
      });

      getCssSelector = (el) => {
        let path = [], parent;
        while (parent = el.parentNode) {
          path.unshift(`${el.tagName}:nth-child(${[].indexOf.call(parent.children, el)+1})`);
          el = parent;
        }
        return `${path.join(' > ')}`.toLowerCase();
      };
      sendResponse(text);
    }
  });