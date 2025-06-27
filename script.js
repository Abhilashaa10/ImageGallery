const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentImgIndex = 0;
let allImages = [];

function openLightbox(img) {
  allImages = Array.from(document.querySelectorAll('.gallery img'));
  currentImgIndex = allImages.indexOf(img);
  lightbox.style.display = 'flex';
  lightboxImg.src = img.src;
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function nextImage() {
  currentImgIndex = (currentImgIndex + 1) % allImages.length;
  lightboxImg.src = allImages[currentImgIndex].src;
}

function prevImage() {
  currentImgIndex = (currentImgIndex - 1 + allImages.length) % allImages.length;
  lightboxImg.src = allImages[currentImgIndex].src;
}

// Category filter
function filterImages(category) {
  const images = document.querySelectorAll('.image');
  images.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}
