/**
 * Image Modal - Click-to-expand functionality for post images
 * Uses Bootstrap 5 modal component
 */
document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('imageModal');
  if (!modal) return;

  var modalImg = document.getElementById('modalImage');
  var bsModal = new bootstrap.Modal(modal);

  // Target images within post content
  document.querySelectorAll('.page-content img, .post img').forEach(function(img) {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      bsModal.show();
    });
  });
});
