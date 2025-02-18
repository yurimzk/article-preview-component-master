const shareButton = document.getElementById('share-button');
const shareLinks = document.querySelector('.share-links');
const shareImg = shareButton.querySelector('.share-img')

shareButton.addEventListener('click', function() {
  shareLinks.classList.toggle('hidden');

  if (shareLinks.classList.contains('hidden')) {
    shareImg.style.filter = "brightness(1)";
  } else {
    shareImg.style.filter = "brightness(10)";
  }
});
