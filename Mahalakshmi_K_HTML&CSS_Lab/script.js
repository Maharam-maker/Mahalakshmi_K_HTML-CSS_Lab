window.onload = function() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
      const percentage = bar.style.getPropertyValue('--percentage');
      bar.style.height = percentage;
    });
  };
  