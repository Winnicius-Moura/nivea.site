window.addEventListener('scroll', onScroll);

onScroll();

function onScroll(){
    showBackToTopButtonOnScroll()
    showNavOnScroll()

}

function showNavOnScroll(){
    const showBackground = document.getElementById('navigation')
    if(scrollY > 0){
        showBackground.classList.add('scroll');
    } else{
        showBackground.classList.remove('scroll');
    }
}

function showBackToTopButtonOnScroll(){
    const showButtonTop = document.getElementById('backToTopButton')
    if(scrollY > 500){
        showButtonTop.classList.add('show');
    } else{
        showButtonTop.classList.remove('show');
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded');
}

function closeMenu(){
    document.body.classList.remove('menu-expanded');
}


function voltar() {
    window.history.back();
}