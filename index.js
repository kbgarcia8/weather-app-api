
const clickDropdownBtn = document.querySelector("img[alt='arrowdown']");
const clickDropdown = document.querySelector('.click-dropdown-content');

clickDropdownBtn.addEventListener('click', function() {
    if (clickDropdown.classList.contains('click-dropdown-content-show')) {
        clickDropdown.classList.remove('click-dropdown-content-show');
      } else {
        clickDropdown.classList.add('click-dropdown-content-show');
      }
});

const topNavBarBtn = document.querySelector("#top-nav-menu");
const topNavBarDropdown = document.querySelector('.click-topnav-content');

topNavBarBtn.addEventListener('click', function() {
  if (topNavBarDropdown.classList.contains('click-topnav-content-show')) {
    topNavBarDropdown.classList.remove('click-topnav-content-show');
    } else {
      topNavBarDropdown.classList.add('click-topnav-content-show');
    }
});

const slideSideNavBarBtn = document.querySelector("#side-nav-menu");
const slideSideNavBarDropdown = document.querySelector('.click-sidenav-content');
const closeSideNavBarDropdownBtn = document.querySelector('.close-side-nav');

slideSideNavBarBtn.addEventListener('click', function() {
  if (!slideSideNavBarDropdown.classList.contains('click-sidenav-content-show')) {
    slideSideNavBarDropdown.classList.add('click-sidenav-content-show');
    }
});

closeSideNavBarDropdownBtn.addEventListener('click', function() {
  if (slideSideNavBarDropdown.classList.contains('click-sidenav-content-show')) {
    slideSideNavBarDropdown.classList.remove('click-sidenav-content-show');
    }
});

const prevSlidebtn = document.querySelector('.previous-img');
const nextSlidebtn = document.querySelector('.next-img');
const slideshowImages = document.querySelectorAll('.slideshow-picture-space');

function showSlideImage (slideIteration) {
  slideshowImages.forEach(function (slideshowImage, index) {
    if(slideshowImage.id == `scenery-img${slideIteration}`) {
      slideshowImage.setAttribute('style', 'display: block;');
      console.log(slideshowImage.id);
    } else {
      slideshowImage.setAttribute('style', 'display: none;');
    }
  });
}

let slideIteration = 0;
prevSlidebtn.addEventListener('click', function() {
  if (slideIteration>((slideshowImages.length-1)*-1)) {slideIteration--;}
  else {slideIteration = 0;}
  showSlideImage (slideIteration);
});

nextSlidebtn.addEventListener('click', function() {
  if (slideIteration<(slideshowImages.length-1)) {slideIteration++;}
  else {slideIteration = 0;}
  showSlideImage (slideIteration);
});


