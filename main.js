window.addEventListener('scroll', onScroll);

onScroll();

function onScroll(){
    showBackToTopButtonOnScroll()
    showNavOnScroll()

}

function showNavOnScroll(){
    if(scrollY > 0){
        navigation.classList.add('scroll');
    } else{
        navigation.classList.remove('scroll');
    }
}



function showBackToTopButtonOnScroll(){
    if(scrollY > 500){
        backToTopButton.classList.add('show');
    } else{
        backToTopButton.classList.remove('show');
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded');
}

function closeMenu(){
    document.body.classList.remove('menu-expanded');
}