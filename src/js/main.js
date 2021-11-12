// Variables

const navigation = document.querySelector('.nav__container__page');
const navBtnCollapse = document.querySelector('.nav__container__button__collapse');
const navIcon = document.querySelector('.fa-chevron-circle-up');

// Colapsing nav

const navColapse = () => {
    navBtnCollapse.classList.toggle('active');
    
    if(navBtnCollapse.classList.contains('active')){
        navIcon.style.transform = "rotate(0deg)";
        navigation.style.bottom = "-100px";
    }else{
        navIcon.style.transform = "rotate(-180deg)";
        navigation.style.bottom = "0";
    };
};

navBtnCollapse.addEventListener('click', navColapse);


// ---------------------------------------------------------------------------------------------
// Date

// const copyRightYear = document.querySelector('.nav__container__page__copyright__year');

// const year = new Date().getFullYear();
// copyRightYear.innerText = year;