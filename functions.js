export function createClickDropdown (
    clickDropdownButtonText,
    clickDropdownParentClass, 
    clickDropdownBtnClass, 
    clickDropdownContainerClass, 
    clickDropdwonContainerShowClass, 
    clickDropdownLinks) {
    const clickDropdownParent = document.querySelector(`.${clickDropdownParentClass}`);

    var click_dropdown_1 = document.createElement('DIV');
    click_dropdown_1.setAttribute('class', 'click-me-space');
    click_dropdown_1.setAttribute('id', 'click-dropdown');
    clickDropdownParent.appendChild(click_dropdown_1);
    
    var click_dropdown_2 = document.createElement('DIV');
    click_dropdown_2.setAttribute('class', 'click-me-space-text');
    click_dropdown_2.textContent = `${clickDropdownButtonText}`;
    click_dropdown_1.appendChild(click_dropdown_2);
    
    var click_dropdown_4 = document.createElement('IMG');
    click_dropdown_4.setAttribute('src', './images/arrow-chevron-down.svg');
    click_dropdown_4.setAttribute('alt', 'arrowdown');
    click_dropdown_4.setAttribute('class', `${clickDropdownBtnClass}`);
    click_dropdown_2.appendChild(click_dropdown_4);
    
    var click_dropdown_5 = document.createElement('DIV');
    click_dropdown_5.setAttribute('class', `${clickDropdownContainerClass}`);
    click_dropdown_1.appendChild(click_dropdown_5);
    
    clickDropdownLinks.forEach(function (clickDropdownLink, index) {
        var click_dropdown_option = document.createElement('A');
        click_dropdown_option.setAttribute('href', `${clickDropdownLink.link}`);
        click_dropdown_option.setAttribute('id', `click-dropdown-link${index}`);
        click_dropdown_option.textContent = `${clickDropdownLink.option}`;
        click_dropdown_5.appendChild(click_dropdown_option);
    });
    
    const clickDropdownBtn = document.querySelector(`.${clickDropdownBtnClass}`);
    const clickDropdownContainer = document.querySelector(`.${clickDropdownContainerClass}`);

    clickDropdownBtn.addEventListener('click', function() {
        if (clickDropdownContainer.classList.contains(`${clickDropdwonContainerShowClass}`)) {
            clickDropdownContainer.classList.remove(`${clickDropdwonContainerShowClass}`);
          } else {
            clickDropdownContainer.classList.add(`${clickDropdwonContainerShowClass}`);
          }
    });
}
export function createHoverDropdown (
    hoverDropdownButtonText,
    hoverDropdownParentClass, 
    hoverDropdownBtnClass, 
    hoverDropdownContainerClass, 
    hoverDropdwonContainerShowClass, 
    hoverDropdownLinks) {
    
    const hoverDropdownParent = document.querySelector(`.${hoverDropdownParentClass}`);
    
    var hover_dropdown_1 = document.createElement('DIV');
    hover_dropdown_1.setAttribute('class', `${hoverDropdownBtnClass}`);
    hover_dropdown_1.setAttribute('id', 'hover-dropdown');
    hoverDropdownParent.appendChild(hover_dropdown_1);

    var hover_dropdown_2 = document.createElement('P');
    hover_dropdown_2.setAttribute('class', 'hover-me-space-text');
    hover_dropdown_2.textContent = `${hoverDropdownButtonText}`;
    hover_dropdown_1.appendChild(hover_dropdown_2);

    var hover_dropdown_4 = document.createElement('DIV');
    hover_dropdown_4.setAttribute('class', `${hoverDropdownContainerClass}`);
    hover_dropdown_1.appendChild(hover_dropdown_4);

    var hover_dropdown_5 = document.createElement('A');
    hover_dropdown_5.setAttribute('href', '#');
    hover_dropdown_4.appendChild(hover_dropdown_5);

    hoverDropdownLinks.forEach(function (hoverDropdownLink, index) {
        var hover_dropdown_option = document.createElement('A');
        hover_dropdown_option.setAttribute('href', `${hoverDropdownLink.link}`);
        hover_dropdown_option.setAttribute('id', `hover-dropdown-link${index}`);
        hover_dropdown_option.textContent = `${hoverDropdownLink.option}`;
        hover_dropdown_4.appendChild(hover_dropdown_option);
    });
    
    const hoverDropdownBtn = document.querySelector(`.${hoverDropdownBtnClass}`);
    const hoverDropdownContainer = document.querySelector(`.${hoverDropdownContainerClass}`);

    hoverDropdownBtn.addEventListener('click', function() {
        if (hoverDropdownContainer.classList.contains(`${hoverDropdwonContainerShowClass}`)) {
            hoverDropdownContainer.classList.remove(`${hoverDropdwonContainerShowClass}`);
          } else {
            hoverDropdownContainer.classList.add(`${hoverDropdwonContainerShowClass}`);
          }
    });
    
}
export function createSlideCurtainMenu (
    curtainSlideButtonText,
    curtainSlideParentClass, 
    curtainSlideBtnId,
    curtainSlideCloseBtnclass,
    curtainSlideContainerClass, 
    curtainSlideContainerShowClass,
    curtainSlideLinks) {
    
    const curtainSlideParent = document.querySelector(`.${curtainSlideParentClass}`);

    var curtain_sidemenu_1 = document.createElement('DIV');
    curtain_sidemenu_1.setAttribute('class', 'nav-dropdown-menu');
    curtain_sidemenu_1.setAttribute('id', 'nav-side-dropdown');
    curtainSlideParent.appendChild(curtain_sidemenu_1);

    var curtain_sidemenu_2 = document.createElement('DIV');
    curtain_sidemenu_2.setAttribute('class', `${curtainSlideContainerClass}`);
    curtain_sidemenu_1.appendChild(curtain_sidemenu_2);

    var curtain_sidemenu_3 = document.createElement('BUTTON');
    curtain_sidemenu_3.setAttribute('class', `${curtainSlideCloseBtnclass}`);
    curtain_sidemenu_3.textContent = "X";
    curtain_sidemenu_2.appendChild(curtain_sidemenu_3);

    curtainSlideLinks.forEach(function (curtainSlideLink, index) {
        var curtain_sidemenu_option = document.createElement('A');
        curtain_sidemenu_option.setAttribute('href', `${curtainSlideLink.link}`);
        curtain_sidemenu_option.setAttribute('id', `curtain-slide-link${index}`);
        curtain_sidemenu_option.textContent = `${curtainSlideLink.option}`;
        curtain_sidemenu_2.appendChild(curtain_sidemenu_option);
    });

    var curtain_sidemenu_15 = document.createElement('DIV');
    curtain_sidemenu_15.setAttribute('class', 'nav-side-space');
    curtain_sidemenu_1.appendChild(curtain_sidemenu_15);

    var curtain_sidemenu_17 = document.createElement('IMG');
    curtain_sidemenu_17.setAttribute('src', './images/hamburger-button.svg');
    curtain_sidemenu_17.setAttribute('alt', 'side-nav-burgermenu');
    curtain_sidemenu_17.setAttribute('id', `${curtainSlideBtnId}`);
    curtain_sidemenu_15.appendChild(curtain_sidemenu_17);

    var curtain_sidemenu_16 = document.createElement('P');
    curtain_sidemenu_16.setAttribute('class', 'nav-side-space-text');
    curtain_sidemenu_16.setAttribute('id', 'slide-menu-text')
    curtain_sidemenu_16.textContent = `${curtainSlideButtonText}`;
    curtain_sidemenu_15.appendChild(curtain_sidemenu_16);

    var curtain_sidemenu_19 = document.createElement('P');
    curtain_sidemenu_19.setAttribute('class', 'nav-side-space-text');
    curtain_sidemenu_19.textContent = "Register";
    curtain_sidemenu_15.appendChild(curtain_sidemenu_19);

    var curtain_sidemenu_21 = document.createElement('P');
    curtain_sidemenu_21.setAttribute('class', 'nav-side-space-text');
    curtain_sidemenu_21.textContent = "Login";
    curtain_sidemenu_15.appendChild(curtain_sidemenu_21);

    const slideSlideMenuBtn = document.querySelector(`#${curtainSlideBtnId}`);
    const slideSlideMenuDropdown = document.querySelector(`.${curtainSlideContainerClass}`);
    const closeSlideMenuDropdownBtn = document.querySelector(`.${curtainSlideCloseBtnclass}`);
    
    slideSlideMenuBtn.addEventListener('click', function() {
      if (!slideSlideMenuDropdown.classList.contains(`${curtainSlideContainerShowClass}`)) {
        slideSlideMenuDropdown.classList.add(`${curtainSlideContainerShowClass}`);
        }
    });
    
    closeSlideMenuDropdownBtn.addEventListener('click', function() {
      if (slideSlideMenuDropdown.classList.contains(`${curtainSlideContainerShowClass}`)) {
        slideSlideMenuDropdown.classList.remove(`${curtainSlideContainerShowClass}`);
        }
    });

}
export function createImgCarousel (
    imgCarouselParentClass, 
    imgCarouselPrevBtnId,
    imgCarouselNextBtnId,
    animationName,
    imgContainerClass, 
    imgCarouselLinks) {
    
    const imgCarouselParent = document.querySelector(`.${imgCarouselParentClass}`);

    imgCarouselLinks.forEach(function (imgCarouselLink, index) {
        var image_carousel_space = document.createElement('DIV');
        image_carousel_space.setAttribute('class', `${imgContainerClass} ${animationName}`);
        image_carousel_space.setAttribute('id', `scenery-img${index}`);
        if (index == 0) {
            image_carousel_space.setAttribute('style', 'display: block;');
        }
        imgCarouselParent.appendChild(image_carousel_space);

        var image_carousel_image = document.createElement('IMG');
        image_carousel_image.setAttribute('src', `${imgCarouselLink.source}`);
        image_carousel_image.setAttribute('alt', 'scenery1');
        image_carousel_image.setAttribute('class', 'slideshow-picture');
        image_carousel_space.appendChild(image_carousel_image);

        var image_carousel_caption = document.createElement('P');
        image_carousel_caption.setAttribute('class', 'image-caption');
        image_carousel_caption.textContent = `${imgCarouselLink.caption}`;
        image_carousel_space.appendChild(image_carousel_caption);
    });


    var image_carousel_17 = document.createElement('A');
    image_carousel_17.setAttribute('class', `${imgCarouselPrevBtnId}`);
    imgCarouselParent.appendChild(image_carousel_17);

    var image_carousel_18 = document.createElement('IMG');
    image_carousel_18.setAttribute('src', './images/double-left.svg');
    image_carousel_18.setAttribute('alt', '');
    image_carousel_17.appendChild(image_carousel_18);

    var image_carousel_19 = document.createElement('A');
    image_carousel_19.setAttribute('class', `${imgCarouselNextBtnId}`);
    imgCarouselParent.appendChild(image_carousel_19);

    var image_carousel_20 = document.createElement('IMG');
    image_carousel_20.setAttribute('src', './images/double-right.svg');
    image_carousel_20.setAttribute('alt', '');
    image_carousel_19.appendChild(image_carousel_20);

    const prevSlidebtn = document.querySelector(`.${imgCarouselPrevBtnId}`);
    const nextSlidebtn = document.querySelector(`.${imgCarouselNextBtnId}`);
    const slideshowImages = document.querySelectorAll(`.${imgContainerClass}`);
    
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
}
//function to create object for option name with respective href/link
export function linkCreator (option, link) {
    return {
        option: option,
        link: link,
        createLink () {
            const dropdownLinks = {
                "option": option,
                "link": link
            }
            return dropdownLinks;
        },
    };
}
//function to create object for image sources with respective captions
export function slidesCreator (source, caption) {
    return {
        source: source,
        caption: caption,
        createSlides () {
            const ImgLinks = {
                "source": source,
                "caption": caption
            }
            return ImgLinks;
        },
    };
}
