(function() {
    var script = document.createElement('script');
    script.src = 'https://your-vercel-app-url/static/js/main.js'; // replace with your Vercel app URL
    script.onload = function() {
      if (typeof window.mountChatWidget === 'function') {
        window.mountChatWidget();
      }
    };
    document.head.appendChild(script);
  })();