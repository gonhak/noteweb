const navigation = document.querySelector('.nav__container__page');
const navBtnCollapse = document.querySelector('.nav__container__button__collapse');
const navIcon = document.querySelector('.fa-chevron-circle-up');


const navColapse = () => {
    navBtnCollapse.classList.toggle('active');
    
    if(navBtnCollapse.classList.contains('active')){
        navIcon.style.transform = "rotate(90deg)";
        navigation.style.right = "0"
    }else{
        navIcon.style.transform = "rotate(-90deg)";
        navigation.style.right = "-100vw"
    };
};

navBtnCollapse.addEventListener('click', navColapse);