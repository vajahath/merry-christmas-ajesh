// Modern Christmas Greeting Logic
document.addEventListener('DOMContentLoaded', () => {
  // Dynamic Year - Previous Year Logic
  const yearElement = document.getElementById('dynamic-year');
  if (yearElement) {
    yearElement.textContent = (new Date().getFullYear() - 1).toString();
  }

  // Reveal Observer for scroll animations
  const revealCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  };

  const observer = new IntersectionObserver(revealCallback, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Interactive Snowfall
  const snowContainer = document.getElementById('snow-container');
  if (snowContainer) {
    const snowflakeCount = window.innerWidth < 768 ? 30 : 70;

    for (let i = 0; i < snowflakeCount; i++) {
      const snowflake = document.createElement('div');
      const size = Math.random() * 5 + 2;

      snowflake.style.cssText = `
                position: absolute;
                top: -10px;
                left: ${Math.random() * 100}%;
                width: ${size}px;
                height: ${size}px;
                background: white;
                border-radius: 50%;
                opacity: ${Math.random() * 0.6 + 0.4};
                box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
                pointer-events: none;
                z-index: 1000;
                animation: fall ${Math.random() * 10 + 10}s linear infinite;
                animation-delay: ${Math.random() * 10}s;
            `;
      snowContainer.appendChild(snowflake);
    }
  }

  // Dynamic keyframes for natural snow movement
  const style = document.createElement('style');
  style.innerHTML = `
        @keyframes fall {
            0% { transform: translateY(0) translateX(0); }
            25% { transform: translateY(25vh) translateX(20px) rotate(45deg); }
            50% { transform: translateY(50vh) translateX(-20px) rotate(90deg); }
            75% { transform: translateY(75vh) translateX(20px) rotate(135deg); }
            100% { transform: translateY(100vh) translateX(0) rotate(180deg); }
        }
    `;
  document.head.appendChild(style);

  // Parallax effect on mouse move for images (Desktop only)
  if (window.innerWidth > 1024) {
    document.addEventListener('mousemove', (e) => {
      const cards = document.querySelectorAll('.image-card');
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;

      cards.forEach((card) => {
        const element = card as HTMLElement;
        const speed = 20;
        element.style.transform = `
                    scale(1) 
                    translate(${mouseX * speed}px, ${mouseY * speed}px) 
                    rotate(${mouseX * 2}deg)
                `;
      });
    });
  }
});
