function rotateCarousel() {
    const angle = currentIndex / cellCount * -360;
  
    $carousel.style.transform = 'translateZ(288px) rotateY(' + angle + 'deg)';
  }
  
  setInterval(
    () => {
      rotateCarousel();
      currentIndex++;
    },
    2500,
  );