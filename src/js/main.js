// Variables

const navigation = document.querySelector('.nav__container__mobile__page');
const navBtnCollapse = document.querySelector('.nav__container__mobile__button__collapse');
const navIcon = document.querySelector('.fa-chevron-circle-up');
const popupQuitBtn = document.querySelector('.main__container__desktop__popup__container__quit');
const popup = document.querySelector('.main__container__desktop__popup');
const searchingDesktopBtn = document.querySelector('.nav__container__desktop__menu__button--search');

// Colapsing nav

const navColapseMobile = () => {
    navBtnCollapse.classList.toggle('active');
    
    if(navBtnCollapse.classList.contains('active')){
        navIcon.style.transform = "rotate(0deg)";
        navigation.style.bottom = "-99px";
    }else{
        navIcon.style.transform = "rotate(-180deg)";
        navigation.style.bottom = "0";
    };
};

// Quiting popup

const quitingPopup = () => {
    popup.classList.toggle('Disabled');
    popup.classList.toggle('Active');

    if(popup.classList.contains('Disabled')){
        popup.style.opacity = "0";
        popup.style.zIndex = "-10";
    };
};

// showing popup

const showingPopup = () => {
    popup.classList.toggle('Active');
    popup.classList.remove('Disabled');

    if(popup.classList.contains('Active')){
        popup.style.opacity = "1";
        popup.style.zIndex = "5";
        console.log("dodaje klase active");
    };
};

// Listeners

navBtnCollapse.addEventListener('click', navColapseMobile);
popupQuitBtn.addEventListener('click', quitingPopup);
searchingDesktopBtn.addEventListener('click', showingPopup);


// ---------------------------------------------------------------------------------------------
// Date

// const copyRightYear = document.querySelector('.nav__container__page__copyright__year');

// const year = new Date().getFullYear();
// copyRightYear.innerText = year;