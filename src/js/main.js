// Variables

const navigation = document.querySelector('.nav__container__mobile__page');
const navBtnCollapse = document.querySelector('.nav__container__mobile__button__collapse');
const navIcon = document.querySelector('.fa-chevron-circle-up');
const popupQuitBtn = document.querySelector('.main__container__desktop__popup__container__quit');
const popup = document.querySelector('.main__container__desktop__popup');
const searchingDesktopBtn = document.querySelector('.nav__container__desktop__menu__button--search');
const mobileFiltrCleanerBtn = document.querySelector('.MobileClearBtn');
const mobileFiltrSearchBtn = document.querySelector('.MobileSearchBtn');
const DesktopFiltrCleanerBtn = document.querySelector('.DesktopTrashBtn');
const DesktopFiltrSearchBtn = document.querySelector('.DesktopSearchBtn');
const searchDesktopInput = document.querySelector('.searchDesktopInput');
const searchMobileInput = document.querySelector('.searchMobileInput');
let mobileResult;
let desktopResult;

const mobileClassesIds = [Cl1AM, Cl1BM, Cl1CM, Cl1DM, Cl2AM, Cl2BM, Cl2CM, Cl2DM, Cl3AM, Cl3BM, Cl3CM, Cl3DM, Cl3EM, Cl3FM, Cl3GM, Cl4AM, Cl4BM, Cl4CM];
const desktopClassesIds = [Cl1AD, Cl1BD, Cl1CD, Cl1DD, Cl2AD, Cl2BD, Cl2CD, Cl2DD, Cl3AD, Cl3BD, Cl3CD, Cl3DD, Cl3ED, Cl3FD, Cl3GD, Cl4AD, Cl4BD, Cl4CD];

// Colapsing nav

const navColapseMobile = () => {
    navBtnCollapse.classList.toggle('active');

    if (navBtnCollapse.classList.contains('active')) {
        navIcon.style.transform = "rotate(0deg)";
        navigation.style.bottom = "-99px";
    } else {
        navIcon.style.transform = "rotate(-180deg)";
        navigation.style.bottom = "0";
    };
};

// Quiting popup

const quitingPopup = () => {
    popup.classList.toggle('Disabled');
    popup.classList.toggle('Active');

    if (popup.classList.contains('Disabled')) {
        popup.style.opacity = "0";
        popup.style.zIndex = "-10";
    };
};

// showing popup

const showingPopup = () => {
    popup.classList.toggle('Active');
    popup.classList.remove('Disabled');

    if (popup.classList.contains('Active')) {
        popup.style.opacity = "1";
        popup.style.zIndex = "5";
    };
};

// Class filters

const showingMobileResults = () => {
    mobileClassesIds.forEach(schoolClass => {
        let classChildren = schoolClass.children[0];
        let classHtml = classChildren.children;
        let className = classHtml[0].innerText;
        let inputValueOriginal = searchMobileInput.value;
        let inputValueFix = inputValueOriginal[1].toUpperCase();
        let correctInputValue = searchMobileInput.value.replace(inputValueOriginal[1], inputValueFix);

        if (className !== correctInputValue) {
            schoolClass.style.display = "none";
            schoolClass.classList.toggle('hidden');
        } else if (className === correctInputValue) {
            schoolClass.style.display = "block";
            schoolClass.classList.toggle('active');
        };
    });

    searchMobileInput.value = "";
    navColapseMobile();
};

const cleaningMobileResults = () => {
    mobileClassesIds.forEach(schoolClass => {
        if (schoolClass.classList.contains("hidden")) {
            schoolClass.style.display = "block";
            schoolClass.classList.toggle('hidden');
        } else {
            schoolClass.classList.toggle('active');
        };
    });

    searchMobileInput.value = "";
    navColapseMobile();
};

// Desktop

const showingDesktopResults = () => {
    desktopClassesIds.forEach(schoolClass => {
        let classChildren = schoolClass.children[0];
        let classHtml = classChildren.children;
        let className = classHtml[0].innerText;
        let inputValueOriginal = searchDesktopInput.value;
        let inputValueFix = inputValueOriginal[1].toUpperCase();
        let correctInputValue = searchDesktopInput.value.replace(inputValueOriginal[1], inputValueFix);

        if (className !== correctInputValue) {
            schoolClass.style.display = "none";
            schoolClass.classList.toggle('hidden');
        } else if (className === correctInputValue) {
            schoolClass.style.display = "block";
            schoolClass.classList.toggle('active');
        };
    });

    searchDesktopInput.value = "";
    quitingPopup();
};

const cleaningDesktopResults = () => {
    desktopClassesIds.forEach(schoolClass => {
        if (schoolClass.classList.contains("hidden")) {
            schoolClass.style.display = "block";
            schoolClass.classList.toggle('hidden');
        } else {
            schoolClass.classList.toggle('active');
        };
    });

    searchMobileInput.value = "";
    quitingPopup();
};

const enterFunctionM = (event) => {
    if(event.keyCode === 13){
        showingMobileResults();
    };
};

const enterFunctionD = (event) => {
    if(event.keyCode === 13){
        showingDesktopResults();
    };
};

// Listeners

navBtnCollapse.addEventListener('click', navColapseMobile);
popupQuitBtn.addEventListener('click', quitingPopup);
searchingDesktopBtn.addEventListener('click', showingPopup);
mobileFiltrSearchBtn.addEventListener('click', showingMobileResults);
mobileFiltrCleanerBtn.addEventListener('click', cleaningMobileResults);
DesktopFiltrSearchBtn.addEventListener('click', showingDesktopResults);
DesktopFiltrCleanerBtn.addEventListener('click', cleaningDesktopResults);
searchMobileInput.addEventListener('keyup', enterFunctionM);
searchDesktopInput.addEventListener('keyup', enterFunctionD);

// ---------------------------------------------------------------------------------------------
// Date

// const copyRightYear = document.querySelector('.nav__container__page__copyright__year');

// const year = new Date().getFullYear();
// copyRightYear.innerText = year;