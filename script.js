document.querySelectorAll('.project-tile').forEach(tile => {
  tile.addEventListener('mouseover', () => {
    tile.style.transform = 'scale(1.1)';
    tile.style.transition = 'transform 0.3s ease-out';
  });
  tile.addEventListener('mouseout', () => {
    tile.style.transform = 'scale(1)';
  });
});

document.querySelector('.profile-section img').addEventListener('mouseover', function() {
  this.style.transform = 'rotate(5deg)';
  this.style.transition = 'transform 0.3s ease-out';
});
document.querySelector('.profile-section img').addEventListener('mouseout', function() {
  this.style.transform = 'rotate(0deg)';
});