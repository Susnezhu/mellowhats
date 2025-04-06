document.querySelectorAll('.product').forEach(product => {
    const image = product.querySelector('img.hat');
    const circles = product.querySelectorAll('.color-circle');

    circles.forEach(circle => {
      circle.addEventListener('click', () => {
        const newImg = circle.getAttribute('data-img');
        image.setAttribute('src', newImg);
      });
    });
  });
