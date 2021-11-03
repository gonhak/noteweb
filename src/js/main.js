const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav__colapse');
const navBtnIcon = document.querySelector('.nav__colapse__icon');
const searchPage = document.querySelector('.main__searchScreen');
const searchBtn = document.querySelector('.searchingBtn');
const inputName = document.querySelector('.main__searchScreen__box__input--name');
const inputDate = document.querySelector('.main__searchScreen__box__input--date');
const searchingError = document.querySelector('.main__searchScreen__box__span');
const searchingBtn = document.querySelector('.main__searchScreen__box__button');
const clearingBtn = document.querySelector('.clearingBtn');
const allCards = document.querySelectorAll('.container__card');

const nameArr = [variableCardName, functionCardName, logicalOperatorsCardName, wordIndexCardName, projectionCardName, inputCardName];
const dateArr = [variableCardDate, functionCardDate, logicalOperatorsCardDate, wordIndexCardDate, projectionCardDate, inputCardDate];

const searching = () => {
    if (inputName.value !== "" || inputDate.value !== "") {
        searchingError.style.opacity = 0;

        if (inputDate.value !== "") {
            showingDateResults();
        } else if (inputName.value !== "") {
            showingNameResults();
        };

        showingSearchPage();
        inputName.value = "";
        inputDate.value = "";
    } else if (inputName.value === "" || inputDate.value === "") {
        searchingError.style.opacity = 1;
        console.log("error");
    };
};

const enterPressing = (event) => {
    if (event.keyCode == 13) {
        searching();
    };
};

const showingNameResults = () => {
    nameArr.forEach(cardName => {
        const convertedWord = inputName.value.charAt(0).toUpperCase() + inputName.value.substring(1);
        let cardContainer = cardName.parentElement
        let mainCard = cardContainer.parentElement

        if (convertedWord === cardName.innerText) {
            mainCard.style.display = "flex";
        } else if (convertedWord !== cardName.innerText) {
            mainCard.style.display = "none";
            mainCard.classList.add('hiden');
        }
    });
};

const showingDateResults = () => {
    const newDateFormat = inputDate.value;
    const newDateCorrectOrder = newDateFormat.split("-").reverse().join("-");
    const newDateFirstDotes = newDateCorrectOrder.replace('-', '.');
    const newDatesecondDotes = newDateFirstDotes.replace('-', '.');
    const finalDate = newDatesecondDotes;

    dateArr.forEach(cardDate => {
        let cardContainer = cardDate.parentElement
        let mainCard = cardContainer.parentElement

        if (finalDate === cardDate.innerText) {
            mainCard.style.display = "flex";
        } else if (finalDate !== cardDate.innerText) {
            mainCard.style.display = "none";
            mainCard.classList.add('hiden');
        };
    });
};

const showingSearchPage = () => {
    searchBtn.classList.toggle("active");

    if (searchBtn.classList.contains("active")) {
        searchPage.style.opacity = 1;
        searchPage.style.zIndex = '3';
    } else {
        searchPage.style.opacity = 0;
        searchPage.style.zIndex = '-1';
    };
};

searchingBtn.addEventListener('click', searching);
inputName.addEventListener('keydown', enterPressing);
inputDate.addEventListener('keydown', enterPressing);
searchBtn.addEventListener('click', showingSearchPage);

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('active');

    if (navBtn.classList.contains('active')) {
        nav.style.width = 250 + 'px';
        navBtnIcon.style.transform = 'rotateY(-180deg)';
    } else {
        nav.style.width = 100 + 'px';
        navBtnIcon.style.transform = 'rotateY(0deg)';
    };
});

clearingBtn.addEventListener('click', () => {
    allCards.forEach(card => {
        let cardContainer = card.parentElement
        let mainCard = cardContainer.parentElement


        if (card.classList.contains('hiden')) {
            card.style.display = "flex";
            mainCard.classList.remove('hiden');
        } else {
            setTimeout(function () {
                clearingBtn.style.color = "red"
            }, 0000);
            setTimeout(function () {
                clearingBtn.style.color = "black"
            }, 1000);
        }
    });
});