const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-bar');
    const navLinks = document.querySelectorAll('.nav-bar a');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7}s`;
            }
        })
    });
}

navSlide();

function showImageDesktop(e, imageName) {
    const tabs = document.querySelectorAll('.tabs .tab-item');
    const tabImages = document.querySelectorAll('.featured-gallery .tab-image');
    const caps = document.querySelectorAll('.cap');
    const image = document.getElementById(imageName);
    const caption = image.getElementsByTagName('div')[0];

    // get rid of previos image caption
    caps.forEach(cap => {
        cap.className = cap.className.replace('caption', '');
    })
    // get rid of previos active tabs
    tabs.forEach(tab => {
        tab.className = tab.className.replace('active-tab', '');
    });
    // get rid of active images
    tabImages.forEach(img => {
        img.className = img.className.replace('active-image', '');
    })


    image.classList.add('active-image'); // add new active image
    e.currentTarget.className += ' active-tab'; // add new active nav
    caption.classList.add('caption'); // add caption for new image
}

function showImageMobile(e, imageName) {
    const tabImages = document.querySelectorAll('.featured-gallery .tab-image');
    const caps = document.querySelectorAll('.cap');
    const image = document.getElementById(imageName);
    const caption = image.getElementsByTagName('div')[0];
    const mobileTab = image.getElementsByClassName('mobile-tab')[0];
    const mobileTabs = document.querySelectorAll('.mobile-active-tab');

    // get rid of previos image caption
    caps.forEach(cap => {
        cap.className = cap.className.replace('caption', '');
    })
    // get rid of active images
    tabImages.forEach(img => {
        img.className = img.className.replace('active-image', '');
    })
    // get rid of active mobile tab 
    mobileTabs.forEach(one => {
        one.className = one.className.replace('mobile-active-tab', '');
    })

    image.classList.add('active-image'); 
    caption.classList.add('caption');
    mobileTab.classList.add('mobile-active-tab')
}
