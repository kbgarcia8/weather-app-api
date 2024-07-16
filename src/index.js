/***** For Top Nav Bar Dropdown (didnt convert to module) *****/
const topNavBarBtn = document.querySelector("#top-nav-menu");
const topNavBarDropdown = document.querySelector('.click-topnav-content');

topNavBarBtn.addEventListener('click', function() {
  if (topNavBarDropdown.classList.contains('click-topnav-content-show')) {
    topNavBarDropdown.classList.remove('click-topnav-content-show');
    } else {
      topNavBarDropdown.classList.add('click-topnav-content-show');
    }
});

/***** Click Dropdown *****/
const clickDropdownButtonText = "Click this Menu";
const clickDropdownParentClass = "dropdown";
const clickDropdownBtnClass = "click-dropdown-btn";
const clickDropdownContainerClass = "click-dropdown-content";
const clickDropdwonContainerShowClass = "click-dropdown-content-show";
const clickDropdownLinks = [];
//Add as many options you like
clickDropdownLinks.push(linkCreator("Click1", "#").createLink());
clickDropdownLinks.push(linkCreator("Click2", "#").createLink());
clickDropdownLinks.push(linkCreator("Click3", "#").createLink());
clickDropdownLinks.push(linkCreator("Click4", "#").createLink());
/*Use function*/
createClickDropdown (
    clickDropdownButtonText,
    clickDropdownParentClass, 
    clickDropdownBtnClass, 
    clickDropdownContainerClass, 
    clickDropdwonContainerShowClass, 
    clickDropdownLinks);

/***** Hover Dropdown *****/
const hoverDropdownButtonText = "Hover this Menu";
const hoverDropdownParentClass = "dropdown";
const hoverDropdownBtnClass = "hover-me-space";
const hoverDropdownContainerClass = "hover-dropdown-content";
const hoverDropdwonContainerShowClass = "hover-dropdown-content-show";
const hoverDropdownLinks = [];
hoverDropdownLinks.push(linkCreator("Hover1", "#").createLink());
hoverDropdownLinks.push(linkCreator("Hover2", "#").createLink());
hoverDropdownLinks.push(linkCreator("Hover3", "#").createLink());
hoverDropdownLinks.push(linkCreator("Hover4", "#").createLink());
/*Use function*/
createHoverDropdown (
    hoverDropdownButtonText,
    hoverDropdownParentClass, 
    hoverDropdownBtnClass, 
    hoverDropdownContainerClass, 
    hoverDropdwonContainerShowClass, 
    hoverDropdownLinks);

/***** Curtain Side Menu *****/
const curtainSlideButtonText = "Menu";
const curtainSlideParentClass = "nav-dropdown";
const curtainSlideBtnId = "side-nav-menu";
const curtainSlideCloseBtnclass = "close-side-nav";
const curtainSlideContainerClass = "click-sidenav-content";
const curtainSlideContainerShowClass = "click-sidenav-content-show";
const curtainSlideLinks = [];
curtainSlideLinks.push(linkCreator("Slide1", "#").createLink());
curtainSlideLinks.push(linkCreator("Slide2", "#").createLink());
curtainSlideLinks.push(linkCreator("Slide3", "#").createLink());
curtainSlideLinks.push(linkCreator("Slide4", "#").createLink());
/*Use function*/
createSlideCurtainMenu (
    curtainSlideButtonText,
    curtainSlideParentClass, 
    curtainSlideBtnId,
    curtainSlideCloseBtnclass,
    curtainSlideContainerClass, 
    curtainSlideContainerShowClass,
    curtainSlideLinks);

/***** Image Carousel *****/
const imgCarouselParentClass = "image-slideshow";
const imgCarouselPrevBtnId = "previous-img";
const imgCarouselNextBtnId = "next-img";
const animationName = "fade";
const imgContainerClass = "slideshow-picture-space";
const imgCarouselLinks = [];
imgCarouselLinks.push(slidesCreator("./images/scenery1.jpg", "Image 1 Caption").createSlides());
imgCarouselLinks.push(slidesCreator("./images/scenery2.jpg", "Image 2 Caption").createSlides());
imgCarouselLinks.push(slidesCreator("./images/scenery3.jpg", "Image 3 Caption").createSlides());
imgCarouselLinks.push(slidesCreator("./images/scenery4.jpg", "Image 4 Caption").createSlides());
/*Use function*/
createImgCarousel (
    imgCarouselParentClass, 
    imgCarouselPrevBtnId,
    imgCarouselNextBtnId,
    animationName,
    imgContainerClass, 
    imgCarouselLinks); 