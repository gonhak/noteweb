// Dom elements
// Nawicja przycisk i obracana ikona

const navigation = document.querySelector('.nav__container__mobile__page');
const navBtnCollapse = document.querySelector('.nav__container__mobile__button__collapse');
const navIcon = document.querySelector('.fa-chevron-circle-up');

// Popup wychodzenie i cała jego struktura

const popupQuitBtn = document.querySelector('.main__desktop__popup__container__quit');
const popup = document.querySelector('.main__desktop__popup');

// Przycisk Menu szukanie

const searchingDesktopBtn = document.querySelector('.nav__container__desktop__menu__button--search');

// Czyszczenie i szukanie mobilne

const mobileFiltrCleanerBtn = document.querySelector('.MobileClearBtn');
const mobileFiltrSearchBtn = document.querySelector('.MobileSearchBtn');

// Czyszczenie i szukanie popup

const DesktopFiltrCleanerBtn = document.querySelector('.DesktopTrashBtn');
const DesktopFiltrSearchBtn = document.querySelector('.DesktopSearchBtn');

// Inputy

const searchDesktopInput = document.querySelector('.searchDesktopInput');
const searchMobileInput = document.querySelector('.searchMobileInput');

// Date Formater

const cleaningCardClasses = () => {
    mobileNote.forEach(note => {
        if (note.classList.contains("hidden")) {
            note.classList.remove('hidden');
        } else if (note.classList.contains("active")) {
            note.classList.remove('active');
        };
    });

    desktopNote.forEach(note => {
        if (note.classList.contains("hidden")) {
            note.classList.remove('hidden');
        } else if (note.classList.contains("active")) {
            note.classList.remove('active');
        };
    });
};

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

    searchMobileInput.setAttribute('placeholder', "Podaj swoją klasę...");
};

// Quiting popup

const quitingPopup = () => {
    popup.classList.toggle('Disabled');
    popup.classList.remove('Active');

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


// Desktop

const showingDesktopResults = () => {
    cleaningCardClasses();

    const newDateFormatDesktop = searchDesktopInput.value;
    const newDateCorrectOrderDesktop = newDateFormatDesktop.split("-").reverse().join("-");
    const newDateFirstDotesDesktop = newDateCorrectOrderDesktop.replace('-', '.');
    const newDatesecondDotesDesktop = newDateFirstDotesDesktop.replace('-', '.');
    const finalDateDesktop = newDatesecondDotesDesktop;

    desktopNoteDateSpans.forEach(note => {

        const spanContainer = note.parentElement;
        const noteCard = spanContainer.parentElement;
        const NoteCard = noteCard.parentElement;

        if (note.innerText === finalDateDesktop) {
            NoteCard.style.display = "block";
            NoteCard.classList.add('Active');
        } else if (note.innerText !== finalDateDesktop) {
            NoteCard.style.display = "none";
            NoteCard.classList.add('hidden');
        };
    });

    searchDesktopInput.value = "";
    quitingPopup();
};

const cleaningDesktopResults = () => {
    desktopNote.forEach(note => {
        if (note.classList.contains("hidden")) {
            note.style.display = "block";
            note.classList.remove('hidden');
        } else {
            note.classList.remove('active');
        };
    });

    searchDesktopInput.value = "";
    quitingPopup();
};
// Mobile

const showingMobileResults = () => {
    cleaningCardClasses();

    const newDateFormatMobile = searchMobileInput.value;
    const newDateCorrectOrderMobile = newDateFormatMobile.split("-").reverse().join("-");
    const newDateFirstDotesMobile = newDateCorrectOrderMobile.replace('-', '.');
    const newDatesecondDotesMobile = newDateFirstDotesMobile.replace('-', '.');
    const finalDateMobile = newDatesecondDotesMobile;

    const insideNavCollapseHide = () => {
        navBtnCollapse.classList.remove('active');

        navIcon.style.transform = "rotate(-180deg)";
        navigation.style.bottom = "0";
    };

    mobileNoteDateSpans.forEach(note => {

        const spanContainer = note.parentElement;
        const noteCard = spanContainer.parentElement;
        const NoteCard = noteCard.parentElement;

        if (note.innerText === finalDateMobile) {
            NoteCard.style.display = "block";
            NoteCard.classList.add('Active');
        } else if (note.innerText !== finalDateMobile) {
            NoteCard.style.display = "none";
            NoteCard.classList.add('hidden');
        };
    });

    insideNavCollapseHide();
    searchMobileInput.value = "";
    quitingPopup();
};

const cleaningMobileResults = () => {
    mobileNote.forEach(note => {
        if (note.classList.contains("hidden")) {
            note.style.display = "block";
            note.classList.remove('hidden');
        } else {
            note.classList.remove('active');
        };
    });

    searchMobileInput.value = "";
    navColapseMobile();
};

const enterFunctionM = (event) => {
    if (event.keyCode === 13) {
        showingMobileResults();
    };
};

const enterFunctionD = (event) => {
    if (event.keyCode === 13) {
        showingDesktopResults();
    };
};

// Listeners

navBtnCollapse.addEventListener('click', navColapseMobile);
popupQuitBtn.addEventListener('click', quitingPopup);
searchingDesktopBtn.addEventListener('click', showingPopup);

// Mobile Results

mobileFiltrSearchBtn.addEventListener('click', showingMobileResults);
mobileFiltrCleanerBtn.addEventListener('click', cleaningMobileResults);

// Dekstop Results

DesktopFiltrSearchBtn.addEventListener('click', showingDesktopResults);
DesktopFiltrCleanerBtn.addEventListener('click', cleaningDesktopResults);

// Enter Functions

searchMobileInput.addEventListener('keyup', enterFunctionM);
searchDesktopInput.addEventListener('keyup', enterFunctionD);